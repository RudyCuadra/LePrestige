import { useEffect, useRef, useState } from "react";
import { Formik } from "formik";
import emailjs from 'emailjs-com';
import { FaInfoCircle } from 'react-icons/fa'
import { AiFillStar } from "react-icons/ai"
import "../styles/contactForm.css"

export const SubmitReviewPage = () =>{
    const [formSent, setFormSent] = useState(false);
    const form = useRef();

    const [starState,setStarState]=useState(1)

    const star1 = useRef()
    const star2 = useRef()
    const star3 = useRef()
    const star4 = useRef()
    const star5 = useRef()

    useEffect(() => {
    //console.log(starState)
        const handleRanking = () =>{
            switch (starState > 0) {
                case starState == 1:
                    star2.current.children[0].classList.remove("RankedStar")
                    star3.current.children[0].classList.remove("RankedStar")
                    star4.current.children[0].classList.remove("RankedStar")
                    star5.current.children[0].classList.remove("RankedStar")
                    break;
                case starState == 2:
                    //star2.current.children[0].classList.remove("UnRankedStar")
                    star3.current.children[0].classList.remove("RankedStar")
                    star4.current.children[0].classList.remove("RankedStar")
                    star5.current.children[0].classList.remove("RankedStar")

                    star2.current.children[0].classList.add("RankedStar")
                    break;
                case starState == 3:
                    //star3.current.children[0].classList.remove("UnRankedStar")
                    star4.current.children[0].classList.remove("RankedStar")
                    star5.current.children[0].classList.remove("RankedStar")


                    star2.current.children[0].classList.add("RankedStar")
                    star3.current.children[0].classList.add("RankedStar")
                    break;
                case starState == 4:
                    //star4.current.children[0].classList.remove("UnRankedStar")
                    star5.current.children[0].classList.remove("RankedStar")

                    star2.current.children[0].classList.add("RankedStar")
                    star3.current.children[0].classList.add("RankedStar")
                    star4.current.children[0].classList.add("RankedStar")
                    break;
                case starState == 5:
                    //star5.current.children[0].classList.remove("UnRankedStar")
                    star2.current.children[0].classList.add("RankedStar")
                    star3.current.children[0].classList.add("RankedStar")
                    star4.current.children[0].classList.add("RankedStar")
                    star5.current.children[0].classList.add("RankedStar")
                    break;

                default:
                    break;
            }
        }
        handleRanking()

    }, [starState])

    return(
        <section className="allWidthContact">
            <article className="contactContainer">
                <div className="contact--container">
                    <div className="form--container">
                        <Formik
                            initialValues={{
                                name: "",
                                company: "",
                                message: ""
                            }}
                            validate={(valores) => {
                                let errores = {};

                                if (!valores.name) {
                                    errores.name = "Please enter your full name"
                                } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)) {
                                    errores.name = "You are only allowed to add letters and spaces"
                                }

                                if (!valores.company) errores.company = "Please enter a company name"


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
                                    {touched.company && errors.company && <div className="newformError"><FaInfoCircle /> {errors.company}</div>}

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
                                            type="text"
                                            placeholder="Company*"
                                            name="company"
                                            value={values.company}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            autoComplete="off"
                                            className={touched.email && errors.email ? "newInputFormError" : "newInputForm"}
                                            required
                                        />

                                    </div>

                                    <div className="formGroup2V2">

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
                                        <div className="rankingReview">
                                            <span ref={star1} >
                                            <AiFillStar onMouseOver={() => setStarState(1)} className="RankedStar" />
                                            </span>
                                            <span ref={star2} >
                                                <AiFillStar onMouseOver={() => setStarState(2)} className="UnRankedStar" />
                                            </span>
                                            <span ref={star3} >
                                                <AiFillStar onMouseOver={() => setStarState(3)} className="UnRankedStar" />
                                            </span>
                                            <span ref={star4} >
                                                <AiFillStar onMouseOver={() => setStarState(4)} className="UnRankedStar" />
                                            </span>
                                            <span ref={star5} >
                                                <AiFillStar onMouseOver={() => setStarState(5)} className="UnRankedStar" />
                                            </span>
                                        </div>
                                        {
                                            formSent
                                                ?
                                                <button
                                                    className="newFormBtn msgSent">
                                                    SENT
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
            </article>
        </section>
    )
}
