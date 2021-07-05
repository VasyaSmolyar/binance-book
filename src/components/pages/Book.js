import React, { useContext, useEffect, useState } from "react";
import { CoreContext } from '../core/core';
import { Table } from 'react-bootstrap';

import { useLocation } from "react-router-dom";
import './Book.css';

import { BrowserView, MobileView, isMobile } from 'react-device-detect';

function Book() {
    const context = useContext(CoreContext);

    const [ orders, setOrders ] = useState([]);
    const [ title, setTitle ] = useState("");

    let location = useLocation();

    const bidsData = orders.map(({ bid, ask }) => {
        if(isMobile) {
            return (
                <tr>
                    <td>{bid[1]}</td>
                    <td>{bid[0]}</td>
                    <td>{ask[1]}</td>
                    <td>{ask[0]}</td>
                </tr>
            )    
        }

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

        const symbol = context.bus.read("symbol");
        setTitle(symbol);

        context.binance.getBook(symbol, (json) => {
            console.log(json);
        });

        context.bus.subscribe('book', (data) => {
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
        <div>
            <h1>{title}</h1>
            <BrowserView>
                <div className="table-responsive" >
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
                        </thead>
                        <tbody>
                            {bidsData}
                        </tbody>
                    </Table> 
                </div>
            </BrowserView>
            <MobileView>
            <div className="table-responsive" >
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Amount</th>
                            <th>Price</th>
                            <th>Amount</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bidsData}
                    </tbody>
                </Table> 
                </div>
            </MobileView>
        </div>      
    )
}

export default Book;