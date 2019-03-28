const Block = require("./block");

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

	it("has hash property", () => {
		expect(block.hash).toEqual(hash);
	});

	it("hash data property", () => {
		expect(block.data).toEqual(data);
	});
});
