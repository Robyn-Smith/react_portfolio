// import React from 'react';
import React, { useState } from "react";

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
    <div>
      <h1>Contact Page</h1>
      <p>
        Integer cursus bibendum sem non pretium. Vestibulum in aliquet sem, quis
        molestie urna. Aliquam semper ultrices varius. Aliquam faucibus sit amet
        magna a ultrices. Aenean pellentesque placerat lacus imperdiet
        efficitur. In felis nisl, luctus non ante euismod, tincidunt bibendum
        mi. In a molestie nisl, eu sodales diam. Nam tincidunt lacus quis magna
        posuere, eget tristique dui dapibus. Maecenas fermentum elementum
        faucibus. Quisque nec metus vestibulum, egestas massa eu, sollicitudin
        ipsum. Nulla facilisi. Sed ut erat ligula. Nam tincidunt nunc in nibh
        dictum ullamcorper. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Etiam ornare rutrum felis at
        rhoncus. Etiam vel condimentum magna, quis tempor nulla.
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
                    <button type="submit" className="btn btn-primary mb-2">
                        SEND
                    </button>
                </form>
    </div>
  );
}

export default Contact;