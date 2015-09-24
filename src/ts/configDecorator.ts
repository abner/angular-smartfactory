module smartFactory {

    export interface FactoryFacilities {
      list(size: number, overrideObj?: Object);
      build(overrideObj?: Object);
    }

    export interface IConstructorWithFactory {
      __rosieFactoryName__: string;
      factory: any;
    }

    /**
     * @ngFactories.config decorator adds static member called 'factory' to the class
     * which provides two method 'build' and 'list', which are shortcuts to
     * Factory.build(name) and Factory.buildList(name, size)
     * passing as name defined in the factoryName
     * Factory with the name factoryName need to be defined before call to this methdos
     * Example:
     *    Given I have the follow factory defined:
     *           Factory.define('user').sequence('id').attr('name', 'John')
     *    And i decorate my class User
     *         @ngFactories.config('user')
     *         class User {}
     *    when testing or prototyping my angular app i could call the
     *    facilities methods 'build' and list, avaiable on User.factory
     *    to get a object or a list of objects through the Factory
     *     User.factory.build() => { id: 1, name: 'John'}
     *     User.factory.list(2) => [{ id: 1, name: 'John'}, { id: 2, name: 'John'}],
     */
    export function config(factoryName: string) {
  		return (target: any) => {
        (<IConstructorWithFactory>target).__rosieFactoryName__ = factoryName;

        (<IConstructorWithFactory>target).factory = {
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
