const TestRoyalPets = artifacts.require("TestRoyalPets");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("TestRoyalPets", function (/* accounts */) {
  it("should assert true", async function () {
    await TestRoyalPets.deployed();
    return assert.isTrue(true);
  });
});
