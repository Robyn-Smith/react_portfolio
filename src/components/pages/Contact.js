import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
    const formData = { userName: "", userEmail: "", userMessage: "" };
const checkData = () => {
        if (!(data.userName || data.userEmail || data.userMessage)) return;
    
        const re = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    
        if (!data.userName) {
          return false
        }
        if (!data.userEmail) {
          return false
        } else if (!re.test(data.userEmail)) {
          return false
        }
        if (!data.userMessage) {
          return false
        }
        return true;
      };
    
    // this sets two state variables for firstName and lastName using 'useState'
    const [data, setData] = useState(formData);
    const handleInputChange = (e) => {
        // this gets the value and name inputs that triggered the change 
        const { id, value } = e.target;

        setData({ ...data, [id]: value });
    };
    // const handleFormSubmit = (e) => {
    //     // preventing the default behaviour so the page does not refresh and loose data given 
    //     e.preventDefault();

    //     // alert telling the user the message was succesful and thanking them by their name
    //     alert(`Message was successfully sent, thank you ${data.userName}`);
    //     setData(formData);
    // };
    const sendEmail = (e) => {
        e.preventDefault();
        if (!checkData()) return;
        emailjs.send("service_l7c0dij", "template_imlmf39", data, "f5CqktT1qR4ah_0Pg").then( async (result) => {
            setData((prevState) => ({
                ...prevState,
                userName:"",
                userEmail:"",
                userMessage:","
            }));
            e.target.reset();
            alert(`Message was successfully sent, thank you ${data.userName}`);
        },
        (error) => {
            console.log(error.text);
        });
    
    }
    return (
    <div>
      <h1 style={{ color: '#b62075' }}>Contact Page</h1>
      <p>
        I am available on multiple social media sites including github and linked in. If you would like to discover more about me or view these please click on the icons in the footer. If you would like to message me directly right now please fill in the form below:
      </p>
      <form onSubmit={sendEmail}>
                   <div className="form-group">
                       <label htmlFor="exampleFormControlInput1">Name</label>
                       <input
                            type="text"
                            className="form-control"
                            id="userName"
                            placeholder="Please enter your Name here"
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
                            placeholder="Please enter your Email address here"
                            value={data.userEmail}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Message</label>
                        <textarea
                            className="form-control"
                            id="userMessage"
                            placeholder="Please enter your Message here"
                            onChange={handleInputChange}
                            value={data.userMessage}
                        ></textarea>
                    </div>
                    <button style={{ background: '#b62075', border: 'none', 
                    margin: 'auto',
                    alignItems: 'center',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-evenly',}}
                    onMouseOver={e => e.currentTarget.style.opacity = 0.7}
                    onMouseOut={e => e.currentTarget.style.opacity = 1} type="submit" className="btn btn-primary mb-2">
                        Submit
                    </button>
                </form>
    </div>
  );
}

export default Contact;