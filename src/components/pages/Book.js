import React, { useContext, useEffect, useState } from "react";
import { CoreContext } from '../core/core';

function Book() {
    const context = useContext(CoreContext);

    const [ book, setBook ] = useState({});

    if(context.binance === undefined && book === {}) {
        return <div>loading plugin</div>
    }

    useEffect(() => {
        console.log(context);
        context.binance.getBook('LTCUSDT', (json) => {
            console.log(json);
        });
        context.bus.subscribe('book', (data) => {
            console.log('BOOK');
            setBook(data);
            //console.log(data);
        });
    }, [])

    return (
        <div>Sample data</div>       
    )
}

export default Book;