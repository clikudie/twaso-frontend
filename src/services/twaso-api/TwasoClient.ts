import { ITwasoClient } from "./ITwasoClient";
import { IShortenUrlRequest, IShortenUrlResponse } from "./TwasoSchema";

export class TwasoClient implements ITwasoClient {
    private readonly basURL = 'https://localhost:5001/api/url';

    public async shortenUrl(url: IShortenUrlRequest): Promise<IShortenUrlResponse> {
        try {
            const initRequest: RequestInit = this.initRequest(url);
            console.log(initRequest);
            const response = await fetch(this.basURL, initRequest);
            if (!response.ok) {
                throw new Error(`Unexpected response: ${response.statusText}`)
            }

            const data: IShortenUrlResponse = await response.json();
            return data;
        } catch (error) {
            throw error;
        }
    }

    private initRequest(body: IShortenUrlRequest): RequestInit {
        const header = {
            Accept: '*/*',
            'Content-Type': 'application/json'
        }

        const init: RequestInit = {
            method: 'POST',
            headers: header,
            body: JSON.stringify(body)
        }

        return init;
    }
}