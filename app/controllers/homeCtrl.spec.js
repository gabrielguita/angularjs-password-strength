
describe("validationInputPwdText()", function() {
    var scope, $location, controller;

    beforeEach(module('passwordStrength'));

    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        controller = function(){
            return $controller('HomeCtrl', { '$scope': scope})
        }
        controller();
        scope.password = '';
    }));

    it("should check password", function() {
        scope.password = 'xxwwqq11';
        var cBb = 'xxwwqq11';         
        expect(scope.password).toBe('xxwwqq11');
        expect(scope.password.length).toEqual(8);
    });

    it('compares the actual to the expected using a regular expression', function() {
        expect('Hello Jasmine').toMatch(/jasmine/i);
        var pw = "xxwwqq11";
        scope.password = 'xxwwqq11';
        expect(scope.password).toMatch(pw);
    });

    it('should exist a password', function() {
        scope.password = 'somepassword';
        expect(scope.password).toBeDefined();
        expect(scope.password.length).toBeGreaterThan(0);
    });

    xit('should exist a password', function() {
        //skipped case
    });

});