// import React from 'react';
import React, { useState } from "react";

function Contact() {
    const formData = { userName: "", userEmail: "", userMessage: "" };

    // Here we set two state variables for firstName and lastName using 'useState'-jsn
    const [data, setData] = useState(formData);
    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change-jsn
        const { id, value } = e.target;

        setData({ ...data, [id]: value });
    };
    const handleFormSubmit = (e) => {
        // preventing the default behaviour of the form submit (which is to refresh the ..)-jsn
        e.preventDefault();

        // alert the user their first and last name, clear the inputs-jsn
        alert(`Thanks for your message ${data.userName}`);
        setData(formData);
    };
    return (
    <div>
      <h1 style={{ color: '#b62075' }}>Contact Page</h1>
      <p>
        I am available on multiple social media sites including facebook, github and linked in. If you would like to discover more about me or view these please click on the icons in the footer. If you would like to message me directly right now please fill in the form below:
      </p>
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
                    <button style={{ background: '#b62075', border: 'none', 
                    margin: 'auto',
                    alignItems: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-evenly',}}
                    onMouseOver={e => e.currentTarget.style.opacity = 0.7}
                    onMouseOut={e => e.currentTarget.style.opacity = 1} type="submit" className="btn btn-primary mb-2">
                        SEND
                    </button>
                </form>
    </div>
  );
}

export default Contact;