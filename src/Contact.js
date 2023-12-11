import React from 'react';
import './Contact.css';
import Footer from './Footer';

const Contact=() =>
{
    return(
        <div className="contact-us">
        <div className="form body-contact">
            <form className="form-group">
                <label for="name" className="text">Name : </label>
                <input type="text" className="form-control mr-sm-2 outline" placeholder="Enter your Name"/>
            </form>
            <form className="form-group">
                <label for="email" className="text">Email : </label>
                <input type="email" className="form-control mr-sm-2 outline" placeholder="Enter your Email-id"/>
            </form>
            <form className="form-group">
                <label for="contact" className="text">Contact no. : </label>
                <input type="text" className="form-control mr-sm-2 outline" placeholder="Enter your Contact number"/>
                <button className="btn btn-outline-secondary submit" type="submit">Submit</button>
            </form>
            </div>
            
                    <br/>
                   < Footer/>
        </div>
    )
};
export default Contact;
