import React from "react";

import { DropdownButton, Dropdown } from 'react-bootstrap';

function List() {
    return (
        <DropdownButton id="dropdown-basic-button" title="Dropdown button">
            <Dropdown.Item>BTCUSDT</Dropdown.Item>
            <Dropdown.Item>ETHUSDT</Dropdown.Item>
            <Dropdown.Item>LTCUSDT</Dropdown.Item>
        </DropdownButton>
    );
} 

export default List;