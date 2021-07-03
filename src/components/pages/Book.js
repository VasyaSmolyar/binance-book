import React, { useContext, useEffect } from "react";
import { CoreContext } from '../core/core';

function Book() {
    const context = useContext(CoreContext);

    if(context === null) {
        return <div>loading plugin</div>
    }

    useEffect(() => {
        console.log(context);
        context.binance.getBook('LTCUSDT', (json) => {
            console.log(json);
        });
    }, [])

    return (
        <div>Sample data</div>       
    )
}

export default Book;