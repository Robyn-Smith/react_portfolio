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
        // preventing the default behaviour of the form submit (which is to refresh the ..)
        e.preventDefault();

        // alert the user their first and last name, clear the inputs
        alert(`Thanks for your message ${data.userName}`);
        setData(formData);
    };
    return (
        <Row>
            <Col sm={9}>
                <form onSubmit={handleFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="userName"
                            placeholder="e.g. John Smith"
                            value={data.userName}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="userEmail"
                            placeholder="enter your email address"
                            value={data.userEmail}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Message</label>
                        <textarea
                            className="form-control"
                            id="userMessage"
                            rows="3"
                            placeholder="enter your message here"
                            onChange={handleInputChange}
                            value={data.userMessage}
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary mb-2">
                        SEND
                    </button>
                </form>
            </Col>
        </Row>
    )
}