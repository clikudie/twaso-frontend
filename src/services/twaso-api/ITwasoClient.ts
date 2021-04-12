import { IShortenUrlRequest, IShortenUrlResponse } from "./TwasoSchema";

export interface ITwasoClient {
    shortenUrl(url: IShortenUrlRequest): Promise<IShortenUrlResponse>;
}