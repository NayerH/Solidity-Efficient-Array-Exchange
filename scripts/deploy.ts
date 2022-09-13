import { ethers } from "hardhat";

async function main() {
  const Test1 = await ethers.getContractFactory("Test1");
  const Test2 = await ethers.getContractFactory("Test2");

  const test1Instance = await Test1.deploy();
  const test2Instance = await Test2.deploy(test1Instance.address);

  console.log("Successful");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
