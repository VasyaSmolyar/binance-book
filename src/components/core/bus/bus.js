function bus({ getData, setData }) {
    const update = (channel, info) => {

        let newData = getData();
        newData[channel] = info;
        setData(newData);
    }

    function publish(channel, info) {
        // Публикация данных
        const data = getData();

        if (data[channel] && data[channel].handler) {
            data[channel].handler(info);
        }
    }

    function subscribe(channel, handler) {
        update(channel, {
            handler: handler
        }); // Инициализация канала
    }

    function unsubscribe(channel) {
        update(channel, {
            handler: null
        }); // Инициализация канала
    }

    function read(sym) {
        return getData()[sym].data;
    }

    function write(sym, data) {
        update(sym, {
            data: data
        });
    }

    return {
        'publish': publish,
        'subscribe': subscribe,
        'read': read,
        'write': write,
        'unsubscribe': unsubscribe
    }
}

export default bus;