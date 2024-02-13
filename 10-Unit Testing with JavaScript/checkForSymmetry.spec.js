import { isSymmetric } from './checkForSymmetry.js';
import { expect } from 'chai';


describe("isSymmetric", () => {

    it("if given an empty array should return true", () => {
        // Arrange
        const input = [];
        // Act
        const result = isSymmetric(input);
        // Assert
        expect(result).to.be.true; 
    });
    it("should return false if a non-array is given", () => {
        // Arrange
        
        // Act
        const nanResult = isSymmetric(NaN);
        const undefinedResult = isSymmetric(undefined);
        const onjectResult = isSymmetric({});
        const nullResult = isSymmetric(null); 
        const stringResult = isSymmetric("string");
        const numberResult = isSymmetric(1);

        // Assert
        expect(nanResult).to.be.false;
        expect(undefinedResult).to.be.false;
        expect(onjectResult).to.be.false;
        expect(nullResult).to.be.false;
        expect(stringResult).to.be.false;
        expect(numberResult).to.be.false;
    });
    it("should return false if a non-symmetric array is given", () => {
        // Arrange
        const nonSymmetricArray = [1, 2, 3, 4, 5];
        //Act
        const result = isSymmetric(nonSymmetricArray);
        //Assert
        expect(result).to.be.false;
    });
    it("should return true if a symmetric array is given", () => {
        // Arrange
        const symmetricArray = [3, 2, 1, 2, 3];
        // Act
        const result = isSymmetric(symmetricArray);
        // Assert
        expect(result).to.be.true;
        
    })
    it('should return true if a single item array is given', () => {
        // Arrange
        const symmetricArray = [3]
        // Act
        const result = isSymmetric(symmetricArray)
        // Assert
        expect(result).to.be.true
    })
    it("should return false for symetric lookalike values", () => {
        // Arrange
        const symmetricArray = ['1', '2', '3', '2', '1'];
        // Act
        const result = isSymmetric(symmetricArray);
        // Assert
        expect(result).to.be.true;
        
    })
})