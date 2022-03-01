// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";

contract Achievements is ERC1155, Ownable, ERC1155Supply {
    uint256 public totalTokenIdCount;
    string public signet;
    mapping(uint256 => address[]) public tokenToAddresses;

    // Used to disable token transfers
    modifier isOverriden() {
        require(
            false,
            "Function call not permitted for non-transferrable tokens"
        );
        _;
    }

    constructor(
        uint256 _totalTokenIdCount,
        string memory _signet,
        string memory _uri
    ) ERC1155(_uri) {
        totalTokenIdCount = _totalTokenIdCount;
        signet = _signet;
    }

    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }

    // TO-DO: Verify that user is eligible to mint based on platform authenication
    function mint(
        address account,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) public {
        require(balanceOf(account, id) < 1, "Achievement already claimed");
        tokenToAddresses[id].push(account);
        _mint(account, id, amount, data);
    }

    // TO-DO: Verify that user is eligible to mint based on platform authenication
    function mintBatch(
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) public {
        for (uint256 i = 0; i < ids.length; i++) {
            require(balanceOf(to, i) < 1, "Achievement already claimed");
            tokenToAddresses[ids[i]].push(to);
        }
        _mintBatch(to, ids, amounts, data);
    }

    // OVERRIDE TRANSFERS
    function safeBatchTransferFrom(
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) public override isOverriden {}

    function safeTransferFrom(
        address from,
        address to,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) public override isOverriden {}

    function setApprovalForAll(address operator, bool approved)
        public
        override
        isOverriden
    {}

    // The following functions are overrides required by Solidity.
    function _beforeTokenTransfer(
        address operator,
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) internal override(ERC1155, ERC1155Supply) {
        super._beforeTokenTransfer(operator, from, to, ids, amounts, data);
    }
}
