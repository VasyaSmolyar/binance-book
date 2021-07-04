function bus({ data, setData }) {
    const update = (channel, info) => {
        setData(channel, info);
    }

    function publish(channel, info) {
        // Публикация данных
        if (data[channel] && data[channel].handler) {
            data[channel].handler(info);
        }
    }

    function subscribe(channel, handler) {
        update(channel, {
            handler: handler
        }); // Инициализация канала
    }

    return {
        'publish': publish,
        'subscribe': subscribe
    }
}

export default bus;