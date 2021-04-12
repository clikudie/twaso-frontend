export interface Url {
    hash: string;
    originalUrl: string;
    creationDate: string;
    expirationDate: string;
}

export interface IShortenUrlResponse {
    url: Url;
}

export interface IShortenUrlRequest {
    originalUrl: string;
    //alias?: string;
}