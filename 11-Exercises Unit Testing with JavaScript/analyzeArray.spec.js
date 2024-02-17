import { analyzeArray } from "./analyzeArray.js";
import { expect } from "chai";

describe("analyzeArray", () => {

    it("should return undefined when pass non-array as input", () => { 
        const nonArray = "someString";
        const undefinedResult = analyzeArray(nonArray);
        expect(undefinedResult).to.be.undefined;
     });
     it("should return undefined when pass empty array as input", () => { 
        const nonArray = [];
        const undefinedResult = analyzeArray(nonArray);
        expect(undefinedResult).to.be.undefined;
     });
     it("should return correct value  when pass array with different numbers as input", () => { 
        const arrayInput = [3, 5, 7, 1, 8, 6];
        const correctResult = analyzeArray(arrayInput);
        expect(correctResult).to.deep.equal({min: 1, max: 8, length: 6})
     });
     it("should return correct value  when pass array with single element numbers as input", () => { 
        const arrayInput = [3];
        const correctResult = analyzeArray(arrayInput);
        expect(correctResult).to.deep.equal({min: 3, max: 3, length: 1})
     });
     it("should return correct value  when pass array with same numbers as input", () => { 
        const arrayInput = [3, 3, 3, 3, 3, 3];
        const correctResult = analyzeArray(arrayInput);
        expect(correctResult).to.deep.equal({min: 3, max: 3, length: 6})
     });
})