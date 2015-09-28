describe('smartFactory', () => {
  // Definitions
  var FactoryService: smartFactory.IFactoryWithFacilities;
  var  USER_OBJ: Object;

  // beforeEach
  beforeEach(angular.mock.module('smartFactory'));

  beforeEach(inject((_Factory_: smartFactory.IFactoryWithFacilities) => {
    USER_OBJ = {id: 1, name: 'Man Withname 1'};
    FactoryService = _Factory_;
    FactoryService.define('user').sequence('id').attr('name', ['id'], (seq: any) => { return 'Man Withname ' + seq; });
  }));

  // class decorated
  /** only for typescript **/
  @smartFactory.config('user')
  class DecoratedUser {

  }

  it('defines factories throung Factory without dependencies argument', () => {
    FactoryService.define('usersimple').attr('name', 'John');
    expect(FactoryService.build('usersimple')).toEqual({ name: 'John' });
  });

  it('defines Factory', () => {
    expect(FactoryService.build('user')).toEqual(USER_OBJ);
  });

  /** only for typescript **/
  it('has factory exposed on decorated class', () => {
    expect(FactoryService.for(DecoratedUser).build()).toEqual(USER_OBJ);
  });
});
