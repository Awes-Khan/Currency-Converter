
import { useEffect, useState } from 'react';
function useCurrencyInfo(currency) {
	const [data, setData] = useState({})
	const dt = new Date();
	const date = dt.getFullYear()+"."+(dt.getMonth()+1)+"."+dt.getDate();
	let url=`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${date}/v1/currencies/${currency}.json`;
    // let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/.json`;
    // let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;
    useEffect(() => {
    	fetch(url)
    	.then(res => res.json())
    	.then(res => setData(res[currency]))
	    
    }, [currency]);
    return data;
}
export default useCurrencyInfo; 