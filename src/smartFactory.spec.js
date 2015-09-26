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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtYXJ0RmFjdG9yeS5zcGVjLnRzIl0sIm5hbWVzIjpbIkRlY29yYXRlZFVzZXIiLCJEZWNvcmF0ZWRVc2VyLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLFFBQVEsQ0FBQyxjQUFjLEVBQUU7SUFFdkIsSUFBSSxjQUFrRCxDQUFDO0lBQ3ZELElBQUssUUFBZ0IsQ0FBQztJQUd0QixVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUVoRCxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQUMsU0FBNkM7UUFDOUQsUUFBUSxHQUFHLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUMsQ0FBQztRQUMzQyxjQUFjLEdBQUcsU0FBUyxDQUFDO1FBQzNCLGNBQWMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFDLEdBQVEsSUFBTyxNQUFNLENBQUMsZUFBZSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JILENBQUMsQ0FBQyxDQUFDLENBQUM7SUFJSjtRQUFBQTtRQUdBQyxDQUFDQTtRQUhERDtZQUFDQSxZQUFZQSxDQUFDQSxNQUFNQSxDQUFDQSxNQUFNQSxDQUFDQTs7MEJBRzNCQTtRQUFEQSxvQkFBQ0E7SUFBREEsQ0FIQSxBQUdDQSxJQUFBO0lBRUQsRUFBRSxDQUFDLGlFQUFpRSxFQUFFO1FBQ3BFLGNBQWMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN6RCxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZFLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGlCQUFpQixFQUFFO1FBQ3BCLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3pELENBQUMsQ0FBQyxDQUFDO0lBR0gsRUFBRSxDQUFDLHdDQUF3QyxFQUFFO1FBQzNDLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3RFLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoic21hcnRGYWN0b3J5LnNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJkZXNjcmliZSgnc21hcnRGYWN0b3J5JywgKCkgPT4ge1xuICAvLyBEZWZpbml0aW9uc1xuICB2YXIgRmFjdG9yeVNlcnZpY2U6IHNtYXJ0RmFjdG9yeS5JRmFjdG9yeVNlcnZpY2VTdGF0aWM7XG4gIHZhciAgVVNFUl9PQko6IE9iamVjdDtcblxuICAvLyBiZWZvcmVFYWNoXG4gIGJlZm9yZUVhY2goYW5ndWxhci5tb2NrLm1vZHVsZSgnc21hcnRGYWN0b3J5JykpO1xuXG4gIGJlZm9yZUVhY2goaW5qZWN0KChfRmFjdG9yeV86IHNtYXJ0RmFjdG9yeS5JRmFjdG9yeVNlcnZpY2VTdGF0aWMpID0+IHtcbiAgICBVU0VSX09CSiA9IHtpZDogMSwgbmFtZTogJ01hbiBXaXRobmFtZSAxJ307XG4gICAgRmFjdG9yeVNlcnZpY2UgPSBfRmFjdG9yeV87XG4gICAgRmFjdG9yeVNlcnZpY2UuZGVmaW5lKCd1c2VyJykuc2VxdWVuY2UoJ2lkJykuYXR0cignbmFtZScsIFsnaWQnXSwgKHNlcTogYW55KSA9PiB7IHJldHVybiAnTWFuIFdpdGhuYW1lICcgKyBzZXE7IH0pO1xuICB9KSk7XG5cbiAgLy8gY2xhc3MgZGVjb3JhdGVkXG4gIC8qKiBvbmx5IGZvciB0eXBlc2NyaXB0ICoqL1xuICBAc21hcnRGYWN0b3J5LmNvbmZpZygndXNlcicpXG4gIGNsYXNzIERlY29yYXRlZFVzZXIge1xuXG4gIH1cblxuICBpdCgnZGVmaW5lcyBmYWN0b3JpZXMgdGhyb3VuZyBGYWN0b3J5IHdpdGhvdXQgZGVwZW5kZW5jaWVzIGFyZ3VtZW50JywgKCkgPT4ge1xuICAgIEZhY3RvcnlTZXJ2aWNlLmRlZmluZSgndXNlcnNpbXBsZScpLmF0dHIoJ25hbWUnLCAnSm9obicpO1xuICAgIGV4cGVjdChGYWN0b3J5U2VydmljZS5idWlsZCgndXNlcnNpbXBsZScpKS50b0VxdWFsKHsgbmFtZTogJ0pvaG4nIH0pO1xuICB9KTtcblxuICBpdCgnZGVmaW5lcyBGYWN0b3J5JywgKCkgPT4ge1xuICAgIGV4cGVjdChGYWN0b3J5U2VydmljZS5idWlsZCgndXNlcicpKS50b0VxdWFsKFVTRVJfT0JKKTtcbiAgfSk7XG5cbiAgLyoqIG9ubHkgZm9yIHR5cGVzY3JpcHQgKiovXG4gIGl0KCdoYXMgZmFjdG9yeSBleHBvc2VkIG9uIGRlY29yYXRlZCBjbGFzcycsICgpID0+IHtcbiAgICBleHBlY3QoRmFjdG9yeVNlcnZpY2UuZm9yKERlY29yYXRlZFVzZXIpLmJ1aWxkKCkpLnRvRXF1YWwoVVNFUl9PQkopO1xuICB9KTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIuL3RzIn0=