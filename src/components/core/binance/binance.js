let ws = null;

function binance({ endpoint, apiKey, secretKey, onMessage }) {

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
                ws = new WebSocket(`wss://stream.binance.com:9443/ws/${ticker.toLowerCase()}@depth20`);

                ws.onopen = () => {
                    ws.onmessage = (mes) => {
                        onMessage(JSON.parse(mes.data));
                    };
                }

                callback(json);
            });
        }
    };
}

export default binance;