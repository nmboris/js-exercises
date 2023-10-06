import { JobOffer } from "./types";

// A set of fake API endpoints of the subsidiaries' HR systems
const SUBSIDIARY_API_ENDPOINTS = [
	"https://raw.githubusercontent.com/nmboris/js-exercises/main/api/job-offers/subsidiary_a.json",
	"https://raw.githubusercontent.com/nmboris/js-exercises/main/api/job-offers/subsidiary_b.json",
];

/**
 * Loop through the urls and fetch the data
 * @param urls The urls to fetch
 * @returns The data from the urls
 */
const _getOfferingsFromApi = async (urls: string[]) => {
	const requests: Promise<Response>[] = urls.map((url) => fetch(url));

	const responses = await Promise.all(requests);
	const promises: Promise<JobOffer>[] = responses.map((response) =>
		response.json()
	);

	return await Promise.all(promises);
};

// Wait for all the data to be fetched
const responseResults = await _getOfferingsFromApi(SUBSIDIARY_API_ENDPOINTS);

// Flatten the job offerings
const flattened = responseResults.flat();

// Log the results
console.log(":: flattened job offerings", flattened);
