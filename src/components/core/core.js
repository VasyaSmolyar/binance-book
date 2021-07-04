import React, { useState, useEffect } from 'react';
import { endpoint, api_key, secret_key } from './config';
import binance from './binance/binance';
import bus from './bus/bus';

export const CoreContext = React.createContext({});

export function Core ({ children }) {

    const [ state, setState ] = useState({
        data: {

        }
    }); // Данные о загруженных плагинах
    
    const setData = (channel, data ) => {
        // Глобальный механизм передачи для шины данных
        let newState = Object.assign({}, state);
        newState.data[channel] = data;
        setState(data);
    }

    useEffect(() => {
        let map = {
            data: {

            }
        };

        map.bus = bus({
            setData: setData,
            data: state.data
        }); // Загрузка плагина шины данных

        map.binance = binance({
            'endpoint': endpoint,
            'api_key': api_key,
            'secret_key': secret_key,
            'onMessage': (mes) => {
                map.bus.publish('book', mes); // Посыл данны на шину
           }
        }); // Загрузка плагина SDK

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
    
}