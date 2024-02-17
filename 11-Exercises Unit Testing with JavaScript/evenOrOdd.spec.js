import {isOddOrEven} from "./evenOrOdd.js"
import {expect} from 'chai'

describe("isOddOrEven", () => {

    it('should return undefined when pass non string value as input', () => {
        // Arrange
        const inputValueNumber = 15
        const inputValueUndefined = undefined
        const inputValueNull = null
        const inputValueFloarNumber = 15.5
        // Act
        const resultNumber = isOddOrEven(inputValueNumber)
        const resultUndefined = isOddOrEven(inputValueUndefined)
        const resultNull = isOddOrEven(inputValueNull)
        const resultFloarNumber = isOddOrEven(inputValueFloarNumber)
        // Assert
        expect(resultNumber).to.be.undefined
        expect (isOddOrEven(inputValueUndefined)).to.be.undefined
        expect (isOddOrEven(inputValueNull)).to.be.undefined
        expect (isOddOrEven(inputValueFloarNumber)).to.be.undefined
        expect (isOddOrEven(inputValueNumber)).to.be.undefined
    }) 
    it('should return even when the input string length is even', () => {
        // Arrange
        const evenStringLenght = "1234"
        // Act
        const result = isOddOrEven(evenStringLenght)
        // Assert
        expect(result).to.be.equal("even")
    }) 
    it('should return odd when the input string length is odd', () => {
         // Arrange
         const oddStringLenght = "123"
         // Act
         const result = isOddOrEven(oddStringLenght)
         // Assert
         expect(result).to.be.equal("odd")
    }) 
    it('should return even when the input string length is 0', () => {
        // Arrange
        const zeroStringLenght = ""
        // Act
        const result = isOddOrEven(zeroStringLenght)
        // Assert
        expect(result).to.be.equal("even")
   }) 
});