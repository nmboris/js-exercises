/** @type {(Array<{host: string, path: string}>)} */
const urls = [];

const NUMBER_OF_OBJECTS = 10_000;
const NUMBER_OF_DIFFERENT_FAKE_URLS = 1_000;

// Generate a lot of random urls
for (let i = 0; i < NUMBER_OF_OBJECTS; i++) {
	const random = "" + Math.floor(Math.random() * NUMBER_OF_DIFFERENT_FAKE_URLS) + 1;
	urls.push({ host: random, path: "/" });
}

// Variant with for loop
const variantA = () => {
	/** @type {(Array<string>)} */
	const distinctHostArray = [];

	urls.forEach((host) => {
		if (!distinctHostArray.includes(host.host)) {
			distinctHostArray.push(host.host);
		}
	});

	return distinctHostArray;
};

// Variant with map and filter
const variantB = () => {
	const distinctHostArray = urls
		.map((host) => host.host)
		.filter((value, index, self) => self.indexOf(value) === index);

	return distinctHostArray;
};

// Variant with set
const variantC = () => {
	/** @type {(Set<string>)} */
	const set = new Set();

	urls.forEach((u) => set.add(u.host));

	return [...set.keys()];
};

// Test
console.time(":: variantA");
variantA();
console.timeEnd(":: variantA");

console.time(":: variantB");
variantB();
console.timeEnd(":: variantB");

console.time(":: variantC");
variantC();
console.timeLog(":: variantC");
