const { expect } = require("chai");
const calculateNumber = require("./2-calcul_chai");

describe("calculateNumber function", () => {
  describe("SUM", () => {
    it("should add two positive numbers correctly", () => {
      expect(calculateNumber("SUM", 3, 5)).to.equal(8);
    });
    it("test with first parameter as a floating number", () => {
      expect(calculateNumber("SUM", 1.0, 3)).to.equal(4);
      expect(calculateNumber("SUM", 1.2, 3)).to.equal(4);
      expect(calculateNumber("SUM", 1.7, 3)).to.equal(5);
    });
    it("test it with floating second var", () => {
      expect(calculateNumber("SUM", 1, 2.0)).to.equal(3);
      expect(calculateNumber("SUM", 1, 2.6)).to.equal(4);
      expect(calculateNumber("SUM", 1, 2.2)).to.equal(3);
    });
    it("should return the rounded sum of two numbers'", () => {
      expect(calculateNumber("SUM", 1.9, 2.0)).to.equal(4);
      expect(calculateNumber("SUM", 1.9, 2.6)).to.equal(5);
      expect(calculateNumber("SUM", 1.2, 2.6)).to.equal(4);
    });
    it("test it with negative floating var", () => {
      expect(calculateNumber("SUM", -2.0, 1.9)).to.equal(0);
      expect(calculateNumber("SUM", 2.6, -1.9)).to.equal(1);
      expect(calculateNumber("SUM", -2.6, -1.2)).to.equal(-4);
    });
    it("test it with postive floating var", () => {
      expect(calculateNumber("SUM", -2, 2)).to.equal(0);
      expect(calculateNumber("SUM", 3, -2)).to.equal(1);
      expect(calculateNumber("SUM", -3, -1)).to.equal(-4);
    });
  });
  describe("SUBTRACT", () => {
    it("should subtract two positive numbers correctly", () => {
      expect(calculateNumber("SUBTRACT", 5, 3)).to.equal(2);
    });
    it("test it with floating first var", () => {
      expect(calculateNumber("SUBTRACT", 3, 1.0)).to.equal(2);
      expect(calculateNumber("SUBTRACT", -3, 1.7)).to.equal(-5);
      expect(calculateNumber("SUBTRACT", 3, -1.7)).to.equal(5);
    });
    it("test it with floating second var", () => {
      expect(calculateNumber("SUBTRACT", 2.0, 1)).to.equal(1);
      expect(calculateNumber("SUBTRACT", 2.6, 1)).to.equal(2);
      expect(calculateNumber("SUBTRACT", 2.2, 1)).to.equal(1);
    });
    it("test it with floating second var", () => {
      expect(calculateNumber("SUBTRACT", 2.0, 1.9)).to.equal(0);
      expect(calculateNumber("SUBTRACT", 2.6, 1.9)).to.equal(1);
      expect(calculateNumber("SUBTRACT", 2.6, 1.2)).to.equal(2);
      expect(calculateNumber("SUBTRACT", -2.6, 1.2)).to.equal(-4);
      expect(calculateNumber("SUBTRACT", 2.6, -1.9)).to.equal(5);
    });
    it("test it with negative floating var", () => {
      expect(calculateNumber("SUBTRACT", -2.0, 1.9)).to.equal(-4);
      expect(calculateNumber("SUBTRACT", 2.6, -1.9)).to.equal(5);
      expect(calculateNumber("SUBTRACT", -2.6, -1.2)).to.equal(-2);
    });
  });
  describe("DIVIDE", () => {
    it("positive full numbers", () => {
      expect(calculateNumber("DIVIDE", 8.0, 2.0)).to.equal(4);
    });
    it("negative full numbers", () => {
      expect(calculateNumber("DIVIDE", -8.0, 2.0)).to.equal(-4);
      expect(calculateNumber("DIVIDE", -8.0, -2.0)).to.equal(4);
      expect(calculateNumber("DIVIDE", 8.0, -2.0)).to.equal(-4);
      expect(calculateNumber("DIVIDE", 9.0, -2.0)).to.equal(-4.5);
    });
    it("dividing by zero", () => {
      expect(calculateNumber("DIVIDE", -8.0, 0)).to.equal("Error");
      expect(calculateNumber("DIVIDE", 8.0, 0)).to.equal("Error");
      expect(calculateNumber("DIVIDE", 8, 0)).to.equal("Error");
    });
    it("dividing by zero", () => {
      expect(calculateNumber("DIVIDE", -8, 2)).to.equal(-4);
      expect(calculateNumber("DIVIDE", 8, 2)).to.equal(4);
      expect(calculateNumber("DIVIDE", -8, -2)).to.equal(4);
    });
    it("zero dividing by zero", () => {
      expect(calculateNumber("DIVIDE", 0, 0)).to.equal("Error");
      expect(calculateNumber("DIVIDE", 0, 2)).to.equal(0);
      expect(calculateNumber("DIVIDE", 0, -2.2)).to.equal(0);
    });
  });
});