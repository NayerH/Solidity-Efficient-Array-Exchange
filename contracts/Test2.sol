// SPDX-License-Identifier: MIT
pragma solidity =0.8.14;
import "./Test1.sol";
import "hardhat/console.sol";

contract Test2 {
  uint256[] public weights;
  Test1 test1Instance;


  constructor(address _test1Address) {
    test1Instance = Test1(_test1Address);
  }

  function testArray1() public {
    uint256 weightsSize = test1Instance.getArraySize();
    for(uint i = 0; i < weightsSize; i++){
      weights.push(test1Instance.weightsArray(i));
      console.log(weights[i]);
    }
  }

  function testArray2() public {
    weights = test1Instance.getAllArray();
    for(uint i = 0; i < weights.length; i++){
      console.log(weights[i]);
    }
  }

  function testArray3() public {
    weights = test1Instance.getAllArray2();
    for(uint i = 0; i < weights.length; i++){
      console.log(weights[i]);
    }
  }

  function testMapping1() public {
    uint256 weightsSize = test1Instance.getArraySize();
    for(uint8 i = 0; i < weightsSize; i++){
      weights.push(test1Instance.weightsMapping(i));
      console.log(weights[i]);
    }
  }

  function testMapping2() public {
    weights = test1Instance.getAllMapping();
    for(uint i = 0; i < weights.length; i++){
      console.log(weights[i]);
    }
  }
}
