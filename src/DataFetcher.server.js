import React from 'react';
import fetch from 'node-fetch';

async function DataFetcher() {
    const response = await fetch('http://localhost:3000/api/data');
    const data = await response.json();
    if (data && data.message) {
        return <div>{data.message}</div>;
    } else {
        return <div>Error fetching data</div>;
    }
}

export default DataFetcher;
