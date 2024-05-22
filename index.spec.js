import test from "node:test";
import { textCapitalize } from "./";

test("Should return a string capitalize", () => {
	assert.strictEqual(
		textCapitalize("Should return a string with a 0 before numbers"),
		"Should Return A String With A 0 Before Numbers",
	);
});
test("Should return a string with just the first word capitalized", () => {
	expect(
		textCapitalize("Should return a string with a 0 before numbers", true),
		"Should return a string with a 0 before numbers",
	);
});
test("Should return a string with all words capitalized - first word send if miniscule", () => {
	assert.strictEqual(
		textCapitalize("return a string with"),
		"Return A String With",
	);
});
test("Should return a string with first word capitalized - first word send if miniscule", () => {
	assert.strictEqual(
		textCapitalize("return a string with", true),
		"Return a string with",
	);
});
