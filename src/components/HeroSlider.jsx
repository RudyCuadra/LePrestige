import { useEffect, useRef, useState } from "react"
import poster from "../assets/images/poster-video2.png"
import "../styles/hero.css"
import { Link } from "react-router-dom"
import { homeCollage } from "../content/heroSliderImages"
import image01 from "../assets/images/projects/hero_home_collage/001-new-min.webp"
import image02 from "../assets/images/projects/hero_home_collage/002-new-min.webp"
import image03 from "../assets/images/projects/hero_home_collage/003-new-min.webp"

export const HeroSlider = () => {
    const [exclusivity, setExclusivity] = useState(false)
    const [confidence, setConfidence] = useState(false)
    const [luxury, setLuxury] = useState(false)
    const videoRef = useRef(null)


    // Agrega el FadeOut del Hero
    const fade = document.getElementById("modal")
    const fade2 = document.getElementById("modal2")
    const fade3 = document.getElementById("modal3")

    const fadeOut = () => {
        fade.classList.add("backdropFadeOut")
        fade2.classList.add("backdropFadeOut")
        fade3.classList.add("backdropFadeOut")

        setTimeout(() => {
            setExclusivity(false)
            setConfidence(false)
            setLuxury(false)
            fade.classList.remove("backdropFadeOut")
        }, 600)

        clearTimeout();
    }

    // LOOP ANIMATION FOR HOME IMAGES
    // ALV SI ESTABA CABRON
    const heroImg01 = useRef()
    const heroImg02 = useRef()
    const heroImg03 = useRef()

    const [startLoop, setStartLoop] = useState(true)

    const slideshow = () =>{

        setTimeout(() => {
            heroImg01.current.classList.add("calcOpacity")
        }, 5000);
        clearTimeout()

        setTimeout(() => {
            heroImg02.current.classList.add("calcOpacity")
        }, 10000);
        clearTimeout()

        setTimeout(() => {
            heroImg02.current.classList.remove("calcOpacity")
            heroImg01.current.classList.remove("calcOpacity")
            //heroImg03.current.classList.add("calcOpacity")
            setStartLoop(!startLoop)
        }, 15000);
        clearTimeout()
    }
    
    // Cierra Confidence | Luxury | Exclusivity con 
    // la tecla Escape
    useEffect(() => {
        if(startLoop){
            slideshow()
        }else{
            setStartLoop(true)
        }
        const handlekeyDown = ({ key }) => {
            //console.log(key)
            if (key === "Escape") {
                fadeOut()
            }
        }

        window.addEventListener('keydown', handlekeyDown)

        return () => window.removeEventListener('keydown', handlekeyDown)

    }, [startLoop])
    //console.log(startLoop)

    return (
        <div className="heroSlider--container">
            <div className="heroSlider">

                <div className="heroSliderImgContainer">
                    <img  ref={heroImg03} src={image03} alt="slideshow" />
                    <img  ref={heroImg02} src={image02} alt="slideshow" />
                    <img ref={heroImg01} src={image01} alt="slideshow" />
                </div>
                <div className="heroTextsContainer">
                    <div className="heroTextWrapper">
                        <h2
                            onClick={() => setConfidence(true)}
                            className={exclusivity || confidence || luxury ? "hideUnder" : "heroTextCapital"}
                        >Confidence</h2>
                        <h2
                            onClick={() => setLuxury(true)}
                            className={exclusivity || confidence || luxury ? "hideUnder" : "heroTextCapital"}
                        >Luxury</h2>
                        <h2
                            onClick={() => setExclusivity(true)}
                            className={exclusivity || confidence || luxury ? "hideUnder" : "heroTextCapital"}
                        >Exclusivity</h2>
                    </div>
                    <div id="modal" className={exclusivity ? "backdropHero" : "noDisplay"}
                        onClick={() => fadeOut()}
                    >
                        <div className="backdropHeroText">
                            <h2 className="backdropTitle">
                                Exclusivity
                            </h2>
                            <p>
                                Exclusivity is the quality that distinguishes us in luxury architectural projects, which offer an innovative and personalized design, with unique, comfortable and efficient spaces, which satisfy all the needs and desires of the most demanding clients.
                                <br />
                                <br />
                                Exclusivity is based on the selection of high-quality materials, on the care of the finishes and on the incorporation of
                                cutting-edge technology that provides safety and comfort.
                                <br />
                                <br />
                                It is the value that sets our company apart, creating masterpieces that exceed expectations and reflect the style
                                and personality of each client.
                            </p>
                            <button className="backdropButton">
                                <Link to="contact">
                                    Contact Us
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div id="modal2" className={confidence ? "backdropHero" : "noDisplay"}
                        onClick={() => fadeOut()}
                    >
                        <div className="backdropHeroText">
                            <h2 className="backdropTitle">
                                Confidence
                            </h2>
                            <p>
                                Trust is the security that we provide in luxury projects, which are based on the experience, talent and
                                professionalism of their creators
                                <br />
                                <br />
                                Trust is based on the ability to understand and capture the vision, style and personality of each client, offering innovative and functional solutions that adapt to their needs and desires. it also implies an ethical and social commitment to the natural and cultural environment, respecting its value and beauty.
                                <br />
                                <br />
                                Trust is the value that characterizes our company, which meets the highest quality standards and generates a lasting and satisfactory relationship with the client.
                            </p>
                            <button className="backdropButton">
                                <Link to="contact">
                                    Contact Us
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div id="modal3" className={luxury ? "backdropHero" : "noDisplay"}
                        onClick={() => fadeOut()}
                    >
                        <div className="backdropHeroText">
                            <h2 className="backdropTitle">
                                Luxury
                            </h2>
                            <p>
                                Luxury is the expression of inner well-being through architecture, which creates unique, innovative and personalized spaces that adapt to the needs and desires of each client. It is based on the combination of high quality and comfort, with the use of exclusive materials and a high level of finishes. it also implies a harmonious connection with the natural and cultural environment, respecting its value and beauty.
                                <br />
                                <br />
                                Luxury is the value that defines our company, which creates works that stimulate the senses and transform people{`'`}s lives.
                            </p>
                            <button className="backdropButton">
                                <Link to="contact">
                                    Contact Us
                                </Link>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
