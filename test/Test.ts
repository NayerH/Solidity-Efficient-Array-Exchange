import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Test", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployFixture() {

    const [owner, otherAccount] = await ethers.getSigners();

    const Test1 = await ethers.getContractFactory("Test1");
    const Test2 = await ethers.getContractFactory("Test2");

    const test1Instance = await Test1.deploy();
    const test2Instance = await Test2.deploy(test1Instance.address);
    console.log("SUCCESS");

    return { test1Instance, test2Instance };
  }

  describe("Deployment", function () {
    it("testArray1", async function () {
      const { test1Instance, test2Instance } = await loadFixture(deployFixture);
      await test2Instance.testArray1();
      expect(await test2Instance.weights(0)).to.equal(10);
      expect(await test2Instance.weights(14)).to.equal(24);
      expect(await test2Instance.getArraySize()).to.equal(15);
    });

    it("testArray2", async function () {
      const { test1Instance, test2Instance } = await loadFixture(deployFixture);
      await test2Instance.testArray2();
      expect(await test2Instance.weights(0)).to.equal(10);
      expect(await test2Instance.weights(14)).to.equal(24);
      expect(await test2Instance.getArraySize()).to.equal(15);
    });

    it("testArray3", async function () {
      const { test1Instance, test2Instance } = await loadFixture(deployFixture);
      await test2Instance.testArray3();
      expect(await test2Instance.weights(0)).to.equal(10);
      expect(await test2Instance.weights(14)).to.equal(24);
      expect(await test2Instance.getArraySize()).to.equal(15);
    });

    it("testMapping1", async function () {
      const { test1Instance, test2Instance } = await loadFixture(deployFixture);
      await test2Instance.testMapping1();
      expect(await test2Instance.weights(0)).to.equal(10);
      expect(await test2Instance.weights(14)).to.equal(24);
      expect(await test2Instance.getArraySize()).to.equal(15);
    });

    it("testMapping2", async function () {
      const { test1Instance, test2Instance } = await loadFixture(deployFixture);
      await test2Instance.testMapping2();
      expect(await test2Instance.weights(0)).to.equal(10);
      expect(await test2Instance.weights(14)).to.equal(24);
      expect(await test2Instance.getArraySize()).to.equal(15);
    });

  });

});
