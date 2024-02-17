import { mathEnforcer } from './mathEnforcer.js';
import { expect } from 'chai';

describe('mathEnforcer', () => {
    describe('addFive', () => {
        it('should return undefined when pass string as input', () => {
            //Arrange
            const stringInput = 'string';
            //Act
            const undefinedResult = mathEnforcer.addFive(stringInput);
            //Assert
            expect(undefinedResult).to.be.undefined;
        })
        it('should return undefined when pass undefined as input', () => {
            //Arrange
            const undefinedInput = undefined;
            //Act
            const undefinedResult = mathEnforcer.addFive(undefinedInput);
            //Assert
            expect(undefinedResult).to.be.undefined;
        })
        it('should return undefined when pass number as string as input', () => {
            //Arrange
            const numberAsInput = "5";
            //Act
            const undefinedResult = mathEnforcer.addFive(numberAsInput);
            //Assert
            expect(undefinedResult).to.be.undefined;
        })
        it('should return correct result when pass floating number as input and assert with closeTo', () => {
            //Arrange
            const floatuingInput = 5.50;
            //Act
            const correctResult = mathEnforcer.addFive(floatuingInput);
            //Assert
            expect(correctResult).to.be.closeTo(10.50, 0.01); // 0.01 is the precision
        })
        it('should return correct result when pass floating number as input and assert with equal', () => {
            //Arrange
            const floatuingInput = 5.50;
            //Act
            const correctResult = mathEnforcer.addFive(floatuingInput);
            //Assert
            expect(correctResult).to.be.equal(10.50); // 0.01 is the precision
        })
        it('should return correct result when pass floating number as input and assert with equal', () => {
            //Arrange
            const floatuingInput = 1.0000001;
            //Act
            const correctResult = mathEnforcer.addFive(floatuingInput);
            //Assert
            expect(correctResult).to.be.closeTo(6.01, 0.01); // 0.01 is the precision
        })
        it('should return correct result when pass number as input', () => {
            //Arrange
            const numberInput = 5;
            //Act
            const correctResult = mathEnforcer.addFive(numberInput);
            //Assert
            expect(correctResult).to.be.equal(10);
        })
        it('should return correct result when pass negative number as input', () => {
                //Arrange
                const negativenNumberInput = -15;
                //Act
                const correctResult = mathEnforcer.addFive(negativenNumberInput);
                //Assert
                expect(correctResult).to.be.equal(-10);
            })
        it('should return correct result when pass negative number as input', () => {
                //Arrange
                const negativenNumberInput = -5;
                //Act
                const correctResult = mathEnforcer.addFive(negativenNumberInput);
                //Assert
                expect(correctResult).to.be.equal(0);
            })
        });
        describe('subtractTen', () => {
            it('should return undefined when pass string as input', () => {
                //Arrange
                const stringInput = 'string';
                //Act
                const undefinedResult = mathEnforcer.subtractTen(stringInput);
                //Assert
                expect(undefinedResult).to.be.undefined;
            })
            it('should return undefined when pass undefined as input', () => {
                //Arrange
                const undefinedInput = undefined;
                //Act
                const undefinedResult = mathEnforcer.subtractTen(undefinedInput);
                //Assert
                expect(undefinedResult).to.be.undefined;
            })
            it('should return undefined when pass number as string as input', () => {
                //Arrange
                const numberAsInput = "15";
                //Act
                const undefinedResult = mathEnforcer.subtractTen(numberAsInput);
                //Assert
                expect(undefinedResult).to.be.undefined;
            })
            it('should return correct result when pass floating number as input and assert with closeTo', () => {
                //Arrange
                const floatuingInput = 15.50;
                //Act
                const correctResult = mathEnforcer.subtractTen(floatuingInput);
                //Assert
                expect(correctResult).to.be.closeTo(5.50, 0.01); // 0.01 is the precision
            })
            it('should return correct result when pass floating number as input and assert with equal', () => {
                //Arrange
                const floatuingInput = 10.50;
                //Act
                const correctResult = mathEnforcer.subtractTen(floatuingInput);
                //Assert
                expect(correctResult).to.be.equal(0.50); // 0.01 is the precision
            })
            it('should return correct result when pass floating number as input and assert with equal', () => {
                //Arrange
                const floatuingInput = 10.0000001;
                //Act
                const correctResult = mathEnforcer.subtractTen(floatuingInput);
                //Assert
                expect(correctResult).to.be.closeTo(0.01, 0.01); // 0.01 is the precision
            })
            it('should return correct result when pass number as input', () => {
                //Arrange
                const numberInput = 20;
                //Act
                const correctResult = mathEnforcer.subtractTen(numberInput);
                //Assert
                expect(correctResult).to.be.equal(10);
            })
            it('should return correct result when pass negative number as input', () => {
                    //Arrange
                    const negativenNumberInput = -15;
                    //Act
                    const correctResult = mathEnforcer.subtractTen(negativenNumberInput);
                    //Assert
                    expect(correctResult).to.be.equal(-25);
                })
            it('should return correct result when pass negative number as input', () => {
                    //Arrange
                    const negativenNumberInput = 10;
                    //Act
                    const correctResult = mathEnforcer.subtractTen(negativenNumberInput);
                    //Assert
                    expect(correctResult).to.be.equal(0);
                }) 
        });
        describe('sum', () => {
            it('should return undefined with incorrect Param1 and correct Param2 ', () => {
                //Arrange
                 const incorrectParam1 = 'string';
                 const correctParam2 = 5;
                //Act
                const undefinedResult = mathEnforcer.sum(incorrectParam1, correctParam2);
                //Assert
                expect(undefinedResult).to.be.undefined;
            })
            it('should return undefined with incorrect Param1 and incorrect Param2 ', () => {
                //Arrange
                 const incorrectParam1 = 'string';
                 const incorrectParam2 = '5';
                //Act
                const undefinedResult = mathEnforcer.sum(incorrectParam1, incorrectParam2);
                //Assert
                expect(undefinedResult).to.be.undefined;})
            it('should return undefined with correct Param1 and incorrect Param2 ', () => {
                //Arrange
                 const correctParam1 = 5;
                 const incorrectParam2 = 'string';
                //Act
                const undefinedResult = mathEnforcer.sum(correctParam1, incorrectParam2);
                //Assert
                expect(undefinedResult).to.be.undefined;
            })
            it('should return undefined with correct Param1 and Param2: number as a string ', () => {
                //Arrange
                 const numberAsStringParam1 = 5;
                 const correctParam2 = "5";
                //Act
                const undefinedResult = mathEnforcer.sum(numberAsStringParam1, correctParam2);
                //Assert
                expect(undefinedResult).to.be.undefined;
            })
            it('should return undefined with Param1: number as a string  and correct Param2 ', () => {
                //Arrange
                 const numberAsStringParam1 = "5";
                 const correctParam2 = 5;
                //Act
                const undefinedResult = mathEnforcer.sum(numberAsStringParam1, correctParam2);
                //Assert
                expect(undefinedResult).to.be.undefined;
            })
            it('should return correct result with correct Param1  and correct Param2 ', () => {
                //Arrange
                 const correctParam1 = 5;
                 const correctParam2 = 5;
                //Act
                const correctResult = mathEnforcer.sum(correctParam1, correctParam2);
                //Assert
                expect(correctResult).to.be.equal(10);
            })
            it('should return correct result with  Param1 - negative number and Param2 - negative number ', () => {
                //Arrange
                 const negativeParam1 = -5;
                 const negativeParam2 = -5;
                //Act
                const correctResult = mathEnforcer.sum(negativeParam1, negativeParam2);
                //Assert
                expect(correctResult).to.be.equal(-10);
            })
            it('should return correct result with  Param1 - negative number and  correct Param2  ', () => {
                //Arrange
                 const negativeParam1 = -5;
                 const negativeParam2 = 5;
                //Act
                const correctResult = mathEnforcer.sum(negativeParam1, negativeParam2);
                //Assert
                expect(correctResult).to.be.equal(0);
            })
            it('should return correct result with  Param1 - float number and correct Param2 using closeTo ', () => {
                //Arrange
                 const floatNumberParam1 = 5.05;
                 const floatNumberParam2 = 5;
                //Act
                const correctResult = mathEnforcer.sum(floatNumberParam1, floatNumberParam2);
                //Assert
                expect(correctResult).to.be.closeTo(10.05, 0.01);
            })
            it('should return correct result with  Param1 - float number and Param2 - float number using closeTo ', () => {
                //Arrange
                 const floatNumberParam1 = 5.05;
                 const floatNumberParam2 = 5.05;
                //Act
                const correctResult = mathEnforcer.sum(floatNumberParam1, floatNumberParam2);
                //Assert
                expect(correctResult).to.be.closeTo(10.10, 0.01);
            })
            it('should return correct result with  Param1 - float number and correct Param2 using equal ', () => {
                //Arrange
                 const floatNumberParam1 = 5.05;
                 const floatNumberParam2 = 5;
                //Act
                const correctResult = mathEnforcer.sum(floatNumberParam1, floatNumberParam2);
                //Assert
                expect(correctResult).to.be.equal(10.05);
            })
            
        });
    });  