const mockCalculator = {
  add: jest.fn(),
  divide: jest.fn()
}

// mock the entire caluclator module
jest.mock('./calculator', () => {
  return mockCalculator;
})

import { mean } from "./math-application";



// set up a suite of multiple tests
describe('math applicaiton mean functionality', () => {

    beforeAll(() => {
      mockCalculator.add.mockImplementation((one, two) => one + two);
      mockCalculator.divide.mockImplementation((one, two) => one/two);
    })

    test('mean should return 6 for the parameters 4,6,8', () => {
      const result = mean(4,6,8);
      expect(result).toEqual(6); // assertation
    });

    // we can use it or test for a single test case
    it('should return -10 for parameters -15, -10, -5', () => {
      const result = mean(-15,-10,-5);
      expect(result).toEqual(-10); // assertation
    })

})