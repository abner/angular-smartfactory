/// <reference path="../../.tmp/typings/jasmine/jasmine.d.ts"/>
/// <reference path="../../.tmp/typings/angularjs/angular.d.ts"/>
/// <reference path="../../.tmp/typings/angularjs/angular-mocks.d.ts"/>
describe('smartFactory', () => {

  // Definitions
  var FactoryService: typeof smartFactory.FactoryWrapper;
  var  USER_OBJ: Object = {id: 1, name: 'Man Withname'};

  // beforeEach
  beforeEach(angular.mock.module('smartFactory'));

  beforeEach(inject((_Factory_: typeof smartFactory.FactoryWrapper) => {
    FactoryService = _Factory_;
    FactoryService.define('user').sequence('id').attr('name',[], 'Man Withname');
  }));

  // class decorated
  @smartFactory.config('user')
  class DecoratedUser {

  }

  it('defines Factory', () => {
    expect(FactoryService.build('user')).toEqual(USER_OBJ);
  });

  it('has factory exposed on decorated class', () => {
    expect(FactoryService.for(DecoratedUser).build()).toEqual(USER_OBJ);
  });
});
