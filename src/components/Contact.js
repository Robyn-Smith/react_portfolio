import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Contact() {
    const formData = { userName: "", userEmail: "", userMessage: "" };

    // Here we set two state variables for firstName and lastName using 'useState'
    const [data, setData] = useState(formData);
    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { id, value } = e.target;

        setData({ ...data, [id]: value });
    };
    const handleFormSubmit = (e) => {
        
    }
}