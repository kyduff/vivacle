const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Achievements contract", function () {
  let owner;
  let user;
  let achievements;

  this.beforeEach(async function () {
    const [_owner, _user] = await ethers.getSigners();
    owner = _owner;
    user = _user;

    const _Achievements = await ethers.getContractFactory("Achievements");
    achievements = await _Achievements.deploy(3, "signet", "https://example.com");

  })

  it("should succesfully mint contract", async function () {

    expect(achievements.signer.address).to.equal(owner.address);

  })

  it("should mint single token to address", async function() {
    await achievements.mint(user.address, 0, [])
    const balance = await achievements.balanceOf(user.address, 0) 
    expect(balance).to.equal(1);
  })

  it("should reject duplicate mints", async function () {
    await achievements.mint(user.address, 0, [])
    expect(achievements.mint(user.address, 0, [])).to.be.reverted;
    expect(await achievements.balanceOf(user.address, 0)).to.equal(1);
  })

  it("should mint a batch of tokens", async function () {
    await achievements.mintBatch(user.address, [0,2], []);
    expect(await achievements.balanceOf(user.address, 0)).to.equal(1);
    expect(await achievements.balanceOf(user.address, 1)).to.equal(0);
    expect(await achievements.balanceOf(user.address, 2)).to.equal(1);
  })

  it("should reject duplicate batch mints", async function () {
    await achievements.mintBatch(user.address, [0], []);
    expect(achievements.mintBatch(user.address, [0], [])).to.be.reverted;
  })
})