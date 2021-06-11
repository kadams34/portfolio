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
            .min(2, "I feel like one letter names are for the super elite like Beyonce's kids or something. And I don't think Beyonce's kids are looking for a web developer so...")
            .max(100, "Your name is not that long, is it?")
            .required("C'mon, you have a name"),
        user_email: Yup.string()
            .email("That's not an email you silly goose")
            .max(100, "That's a really long email there, sport")
            .required("Just make one up it's fine"),
        subject: Yup.string()
            .required("You can literally put anything here. Go wild."),
        message: Yup.string()
            .min(5, "Elaborate please")
            .max(280, "Whoa whoa whoa too much!")
            .required("please tell me a story")
      })

    function sendEmail(object) {
        emailjs.send('adamke_contact', 'contact_form', object, 'user_7moDwUlcYDRp8dkut2iTr')
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
            onSubmit={(values, {setSubmitting, resetForm}) => {
                setSubmitting(true);
                setTimeout(() => {
                    sendEmail(values)
                    resetForm();
                    setSubmitting(false);
                }, 500);
            }}
        >
            {( {values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting }) => (
                    <Form className="contact-form" onSubmit={handleSubmit}>
                        <Form.Group className="pt-2" controlId="ContactFormName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Name" 
                                name="user_name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.user_name}
                                className={touched.user_name && errors.user_name ? "border-danger" : null}
                            />
                            {
                                touched.user_name && errors.user_name ? (
                                    <div className="alert alert-danger">
                                        {errors.user_name}
                                    </div>
                                ): null
                            }
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
                                className={touched.user_email && errors.user_email ? "border-danger" : null}
                            />
                            {
                                touched.user_email && errors.user_email ? (
                                    <div className="alert alert-danger">
                                        {errors.user_email}
                                    </div>
                                ): null
                            }
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
                                className={touched.subject && errors.subject ? "border-danger" : null}
                            />
                            {
                                touched.subject && errors.subject ? (
                                    <div className="alert alert-danger">
                                        {errors.subject}
                                    </div>
                                ): null
                            }
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
                                className={touched.message && errors.message ? "border-danger" : null}
                            />
                            {
                                touched.message && errors.message ? (
                                    <div className="alert alert-danger">
                                        {errors.message}
                                    </div>
                                ): null
                            }
                        </Form.Group>
                        <div className="text-center">
                        <button type="submit" value="Send" className="btn btn-primary btn-lg m-3" disabled={isSubmitting}>Send</button>
                        {/* <button type="reset" className="btn btn-secondary btn-lg m-3">Reset</button> */}
                        </div>
                    </Form>
                )
            }
        </Formik>
    )
}
