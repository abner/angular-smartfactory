declare module smartFactory {
  interface FactoryFacilities {
    list(size: number, overrideObj?: Object);
    build(overrideObj?: Object);
  }

  interface IFactoryWithFacilities extends rosie.IFactoryStatic {
    for(target: any) : FactoryFacilities;
  }

   interface IConstructorWithFactory {
    __rosieFactoryName__: string;
    factory: any;
  }
}
