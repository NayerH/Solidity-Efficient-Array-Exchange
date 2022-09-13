// SPDX-License-Identifier: MIT
pragma solidity =0.8.14;
import "hardhat/console.sol";

contract Test1 {
  //public for getter functions to be automatically created
  mapping(uint256 => uint256) public weightsMapping;
  uint256[] public weightsArray;

  constructor() {
    for(uint i = 0; i < 15; i++) {
      weightsMapping[i] = i+10;
      weightsArray.push(i+10);
    }
  }

  function getArraySize() external view returns (uint256) {
    return weightsArray.length;
  }

  //Copy element by element in FOR loop from dynamic size array to fix size array
  function getAllArray() external view returns (uint256[] memory){
    uint256[] memory returnArray = new uint256[](weightsArray.length);
    for (uint i = 0; i < weightsArray.length; i++) {
        returnArray[i] = weightsArray[i];
    }
    return returnArray;
  }

  //Copy element by element in FOR loop from mapping to fix size array
  function getAllMapping() external view returns (uint256[] memory){
    uint256[] memory returnArray = new uint256[](weightsArray.length);
    for (uint i = 0; i < weightsArray.length; i++) {
        returnArray[i] = weightsMapping[i];
    }
    return returnArray;
  }

  //Return copy of dynamic size array without looping
  function getAllArray2() external view returns (uint256[] memory){
    return weightsArray;
  }
}
