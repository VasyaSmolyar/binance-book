import React, { useContext, useEffect, useState } from "react";
import { CoreContext } from '../core/core';
import { FormText, Table } from 'react-bootstrap';

function Book() {
    const context = useContext(CoreContext);

    const [ orders, setOrders ] = useState([]);

    if(context.binance === undefined && orders === []) {
        return <div>loading plugin</div>
    }

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
        console.log(context);
        context.binance.getBook('LTCUSDT', (json) => {
            console.log(json);
        });
        context.bus.subscribe('book', (data) => {
            console.log(data);
            const info = data.bids.map((bid, i) => {
                return {
                    bid: bid,
                    ask: data.asks[i]
                }
            })
            setOrders(info);
        });
    }, []);

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