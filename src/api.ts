const baseUrl = process.env.SCREENSHOTONE_BASE_URL ?? "http://127.0.0.1:8080";
const accessKey = process.env.SCREENSHOTONE_ACCESS_KEY ?? "<API key>";

interface TakeOptions {
    [key: string]: string | string[] | undefined;

    url: string;
    selector?: string;
}

function optionsToSearchParams(options: TakeOptions) {
    const searchParams = new URLSearchParams();
    for (const option in options) {
        const values = options[option];
        if (values && Array.isArray(values)) {
            values.forEach((value) => searchParams.append(option, value));
            continue;
        }

        if (values && !Array.isArray(values)) {
            searchParams.append(option, values);
        }
    }

    searchParams.set("access_key", accessKey);

    return searchParams;
}

export async function fetchScreenshot(options: TakeOptions) {
    const searchParams = optionsToSearchParams(options);

    return await fetch(`${baseUrl}/take?${searchParams}`);
}
