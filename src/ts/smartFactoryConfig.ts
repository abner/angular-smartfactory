module smartFactory {
  'use strict';

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
}
