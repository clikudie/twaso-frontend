import React, { useState } from 'react';
import './App.css';
import AddUrl from './components/AddUrl';
import { TwasoClient } from './services/twaso-api/TwasoClient';
import { IShortenUrlRequest, IShortenUrlResponse } from './services/twaso-api/TwasoSchema';

const App = (): JSX.Element => {
  const [url, setUrl] = useState<IShortenUrlResponse | null>(null);

  let twasoClient = new TwasoClient();

  const shortenUrl = async (url: IShortenUrlRequest) => {
    const response: IShortenUrlResponse = await twasoClient.shortenUrl(url);
    console.log(response);
    setUrl(response);
  }

  return (
    <div className="App">
      <AddUrl shortenUrl={shortenUrl} />
    </div>
  );
}

export default App;
