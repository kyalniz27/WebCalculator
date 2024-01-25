class ArithhmeticError extends Error{
    constructor(message){
        super(message)
        this.name = 'ArithmeticError'
    }
}

class BadRequestError extends Error{
    constructor(message){
        super(message)
        this.name = 'BadRequestError'
    }
}

//Syntax: Test Suite
describe('calculator.js', function(){
    //ToDo: tests or specs (they are the same but as convention in Jasmine we use spec)
    it('should add numbers', function(){
        const calculator = new Calculator();
        calculator.add(5);
        expect(calculator.total).toBe(5);
    })

    it('should subtract numbers', function(){
        const calculator = new Calculator()
        calculator.total = 30
        calculator.subtract(5)
        expect(calculator.total).toBe(25)
    })

    it('should multiply numbers', function(){
        const calculator = new Calculator()
        calculator.total = 20
        calculator.multiply(5)
        expect(calculator.total).toBe(100)
    })

    it('should divide numbers', function(){
        const calculator = new Calculator()
        calculator.total = 100
        calculator.divide(5)
        expect(calculator.total).toBe(20)
    })

    it('should initialize the total', function() {
        const calculator = new Calculator()
        expect(calculator.total).toBe(0)
        expect(calculator.total).toBeFalsy()
    })

    //Matchers
    it('should have unique calculator object', function(){
        const calculator1 = new Calculator()
        const calculator2 = new Calculator()
        //expect(calculator1).toBe(calculator2) It false because they look at different memory location
        expect(calculator1).not.toBe(calculator2)
    })

    it("should have common methods", function(){
        const calculator = new Calculator()
        expect(calculator.add).toBeDefined()
        expect(calculator.add).not.toBeUndefined()
    })

    it("should overwrite total value", function(){
        const calculator = new Calculator()
        calculator.total = null
        expect(calculator.total).toBeNull()
    })

    it("'Calc' should be in the constructor name", function(){
        const calculator = new Calculator()
        let arr = [1,2,3,4,5]
        expect(arr).toContain(2)
        expect(calculator.constructor.name).toContain('Calc')
    })

    //toBeNan matcher
    it("does not handle NaN for multiply", function(){
        const calculator = new Calculator()
        calculator.total = 10
        calculator.multiply('a')
        expect(calculator.total).toBeNaN()
    })

    //toThrow matcher
    it('should throw error when number is divided by zero', function(){
        const calculator = new Calculator()
        calculator.total = 10

        expect(function(){calculator.divide(0)}).toThrow()

        expect(function(){calculator.divide(0)}).toThrow(new Error('Number can not be divided by zero'))
    })

    //toThrow Error matcher
    it('should throw error message', function(){
        const calculator = new Calculator()
        calculator.total = 10
        expect(function(){calculator.divide(0)})
        .toThrowError(ArithhmeticError, 'Number can not be divided by zero')
    })

    //toMatch with Regex
    it('should return total a number', function(){
        const calculator = new Calculator()
        calculator.total = 10
        expect(calculator.add(10)).toBe(20)
        expect(calculator.total).toMatch(/-?\d+/)
        expect(typeof calculator.total).toMatch('ber')
    })

    it('should return the total as value', function(){
        const calculator = new Calculator()
        calculator.total = 10
        expect(calculator.total).toEqual(jasmine.anything())
    })

    //anyMatcher
    it('should be an instance', function(){
        const calculator = new Calculator()
        calculator.total = 10
        expect(calculator).toEqual(jasmine.any(Object))
        expect(calculator.total).toEqual(jasmine.any(Number))
    })

    
});