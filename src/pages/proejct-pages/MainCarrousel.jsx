import { useEffect, useState } from "react";
import { Head } from "../../layout/Head";
import PropTypes from "prop-types"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { RxCross2 } from "react-icons/rx"
import "../../styles/COMRESGallery.css"
import { useNavigate } from "react-router-dom";

export const MainCarrousel = ({ info, isTitle }) => {
    const [bigIMG, showBigIMG] = useState(0)
    const [moveCarrete, setMoveCarrete] = useState(0)
    const [materiales, setMateriales] = useState(true)

    const navigate = useNavigate()

    // Muestra los materiales solo en el index(2) 
    // de la imagen de fondo
    useEffect(() => {
        if (bigIMG === 0) {
            setMateriales(true)
        } else {
            setMateriales(false)
        }
    }, [bigIMG])

    // Se destructura la info en un array de objetos
    const dataInfo = Object.keys(info[0]).map((v) => ({ [v]: info.map((c) => c[v]) }));

    // Definiendo el titulo y la descripcion
    const title = dataInfo[2].title[0]
    const description = dataInfo[3].description[0]
    const tag = dataInfo[4].tag[0]
    const granImage = dataInfo[1].img[bigIMG]
    // Extrae el total de imagenes
    const limite = dataInfo[1].img.length
    // Usar como limite de imagenes del slideshow
    const limiteIMG = (limite - 1)
    // Pixeles para iniciar al centro del centro del carrete xD
    const carreteBegin = ((limite * Math.floor(70)) * 2)
    const carreteOriginPotition = (carreteBegin / 2)

    // mueve el carrete hacia la izquierda
    const backwardIMG = () => {
        if (bigIMG < 1) {
            showBigIMG(limiteIMG)
        } else {
            showBigIMG(bigIMG - 1)
        }
        setMoveCarrete(moveCarrete + 70)
    }
    // mueve el carrete hacia la derecha
    const forwardIMG = () => {
        if (bigIMG >= limiteIMG) {
            showBigIMG(0)
        } else {
            showBigIMG(bigIMG + 1)
        }
        setMoveCarrete(moveCarrete - 70)
    }

    useEffect(() => {
        const handlekeyDown = ({ key }) => {
            //console.log(key)
            if (key === "ArrowRight") {
                forwardIMG()
            }
            if (key === "ArrowLeft") {
                backwardIMG()
            }
            if (key === "Escape") {
                navigate(-1)
            }
        }

        window.addEventListener('keydown', handlekeyDown)

        return () => window.removeEventListener('keydown', handlekeyDown)
    }, [bigIMG])

    // Muestra las imagenes dando click en el carrete
    /*
    const setCarreteID = (itemID) => {
        // Ese numero magico es el que le corresponde al id, 
        //  cambiarselo dependiendo cada caso
        const newItemID = (itemID - 190000)
            showBigIMG(newItemID)
    }
    */

    //console.log(limite, "limite")

    // carrete de imagenes pequenas
    const carrete = (
        <div
            style={
                (moveCarrete === 0 || moveCarrete === -carreteBegin)
                    ? setMoveCarrete(-carreteOriginPotition)
                    :
                    { transform: `translateX(${moveCarrete}px)` }
            }
            className="moveCarrete">
            {info.map((item) => {
                return (
                    <>
                        <div
                            key={item.id}
                            /*
                            onClick={() => setCarreteID(item.id)}
                            */
                            className="carreteIMG">
                            <img
                                className="carreteIMGInside"
                                src={item.img}
                                alt={item.title} />
                        </div>
                    </>
                )
            })}
        </div>
    )


    return (
        <>
            <Head title={title + " | " + tag + " | Le Prestige"} />
            <section className="allWidth">
                <article className="mainGallery">
                    <RxCross2
                        onClick={() => navigate(-1)}
                        className="exitBigIMg" />
                    {/* DIVS MATERIALES INTERNOS */}
                    {materiales
                        ?
                        <>
                            <div className="material material01">
                                <div className="descMaterial">
                                    <h3>Nombre del material</h3>
                                    <p>Breve descripcion</p>
                                </div>
                            </div>
                            <div className="material material02">
                                <div className="descMaterial">
                                    <h3>Nombre del material</h3>
                                    <p>Breve descripcion</p>
                                </div>
                            </div>
                            <div className="material material03">
                                <div className="descMaterial">
                                    <h3>Nombre del material</h3>
                                    <p>Breve descripcion</p>
                                </div>
                            </div>
                        </>
                        : null
                    }
                    <img
                        className="mainIMGGallery"
                        src={granImage}
                        alt="9 Island 514" />
                    {
                        isTitle
                            ?
                            <div className="mainGText">
                                <h1 className="mainGTitle">
                                    {title} /
                                </h1>
                                <p className="mainGDesc">
                                    {description}
                                </p>
                            </div>
                            : null
                    }
                    <div className="carreteContainer">
                        <IoIosArrowBack
                            onClick={backwardIMG}
                        />
                        <div className="carreteIMGWrapper carreteBorder">
                            <div
                                className="crSquare">
                            </div>
                            {
                                [carrete, carrete, carrete]
                            }
                        </div>
                        <IoIosArrowForward
                            onClick={forwardIMG}
                        />
                    </div>

                    {/* Mobile Carrete*/}
                </article>
                <div className="showOnMobile">
                    <IoIosArrowBack
                        onClick={backwardIMG}
                    />
                    <div className="carreteIMGWrapper carreteBorder">
                        <div className="crSquare">
                        </div>
                        {
                            [carrete, carrete, carrete]
                        }
                    </div>
                    <IoIosArrowForward
                        onClick={forwardIMG}
                    />
                </div>
            </section>
        </>
    )
}

// PropTypes
// info:PropTypes.arrayOf(PropTypes.Object)
MainCarrousel.propTypes = {
    isTitle: PropTypes.bool,
    info: PropTypes.arrayOf(
        PropTypes.shape(
            {
                id: PropTypes.number,
                img: PropTypes.node,
                title: PropTypes.string,
                description: PropTypes.string,
                tag: PropTypes.string,
            }
        )
    )
}