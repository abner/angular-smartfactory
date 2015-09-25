/// <reference path="../../.tmp/typings/angularjs/angular.d.ts" />
/// <reference path="../../.tmp/typings/requirejs/require.d.ts" />

var Factory = require('rosie').Factory;
var faker = require('faker');
declare var angular: ng.IAngularStatic;

//import * as smartFactoryDecorator from './configDecorator';

module smartFactory {

  export function config(factoryName: string) {
    return (target: any) => {
      (<smartFactory.IConstructorWithFactory>target).__rosieFactoryName__ = factoryName;

      (<smartFactory.IConstructorWithFactory>target).factory = {
        list: function(size: number, overrideObj?: Object) {
          return Factory.buildList(target.__rosieFactoryName__, size, overrideObj);
        },
        build: function(overrideObj?: Object) {
          return Factory.build(target.__rosieFactoryName__, overrideObj);
        }
      };
    };
  }

  export interface FactoryFacilities {
    list(size: number, overrideObj?: Object);
    build(overrideObj?: Object);
  }

  export interface IConstructorWithFactory {
    __rosieFactoryName__: string;
    factory: any;
  }

  export class FakerWrapper {
    static faker: any = faker;



    public static findName(): string {
      return this.faker.name.findName();
    }
  }

  export class FactoryWrapper {
    static factory: any = Factory;

    wrappedFactory: any;
    name: string;


    public static define(name: String, constructor?: Function):  FactoryWrapper{
      var fac: FactoryWrapper =  new FactoryWrapper();
      fac.wrappedFactory = <FactoryWrapper>this.factory.define(name, constructor);
      return fac;
    }

    public static build(name: string, attributes?: any[], options?: Object): Object {
      return this.factory.build(name, attributes, options);
    }

    public static buildList(name: string, size: number, attributes?: any[], options?: Object): Object[] {
      return this.factory.build(name, size, attributes, options);
    }

    public static attributes(attributes: Object, options?: Object): Object {
      return this.factory.attributes(attributes, options);
    }

    public static options(options: Object): Object {
      return this.factory.options(options);
    }

    public static extend(name: string){
      return this.factory.extend(name);
    }

    public static for(target: any) : FactoryFacilities {
      if(((<any>target).__rosieFactoryName__) &&  ((<any>target).factory)) {
        return (<smartFactory.IConstructorWithFactory>(<any>target)).factory;
      } else {
        throw new Error('no factory registered for ' + target.toString() + ' please check!');
      }
    }

    attr(name: string, dependenciesOrValue: any | string[], value?: any): FactoryWrapper {
      if(dependenciesOrValue && dependenciesOrValue.constructor === Array){
        this.wrappedFactory = (<FactoryWrapper>this.wrappedFactory).attr(name, dependenciesOrValue, value);
      } else {
        this.wrappedFactory = (<FactoryWrapper>this.wrappedFactory).attr(name, [], dependenciesOrValue);
      }

      return this;
    }

    sequence(name: string, dependencies?: string[], builder?: Function) : FactoryWrapper {
      if (dependencies === undefined && builder === undefined) {
        this.wrappedFactory = (<FactoryWrapper>this.wrappedFactory).sequence(name);
      } else if(dependencies === undefined) {
        this.wrappedFactory = (<FactoryWrapper>this.wrappedFactory).sequence(name, [], builder || null);
      } else {
        this.wrappedFactory = (<FactoryWrapper>this.wrappedFactory).sequence(name, dependencies, builder || null);
      }
      return this;
    }

  }

  export class Service {

    constructor() {
      return FactoryWrapper;
    }



  }

}

if ((typeof(angular) != 'undefined')) {
  angular.module('smartFactory', []).service('Factory', smartFactory.Service);
} else {
  if(console && console.error){
    if(typeof(angular) == 'undefined'){
        console.error('smartFactory not registered beacuse angular is missing');
    }
    if(typeof(faker) == 'undefined'){
        console.error('smartFactory not registered beacuse faker.js is missing');
    }
    if(typeof(Factory) == 'undefined'){
        console.error('smartFactory not registered beacuse angular rosie is missing');
    }
  }
}

export = smartFactory;
