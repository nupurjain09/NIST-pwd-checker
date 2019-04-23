const expect = require('chai').expect;
const passwordChecker = require('../app/password-checker.js');

describe("Password checker tests", function(){
    //length test.
    describe("length test", function(){
        it("returns true when length of the password is between 8 and 64 characters (both ends inclusive)", function(){
            const value = passwordChecker.checkPasswordLength("Some value");
            expect(value).to.equal(true);
        });
        it("returns false when length of the password is less than 8", function(){
            const value = passwordChecker.checkPasswordLength("123123");
            expect(value).to.equal(false);
        });
        it("returns false when length of the password is greater than 64", function(){
            const value = passwordChecker.checkPasswordLength("qwertyuiop123321mustang1234567890michael654321superman1qaz2wsx1qaz2wsx");
            expect(value).to.equal(false);
        });
        it("returns false when length of the password is 0", function(){
            const value = passwordChecker.checkPasswordLength("0");
            expect(value).to.equal(false);
        });
    });

    //ascii characters test
    describe("test with ascii characters", function(){
        it("returns true when space is in the password", function(){
            const value = passwordChecker.checkIfAscii("s mall");
            expect(value).to.equal(true);
        });

        it("returns false when non-ascii characters are in the password", function(){
            const value = passwordChecker.checkIfAscii("á = small");
            expect(value).to.equal(false);
        });
    });

    // common passwords test is taken care of in the bloomfilter.js library

});
