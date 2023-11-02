import { Link, useNavigate } from "react-router-dom"
import { Head } from "../layout/Head"
import { aboutReviews } from "../content/aboutUsContent"
import { AiFillStar } from "react-icons/ai"
import { RxCross2 } from "react-icons/rx"
import "../styles/reviews.css"
import { useEffect } from "react"
export const Reviews = () => {
    const navigate = useNavigate()
    
    // Cierra los reviews
    // al precionar la tecla Escape
    useEffect(() => {
        const handlekeyDown = ({ key }) => {
            //console.log(key)
            if (key === "Escape") {
                navigate(-1)
            }
        }

        window.addEventListener('keydown', handlekeyDown)

        return () => window.removeEventListener('keydown', handlekeyDown)

    }, [navigate])

    return (
        <>
            <Head title="Reviews" />
            <article className="revewContainer"
            >
                <div className="reviewWrapper">
                    <RxCross2 className="exitReview"
                        onClick={() => navigate(-1)}
                    />
                    <h3 className="reviews reviewTitle">
                        REVIEWS
                    </h3>
                    <div className="reviewCardContainer">
                        {aboutReviews.map((item) => {
                            return (
                                <div key={item.id}
                                    className="reviewCard">
                                    <div className="reviewCardInside">
                                        {/*
                                    <div className="reviewCardIMG">
                                    </div>
                                    */}
                                        <div className="ranking">
                                            <AiFillStar className="star" />
                                            <AiFillStar className="star" />
                                            <AiFillStar className="star" />
                                            <AiFillStar className="star" />
                                            <AiFillStar className="star" />
                                        </div>
                                        <div className="reviewCardWrapTexts">
                                            <div className="reviewCardTexts">
                                                <h3 className="reviewCardTitle">{item.title}</h3>
                                                <p className="reviewCardText">{item.quote}</p>
                                            </div>
                                            <p className="reviewCardAuthor">
                                                {item.author} -
                                                <span className="revewCardDate">
                                                    {item.date}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                    <button className="reviewBtnV2">
                        <Link to="/submit-review">
                            MAKE A REVIEW
                        </Link>
                    </button>
                </div>
            </article>
        </>
    )
}
