import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import PortfilioList from "./PortfilioList";

import data from "../data/portfolio.json";

function PortfolioDashboard() {
    const [portfolio, setPortfolio] = useState(data);

    const onFilterPortfilio = (e) => {
        const filter = e.target.value.toLowerCase();

        if (filter === "") {
            setPortfolio(data);
        } else {
            const filteredPortfilio = data.filter((item) =>
            item.tags.includes(filter)
            );
            setPortfolio(filteredPortfilio);
        }
    };

    return (
        <Row>
            <Col sm={12}>
                <PortfilioList portfolio={portfolio} onFilter={onFilterPortfilio} />
            </Col>
        </Row>
    );
}

export default PortfolioDashboard;