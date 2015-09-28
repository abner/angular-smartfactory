var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
describe('smartFactory', function () {
    var FactoryService;
    var USER_OBJ;
    beforeEach(angular.mock.module('smartFactory'));
    beforeEach(inject(function (_Factory_) {
        USER_OBJ = { id: 1, name: 'Man Withname 1' };
        FactoryService = _Factory_;
        FactoryService.define('user').sequence('id').attr('name', ['id'], function (seq) { return 'Man Withname ' + seq; });
    }));
    var DecoratedUser = (function () {
        function DecoratedUser() {
        }
        DecoratedUser = __decorate([
            smartFactory.config('user'), 
            __metadata('design:paramtypes', [])
        ], DecoratedUser);
        return DecoratedUser;
    })();
    it('defines factories throung Factory without dependencies argument', function () {
        FactoryService.define('usersimple').attr('name', 'John');
        expect(FactoryService.build('usersimple')).toEqual({ name: 'John' });
    });
    it('defines Factory', function () {
        expect(FactoryService.build('user')).toEqual(USER_OBJ);
    });
    it('has factory exposed on decorated class', function () {
        expect(FactoryService.for(DecoratedUser).build()).toEqual(USER_OBJ);
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtYXJ0RmFjdG9yeS5zcGVjLnRzIl0sIm5hbWVzIjpbIkRlY29yYXRlZFVzZXIiLCJEZWNvcmF0ZWRVc2VyLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLFFBQVEsQ0FBQyxjQUFjLEVBQUU7SUFFdkIsSUFBSSxjQUFtRCxDQUFDO0lBQ3hELElBQUssUUFBZ0IsQ0FBQztJQUd0QixVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUVoRCxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQUMsU0FBOEM7UUFDL0QsUUFBUSxHQUFHLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUMsQ0FBQztRQUMzQyxjQUFjLEdBQUcsU0FBUyxDQUFDO1FBQzNCLGNBQWMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFDLEdBQVEsSUFBTyxNQUFNLENBQUMsZUFBZSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JILENBQUMsQ0FBQyxDQUFDLENBQUM7SUFJSjtRQUFBQTtRQUdBQyxDQUFDQTtRQUhERDtZQUFDQSxZQUFZQSxDQUFDQSxNQUFNQSxDQUFDQSxNQUFNQSxDQUFDQTs7MEJBRzNCQTtRQUFEQSxvQkFBQ0E7SUFBREEsQ0FIQSxBQUdDQSxJQUFBO0lBRUQsRUFBRSxDQUFDLGlFQUFpRSxFQUFFO1FBQ3BFLGNBQWMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN6RCxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZFLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGlCQUFpQixFQUFFO1FBQ3BCLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3pELENBQUMsQ0FBQyxDQUFDO0lBR0gsRUFBRSxDQUFDLHdDQUF3QyxFQUFFO1FBQzNDLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3RFLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoic21hcnRGYWN0b3J5LnNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJkZXNjcmliZSgnc21hcnRGYWN0b3J5JywgKCkgPT4ge1xuICAvLyBEZWZpbml0aW9uc1xuICB2YXIgRmFjdG9yeVNlcnZpY2U6IHNtYXJ0RmFjdG9yeS5JRmFjdG9yeVdpdGhGYWNpbGl0aWVzO1xuICB2YXIgIFVTRVJfT0JKOiBPYmplY3Q7XG5cbiAgLy8gYmVmb3JlRWFjaFxuICBiZWZvcmVFYWNoKGFuZ3VsYXIubW9jay5tb2R1bGUoJ3NtYXJ0RmFjdG9yeScpKTtcblxuICBiZWZvcmVFYWNoKGluamVjdCgoX0ZhY3RvcnlfOiBzbWFydEZhY3RvcnkuSUZhY3RvcnlXaXRoRmFjaWxpdGllcykgPT4ge1xuICAgIFVTRVJfT0JKID0ge2lkOiAxLCBuYW1lOiAnTWFuIFdpdGhuYW1lIDEnfTtcbiAgICBGYWN0b3J5U2VydmljZSA9IF9GYWN0b3J5XztcbiAgICBGYWN0b3J5U2VydmljZS5kZWZpbmUoJ3VzZXInKS5zZXF1ZW5jZSgnaWQnKS5hdHRyKCduYW1lJywgWydpZCddLCAoc2VxOiBhbnkpID0+IHsgcmV0dXJuICdNYW4gV2l0aG5hbWUgJyArIHNlcTsgfSk7XG4gIH0pKTtcblxuICAvLyBjbGFzcyBkZWNvcmF0ZWRcbiAgLyoqIG9ubHkgZm9yIHR5cGVzY3JpcHQgKiovXG4gIEBzbWFydEZhY3RvcnkuY29uZmlnKCd1c2VyJylcbiAgY2xhc3MgRGVjb3JhdGVkVXNlciB7XG5cbiAgfVxuXG4gIGl0KCdkZWZpbmVzIGZhY3RvcmllcyB0aHJvdW5nIEZhY3Rvcnkgd2l0aG91dCBkZXBlbmRlbmNpZXMgYXJndW1lbnQnLCAoKSA9PiB7XG4gICAgRmFjdG9yeVNlcnZpY2UuZGVmaW5lKCd1c2Vyc2ltcGxlJykuYXR0cignbmFtZScsICdKb2huJyk7XG4gICAgZXhwZWN0KEZhY3RvcnlTZXJ2aWNlLmJ1aWxkKCd1c2Vyc2ltcGxlJykpLnRvRXF1YWwoeyBuYW1lOiAnSm9obicgfSk7XG4gIH0pO1xuXG4gIGl0KCdkZWZpbmVzIEZhY3RvcnknLCAoKSA9PiB7XG4gICAgZXhwZWN0KEZhY3RvcnlTZXJ2aWNlLmJ1aWxkKCd1c2VyJykpLnRvRXF1YWwoVVNFUl9PQkopO1xuICB9KTtcblxuICAvKiogb25seSBmb3IgdHlwZXNjcmlwdCAqKi9cbiAgaXQoJ2hhcyBmYWN0b3J5IGV4cG9zZWQgb24gZGVjb3JhdGVkIGNsYXNzJywgKCkgPT4ge1xuICAgIGV4cGVjdChGYWN0b3J5U2VydmljZS5mb3IoRGVjb3JhdGVkVXNlcikuYnVpbGQoKSkudG9FcXVhbChVU0VSX09CSik7XG4gIH0pO1xufSk7XG4iXSwic291cmNlUm9vdCI6Ii4vdHMifQ==