/// <reference path="../../.tmp/typings/jasmine/jasmine.d.ts"/>
/// <reference path="../../.tmp/typings/angularjs/angular.d.ts"/>
/// <reference path="../../.tmp/typings/angularjs/angular-mocks.d.ts"/>
/// <reference path="../../.tmp/typings/requirejs/require.d.ts"/>


import * as smartFactory from './factories';
// <reference path="./factories.ts" />



//smartFactory.faker = faker;
//smartFactory.Factory = Factory;


describe('smartFactory', () => {



  // Definitions
  var FactoryService: typeof smartFactory.FactoryWrapper;
  var  USER_OBJ: Object = {id: 1, name: 'Man Withname 1'};

  // beforeEach
  beforeEach(angular.mock.module('smartFactory'));

  beforeEach(inject((_Factory_: typeof smartFactory.FactoryWrapper) => {
    FactoryService = _Factory_;
    FactoryService.define('user').sequence('id').attr('name',['id'], (seq: any) => {return 'Man Withname ' + seq;});
  }));

  // class decorated
  /** only for typescript **/
  @smartFactory.config('user')
  class DecoratedUser {

  }

  it('defines Factory', () => {
    expect(FactoryService.build('user')).toEqual(USER_OBJ);
  });

  /** only for typescript **/
  it('has factory exposed on decorated class', () => {
    expect(FactoryService.for(DecoratedUser).build()).toEqual(USER_OBJ);
  });
});
