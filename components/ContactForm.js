import { Form } from 'react-bootstrap';
import emailjs from 'emailjs-com'
import React, { useState } from 'react';



class ContactForm extends React.Component {
    sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('adamke_contact', 'contact_form', e.target, 'user_7moDwUlcYDRp8dkut2iTr')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
    constructor(props) {
        super(props)

        this.state = {
            userName: '',
            userEmail: '',
            subject: '',
            message: ''
        }

        
    }

    handleNameChange = (e) => {
        this.setState({
            userName: e.target.value
        })
    }

    handleEmailChange = (e) => {
        this.setState({
            userEmail: e.target.value
        })
    }

    handleSubjectChange = (e) => {
        this.setState({
            subject: e.target.value
        })
    }

    handleMessageChange = (e) => {
        this.setState({
            message: e.target.value
        })
    }
    
    

    // const [validated, setValidated] = useState(false);

    // validateForm(event) {
    //     const form = event.currentTarget;
    //     if (form.checkValidity() === false) {
    //         event.preventDefault();
    //         event.stopPropagation();
    //     }

    //     setValidated(true);
    // };

    handleSubmit(e) {
        alert(`Email sent successfully!`)
        // validateForm(e)
        this.sendEmail(e)
        this.setState({
            userName: '',
            userEmail: '',
            subject: '',
            message: ''
        })
    }

    render() {
        return (
            <Form className="contact-form" onSubmit={this.handleSubmit}>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" name="user_name" onChange={this.handleNameChange} value={this.state.userName} required />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" name="user_email" onChange={this.handleEmailChange} value={this.state.userEmail} required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid email.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" placeholder="Subject" name="subject" onChange={this.handleSubjectChange} value={this.state.subject} required />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} name="message" onChange={this.handleMessageChange} value={this.state.message} required />
                </Form.Group>
                <div className="text-center">
                <button type="submit" value="Send" className="btn btn-primary btn-lg m-3">Send</button>
                <button type="reset" className="btn btn-secondary btn-lg m-3">Reset</button>
                </div>
            </Form>
        )
    }
}

export default ContactForm