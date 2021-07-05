import React, { useState, useContext } from "react";

import { CoreContext } from '../core/core';
import { DropdownButton, Dropdown } from 'react-bootstrap';

function List() {
    const [ title, setTitle ] = useState("BTCUSDT");
    const context = useContext(CoreContext);

    const onChoose = (item) => {
        context.bus.write("symbol", item);
        setTitle(item);
    }

    return (
        <DropdownButton id="dropdown-basic-button" title={title}>
            <Dropdown.Item onClick={ (event) => onChoose(event.target.innerText) }>BTCUSDT</Dropdown.Item>
            <Dropdown.Item onClick={ (event) => onChoose(event.target.innerText) }>ETHUSDT</Dropdown.Item>
            <Dropdown.Item onClick={ (event) => onChoose(event.target.innerText) }>LTCUSDT</Dropdown.Item>
        </DropdownButton>
    );
} 

export default List;