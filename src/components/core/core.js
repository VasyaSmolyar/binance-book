import React, { useState, useEffect } from 'react';
import { endpoint, api_key, secret_key } from './config';
import binance from './binance/binance';

export const CoreContext = React.createContext({});

export function Core ({ children, pluginLoaders, pluginState }) {

    const [ state, setState ] = useState(null); // Данные о загруженных плагинах

    useEffect(() => {
        let map = {};

        pluginLoaders.forEach(({name, loader}) => {
            console.log(name);
            console.log(pluginState[name]);
            map[name] = loader(pluginState[name]); // Загрузка плагина в глобальный объект приложения
        }); 

        setState(map);
    }, []);

    return (
        <CoreContext.Provider value={state}>
            {children}
        </CoreContext.Provider>
    );
}

export const pluginLoaders = [ { 'name' : 'binance', 'loader' : binance } ];

export const pluginState = {
    'binance': {
        'endpoint': endpoint,
        'api_key': api_key,
        'secret_key': secret_key
    } 
}