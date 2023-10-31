import axios from 'axios';
import { useEffect, useState } from 'react';

export const useFetch = (url: string) => {
const [data, setData] = useState<Array<string>>([]);
    useEffect(() => {
        axios.get(url)
        .then((res: any) => {
            const data: string = res.data;
            const formattedAnswer = data[0].split('')
            setData(formattedAnswer);
        });
        return setData([])
    }, [url])
    return data;
}
