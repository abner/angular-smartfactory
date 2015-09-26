declare var angular: ng.IAngularStatic;
declare var Factory: any;
declare var faker: any;

/* tslint:disable */
(function (angular: ng.IAngularStatic, rosieFactory: any, faker: any): void {
/* tslint:enable */
  class FactoryService {
    static factory: any = rosieFactory;
    static faker: any = faker;

    wrappedFactory: any;
    name: string;


    public static define(name: String, constructor?: Function):  smartFactory.IRosieFactory {
      var fac: FactoryService =  new FactoryService();
      fac.wrappedFactory = <FactoryService>this.factory.define(name, constructor);
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

    public static extend(name: string): smartFactory.IRosieFactory {
      return this.factory.extend(name);
    }

    public static for(target: any) : smartFactory.FactoryFacilities {
      if (((<any>target).__rosieFactoryName__) &&  ((<any>target).factory)) {
        return (<smartFactory.IConstructorWithFactory>(<any>target)).factory;
      } else {
        throw new Error('no factory registered for ' + target.toString() + ' please check!');
      }
    }

    attr(name: string, dependenciesOrValue: any | string[], value?: any): smartFactory.IRosieFactory {
      if (dependenciesOrValue && dependenciesOrValue.constructor === Array) {
        this.wrappedFactory = (<smartFactory.IRosieFactory>this.wrappedFactory).attr(name, dependenciesOrValue, value);
      } else {
        this.wrappedFactory = (<smartFactory.IRosieFactory>this.wrappedFactory).attr(name, [], dependenciesOrValue);
      }

      return this;
    }

    sequence(name: string, dependencies?: string[], builder?: Function) : smartFactory.IRosieFactory {
      if (dependencies === undefined && builder === undefined) {
        this.wrappedFactory = (<smartFactory.IRosieFactory>this.wrappedFactory).sequence(name);
      } else if (dependencies === undefined) {
        this.wrappedFactory = (<smartFactory.IRosieFactory>this.wrappedFactory).sequence(name, [], builder || null);
      } else {
        this.wrappedFactory = (<smartFactory.IRosieFactory>this.wrappedFactory).sequence(name, dependencies, builder || null);
      }
      return this;
    }

  }

  class ServiceConstructor {

    constructor() {
      return FactoryService;
    }



  }

  angular.module('smartFactory', []).service('Factory', ServiceConstructor);

})(angular, Factory, faker);
