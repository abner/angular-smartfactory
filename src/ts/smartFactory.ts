declare var angular: ng.IAngularStatic;
declare var Factory: any;
declare var faker: any;

/* tslint:disable */
(function (angular: ng.IAngularStatic, rosieFactory: any, faker: any): void {
/* tslint:enable */

  function constructorFactory() {
    rosieFactory.for = function(target: any): rosie.IFactory {
      if (((<any>target).__rosieFactoryName__) &&  ((<any>target).factory)) {
        return (<smartFactory.IConstructorWithFactory>(<any>target)).factory;
      } else {
        throw new Error('no factory registered for ' + target.toString() + ' please check!');
      }
    }
    return rosieFactory;
  }

  angular.module('smartFactory', []).service('Factory', constructorFactory);
  angular.module('smartFactory').service('faker', faker);

})(angular, Factory, faker);
