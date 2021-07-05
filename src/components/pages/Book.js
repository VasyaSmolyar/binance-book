import React, { useContext, useEffect, useState } from "react";
import { CoreContext } from '../core/core';
import { Table } from 'react-bootstrap';

import { useLocation } from "react-router-dom";

function Book() {
    const context = useContext(CoreContext);

    const [ orders, setOrders ] = useState([]);
    let location = useLocation();

    const bidsData = orders.map(({ bid, ask }) => {
        return (
            <tr>
                <td>{bid[1]}</td>
                <td>{bid[0]}</td>
                <td>{bid[0] * bid[1]}</td>
                <td>{ask[1]}</td>
                <td>{ask[0]}</td>
                <td>{ask[0] * ask[1]}</td>
            </tr>
        )
    })

    useEffect(() => {
        
        if(context.binance === undefined) {
            console.log("BIN IS NOT LOADED");
            console.log(context);
            return;
        }

        context.binance.getBook('LTCUSDT', (json) => {
            console.log(json);
        });
        context.bus.subscribe('book', (data) => {
            console.log(data);
            console.log(context);
            const info = data.bids.map((bid, i) => {
                return {
                    bid: bid,
                    ask: data.asks[i]
                }
            })
            setOrders(info);
        });
        
        return () => {
            context.bus.unsubscribe('book');
        }
        
    }, [location]);

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Amount</th>
                    <th>Price</th>
                    <th>Total</th>
                    <th>Amount</th>
                    <th>Price</th>
                    <th>Total</th>
                </tr>
                {bidsData}
            </thead>
        </Table>       
    )
}

export default Book;