import {createCalculator} from './add-subtract.js';
import {expect} from 'chai';

describe('createCalculator', () => {

    it('should return 0 if no operation are executed on the calculator', () => {
        // Arrange
        const calculator = createCalculator();
        // Act
        const value = calculator.get();
        // Assert
        expect(value).to.equal(0);
    });
    it('should return a negative number  if only subtract operations are executed with positive numbers on the calculator', () => {
        // Arrange
        const calculator = createCalculator();
        // Act
        calculator.subtract(5);
        calculator.subtract(5);
        calculator.subtract(5);
        const value = calculator.get();
        // Assert
        expect(value).to.equal(-15);
    });  
    it('should return a positive number if only add operation are executed with positive on the calculator', () => {
        // Arrange
        const calculator = createCalculator();
        // Act
        calculator.add(2);
        calculator.add(2);
        calculator.add(100);
        const value = calculator.get();
        // Assert
        expect(value).to.equal(104);
    });
    it('should hande number as strings', () => {
        // Arrange
        const calculator = createCalculator();
        // Act
        calculator.add('2');
        calculator.add('2');
        calculator.add('100');
        calculator.subtract('104');
        const value = calculator.get();
        // Assert
        expect(value).to.equal(0);
    });
    it('should hande a mix of operations', () => {
       // Arrange
       const calculator = createCalculator();
       // Act
       calculator.add(2);
       calculator.add(2);
       calculator.add(100);
       calculator.add(-4)
       calculator.subtract(-100);
       calculator.subtract(200);
       const value = calculator.get();
       // Assert
       expect(value).to.equal(0);
    });
      
});