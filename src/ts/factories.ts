declare var Factory;
module ngFactories {
  class FactoryWrapper{
    define(name: String, constructor: Function) {
      return Factory.define(name, constructor);
    }

    build(name: string, attributes: any[], options: Object) {
      return Factory.build(name, attributes, options);
    }

    buildList(name: string, size: number, attributes: any[], options: Object) {
      return Factory.build(name, size, attributes, options);
    }
  }
  export class Service {
    private factories: {[s: string]: any; } = {};
    constructor() {
    }

  }
}
