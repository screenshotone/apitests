import { describe, expect, test } from "@jest/globals";
import { fetchScreenshot } from "./api";

describe("essential options", () => {
    test("GET take a simple screenshot of example.com", async () => {
        const response = await fetchScreenshot({ url: "https://example.com" });

        expect(response.ok).toBeTruthy();
    });

    test("GET take a simple screenshot by selector of example.com", async () => {
        const response = await fetchScreenshot({
            url: "https://example.com",
            selector: "div > h1",
        });

        expect(response.ok).toBeTruthy();
    });
});
