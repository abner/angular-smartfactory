declare module smartFactory {
  interface FactoryFacilities {
    list(size: number, overrideObj?: Object);
    build(overrideObj?: Object);
  }


   interface IConstructorWithFactory {
    __rosieFactoryName__: string;
    factory: any;
  }

   interface IFactoryServiceStatic {
    factory: any;
    faker: any;

    define(name: String, constructor?: Function):  IRosieFactory;

    build(name: string, attributes?: any[], options?: Object): Object;

    buildList(name: string, size: number, attributes?: any[], options?: Object): Object[];

    attributes(attributes: Object, options?: Object): Object;

    options(options: Object): Object;

    extend(name: string): IRosieFactory;

    for(target: any) : FactoryFacilities;

  }

  interface IRosieFactory {

    wrappedFactory: any;
    name: string;

    attr(name: string, dependenciesOrValue: any | string[], value?: any): IRosieFactory;

    sequence(name: string, dependencies?: string[], builder?: Function) : IRosieFactory;

  }
}
