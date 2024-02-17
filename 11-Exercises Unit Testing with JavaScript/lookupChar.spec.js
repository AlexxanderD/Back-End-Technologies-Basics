import { lookupChar } from "./lookupChar.js";
import { expect } from "chai";

describe("lookupChar", () => {

    it('should return undefined when First parameter is from incorrect and second parameter is from correct type ', () => {
        // Arrange
        const incorrectFirstParameter = 153
        const correctSecondParameter = 1
        // Act
        const undefinedResult = lookupChar(incorrectFirstParameter, correctSecondParameter)
        // Assert
        expect(undefinedResult).to.be.undefined
    })
    it('should return undefined when First parameter is from correct and second parameter is from incorrect type ', () => {
        // Arrange
        const correctFirstParameter = "some string"
        const incorrectSecondParameter = "10"
        // Act
        const undefinedResult = lookupChar(correctFirstParameter, incorrectSecondParameter)
        // Assert
        expect(undefinedResult).to.be.undefined
    })
    it('should return undefined when First parameter is from correct and second parameter is from incorrect float type ', () => {
        // Arrange
        const correctFirstParameter = "some string"
        const incorrectFloatSecondParameter = 10.10
        // Act
        const undefinedResult = lookupChar(correctFirstParameter, incorrectFloatSecondParameter)
        // Assert
        expect(undefinedResult).to.be.undefined
    })
    it('should return Incorrect Index when First parameter is from correct and second parameter is bigger that the string length ', () => {
        // Arrange
        const correctFirstParameter = "some string"
        const biggerLengthSecondParameter = 15
        // Act
        const incorrectIndexResult = lookupChar(correctFirstParameter, biggerLengthSecondParameter)
        // Assert
        expect(incorrectIndexResult).to.be.equal("Incorrect index")
    })
    it('should return Incorrect Index when First parameter is from correct and second parameter is lower that the string length ', () => {
        // Arrange
        const correctFirstParameter = "some string"
        const lowerLengthSecondParameter = -15
        // Act
        const incorrectIndexResult = lookupChar(correctFirstParameter, lowerLengthSecondParameter)
        // Assert
        expect(incorrectIndexResult).to.be.equal("Incorrect index")
    })
    it('should return correct when all the parameters are correct', () => {
        // Arrange
        const correctFirstParameter = "some string"
        const correctSecondParameter = 1
        // Act
        const correctIndexResult = lookupChar(correctFirstParameter, correctSecondParameter)
        // Assert
        expect(correctIndexResult).to.be.equal("o")
    })
})