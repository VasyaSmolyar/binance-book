function binance({ endpoint, apiKey, secretKey }) {
    return {
        pluginName: 'binance',
        getBook: function(ticker, callback) {
            const query = `${endpoint}/api/v3/depth?symbol=${ticker}`;

            fetch(query, {
                headers: {
                    'X-MBX-APIKEY': apiKey
                }
            }).then((response) => {
                return response.json();
            }).then((json) => {
                callback(json);
            });
        }
    };
}

export default binance;