import { useState } from 'react'
import { IShortenUrlRequest } from '../services/twaso-api/TwasoSchema';

interface IAddUrlProps {
    shortenUrl: (url: IShortenUrlRequest) => Promise<void>
}

const AddUrl: React.FC<IAddUrlProps> = ({ shortenUrl }) => {
    const [originalUrl, setUrl] = useState<string>('');
    const [alias, setAlias] = useState<string>('');

    const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        shortenUrl({ originalUrl });
        setUrl('');
        setAlias('');
    }



    return (
        <form onSubmit={onSubmit}>
            <div>
                <input type='text' value={originalUrl} onChange={(e) => setUrl(e.target.value)} />
            </div>
            <div>
                <input type='text' value={alias} onChange={(e) => setAlias(e.target.value)} />
            </div>
            <input type='submit' value='Shorten URL' />
        </form>
    )
}

export default AddUrl
