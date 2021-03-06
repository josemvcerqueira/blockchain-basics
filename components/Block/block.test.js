const Block = require("./block");
const { GENESIS_DATA } = require("../config");
const cryptoHash = require("../cryptoHash/crypto-hash");

describe("Block", () => {
	const timestamp = "a-date";
	const lastHash = "foo-hdash";
	const data = ["blockchain", "data"];
	const hash = "bar-hash";
	const block = new Block({
		timestamp,
		lastHash,
		hash,
		data
	});

	it("has a timestamp property", () => {
		expect(block.timestamp).toEqual(timestamp);
	});

	it("has a lastHash property", () => {
		expect(block.lastHash).toEqual(lastHash);
	});

	it("has a hash property", () => {
		expect(block.hash).toEqual(hash);
	});

	it("hash a data property", () => {
		expect(block.data).toEqual(data);
	});

	describe("genesis()", function() {
		const genesisBlock = Block.genesis();

		console.log("genesisBlock", genesisBlock);

		it("returns a Block instance", () => {
			expect(genesisBlock instanceof Block).toBe(true);
		});

		it("returns the genesis data", () => {
			expect(genesisBlock).toEqual(GENESIS_DATA);
		});
	});

	describe("mineBlock()", () => {
		const lastBlock = Block.genesis();
		const data = "mine data";
		const minedBlock = Block.mineBlock({ lastBlock, data });

		it("returns a Block Instance", () => {
			expect(minedBlock instanceof Block).toBe(true);
		});

		it("sets the `lastHash` to be the `hash` of the lastBlock", () => {
			expect(minedBlock.lastHash).toEqual(lastBlock.hash);
		});

		it("sets the `data`", () => {
			expect(minedBlock.data).toEqual(data);
		});

		it("seta a `timestamp`", () => {
			expect(minedBlock.timestamp).not.toEqual(undefined);
		});

		it("creates a SHA-256 `hash` based on the proper inputs", () => {
			expect(minedBlock.hash).toEqual(
				cryptoHash(minedBlock.timestamp, lastBlock.hash, data)
			);
		});
	});
});
