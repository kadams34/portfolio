import { Form } from 'react-bootstrap';
import emailjs from 'emailjs-com'
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';



export default function ContactForm() {

    const contactValues = { 
        user_name:"", 
        user_email:"", 
        subject:"", 
        message:"" 
    }

    const validation = Yup.object().shape({
        user_name: Yup.string()
            .min(2, "I feel like one word names are for the super elite. Nice try, Elon.")
            .max(100, "Your name is not that long, is it?")
            .required("C'mon, you have a name"),
        user_email: Yup.string()
            .email("That's not an email you silly goose")
            .max(100, "That's a really long email there, sport")
            .required("just make one up"),
        subject: Yup.string(),
        message: Yup.string()
            .min(5, "Elaborate please")
            .max(200, "Whoa whoa whoa too much!")
            .required("please tell me a story")
      })

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('adamke_contact', 'contact_form', e.target, 'user_7moDwUlcYDRp8dkut2iTr')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
    

    
    return (
        <Formik 
            initialValues={contactValues}
            validationSchema={validation}
        >
            {( {values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting }) => (
                    <Form className="contact-form" onSubmit={sendEmail}>
                        <Form.Group className="pt-2" controlId="ContactFormName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Name" 
                                name="user_name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.user_name}
                            />
                        </Form.Group>
                        <Form.Group className="pt-2" controlId="ContactFormEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control 
                                type="email" 
                                placeholder="name@example.com" 
                                name="user_email" 
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.user_email}
                            />
                        </Form.Group>
                        <Form.Group className="pt-2" controlId="ContactFormSubject">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Subject" 
                                name="subject" 
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.subject}
                            />
                        </Form.Group>
                        <Form.Group className="pt-2" controlId="ContactFormMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control 
                                as="textarea" 
                                rows={3} 
                                name="message" 
                                placeholder="Write your message here"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.message}
                            />
                        </Form.Group>
                        <div className="text-center">
                        <button type="submit" value="Send" className="btn btn-primary btn-lg m-3">Send</button>
                        {/* <button type="reset" className="btn btn-secondary btn-lg m-3">Reset</button> */}
                        </div>
                    </Form>
                )
            }
        </Formik>
    )
}
