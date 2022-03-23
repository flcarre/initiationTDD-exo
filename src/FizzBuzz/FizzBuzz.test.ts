import { FizzBuzz } from "./FizzBuzz";

describe('FizzBuzz', () => {
    it('should return 1 when n is 1', () => {
        const result = FizzBuzz(1);
        expect(result).toBe('1');
    })

    it('should return 1 2 when n is 2', () => {
        const result = FizzBuzz(2);
        expect(result).toBe('1 2');
    })
    
    it('should return 1 2 Fizz when n is 3', () => {
        const result = FizzBuzz(3);
        expect(result).toBe('1 2 Fizz');
    })

    it('should return 1 2 Fizz 4 Buzz when n is 5', () => {
        const result = FizzBuzz(5);
        expect(result).toBe('1 2 Fizz 4 Buzz');
    })

    it('should return ... FizzBuzz when n is 15', () => {
        const result = FizzBuzz(15);
        expect(result).toBe('1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz');
    })
})