import { useEffect } from "react";
import { useState } from "react"

export const useFetch = (url, method = 'GET') => {
    const [response, setResponse] = useState({
        data: null,
        loading: true,
    })

    useEffect(() => {
        setResponse({
            ...response,
            loading: true
        })

        fetch(url, { method })
        .then(res => res.json())
        .then(json => setResponse({
            data: json,
            loading: false
        }))
    }, [url, method]);

    return response;
}