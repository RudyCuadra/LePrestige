import { useRef, useState } from "react";
import { Formik } from "formik";
import emailjs from 'emailjs-com';
import { FaInfoCircle } from 'react-icons/fa'
import "../styles/contactForm.css"

export const ContactForm = () => {
    const [formSent, setFormSent] = useState(false);
    const form = useRef();
    return (
            <div className="contact--container">
                <div className="form--container">
                    <Formik
                        initialValues={{
                            name: "",
                            email: "",
                            subject: "",
                            message: ""
                        }}
                        validate={(valores) => {
                            let errores = {};

                            if (!valores.name) {
                                errores.name = "Please enter your full name"
                            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)) {
                                errores.name = "You are only allowed to add letters and spaces"
                            }

                            if (!valores.email) {
                                errores.email = "Please enter an email address"
                            } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)) {
                                errores.email = "Your email is only allowed to have letters, numbers, periods, hyphens, and underscores"
                            }

                            return errores;
                        }}
                        onSubmit={(valores, { resetForm }) => {
                            resetForm();
                            setFormSent(true);
                            setTimeout(() => setFormSent(false), 5000)

                            //El envia del correo con emailjs.
                            emailjs.sendForm('service_lyd31pi', 'template_l46tlir', form.current, 'A3NKlQ5Mg3wx45TQw')
                                .then((result) => {
                                    console.log(result.text);
                                }, (error) => {
                                    console.log(error.text);
                                });

                        }}>
                        {({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (
                            <form className="newForm" ref={form} onSubmit={handleSubmit}>

                                {touched.name && errors.name && <div className="newformError"><FaInfoCircle /> {errors.name}</div>}
                                {touched.email && errors.email && <div className="newformError"><FaInfoCircle /> {errors.email}</div>}

                                <div className="formGroup1">

                                    <input
                                        type="text"
                                        placeholder="Full Name*"
                                        name="name"
                                        value={values.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        autoComplete="off"
                                        className={touched.name && errors.name ? "newInputFormError" : "newInputForm"}
                                        required
                                    />

                                    <input
                                        type="email"
                                        placeholder="Email*"
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        autoComplete="off"
                                        className={touched.email && errors.email ? "newInputFormError" : "newInputForm"}
                                        required
                                    />

                                    <input
                                        type="text"
                                        placeholder="Subject"
                                        name="subject"
                                        value={values.subject}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        autoComplete="off"
                                        className="newInputForm"
                                        required
                                    />
                                </div>

                                <div className="formGroup2">

                                    <textarea
                                        id=""
                                        name="message"
                                        placeholder="Let's build dreams together!"
                                        value={values.message}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        autoComplete="off"
                                        className="newInputForm newTextarea"
                                        required
                                    >
                                    </textarea>
                                    {
                                        formSent
                                            ?
                                            <button
                                                className="newFormBtn msgSent">
                                                Sent
                                            </button>
                                            :
                                            <button
                                                type="submit"
                                                disabled={errors.email || errors.name}
                                                className={errors.email || errors.name ? "newFormBtnErrors" : "newFormBtn"}>
                                                SEND
                                            </button>
                                    }
                                </div>


                            </form>
                        )}
                    </Formik>

                </div>


            </div>
    )
}