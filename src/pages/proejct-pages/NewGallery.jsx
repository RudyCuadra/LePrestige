
import { useContext, useEffect, useRef, useState } from "react";
import { Head } from "../../layout/Head";
//import PropTypes from "prop-types"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import {BsFullscreen, BsFullscreenExit} from "react-icons/bs"
import { RxCross2 } from "react-icons/rx"
import "../../styles/COMRESGallery.css"
import { useNavigate } from "react-router-dom";
//import useSetCarreteImg from "../../hooks/useSetCarreteImg";
import { ShowImgContext } from "../../context/ShowImgContext";

export const NewGallery = ({ info }) => {
    //const [bigIMG, showBigIMG] = useState(0)
    // Manejando el estado del carrete desde un hook externo
    //const [materiales, setMateriales] = useState(true)
    // Muestra los materiales solo en el index(0) 
    // de la imagen de fondo
    /*
    useEffect(() => {
        if (bigIMG === 0) {
            setMateriales(true)
        } else {
            setMateriales(false)
        }
    }, [bigIMG])
    */
    const {bigIMG,showBigIMG} = useContext(ShowImgContext)
    const [moveCarrete, setMoveCarrete] = useState(0)
    const [fullScreen, setFullScreen] = useState(false)

    const navigate = useNavigate()

    const fullScRefIMG = useRef()
    //const fullScRefArrows = useRef()
    //console.log(fullScReff.current?.ownerDocument.fullscreen)

    const activate = () => {
        const fullIMG = fullScRefIMG.current
        console.log(fullIMG)
        fullIMG.requestFullscreen();
        setFullScreen(!fullScreen)
    }
    const deActivate = () => {
        const fullIMG = fullScRefIMG.current?.ownerDocument
        console.log(fullIMG)
        if (document.fullscreenElement) {
            fullIMG.exitFullscreen();
            setFullScreen(!fullScreen)
        }
    }

    // Se destructura la info en un array de objetos
    const dataInfo = Object.keys(info[0]).map((v) => ({ [v]: info.map((c) => c[v]) }));

    // Definiendo el titulo y la descripcion
    const title = dataInfo[2].title[0]
    const location = dataInfo[3].location[0]
    const area = dataInfo[4].area[0]
    const status = dataInfo[5].status[0]
    const scope = dataInfo[6].scope[0]
    const tag = dataInfo[7].tag[0]

    const granImage = dataInfo[1].img[bigIMG]
    // Extrae el total de imagenes
    const limite = dataInfo[1].img.length
    // Usar como limite de imagenes del slideshow
    const limiteIMG = (limite - 1)
    // Pixeles para iniciar al centro del centro del carrete xD
    //const carreteBegin = ((limite * Math.floor(70)) * 2)
    //const carreteOriginPotition = (carreteBegin / 2)

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

    // Maneja las acciones del teclado
    useEffect(() => {
        const handlekeyDown = ({ key }) => {
            //console.log(key)
            if (key === "ArrowRight") {
                forwardIMG()
            }
            if (key === "ArrowLeft") {
                backwardIMG()
            }
            if (key === "f" || key === "F") {
                activate()
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
    /*
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
    */


    return (
        <>
            <Head title={title + " | " + tag + " | Le Prestige"} />
            <section className="allWidthGallery" >
                <div className="exitOnClick"
                    onClick={() => navigate(-1)}
                >
                </div>
                <article className="mainGallery">
                    {/* DIVS MATERIALES INTERNOS */}
                    {/*
                                                materiales
                        ?
                        <>
                            <div className="material material01">
                                <div className="descMaterial">
                                    <h3>Material Name</h3>
                                    <p>Description</p>
                                </div>
                            </div>
                            <div className="material material02">
                                <div className="descMaterial">
                                    <h3>Material Name</h3>
                                    <p>Description</p>
                                </div>
                            </div>
                            <div className="material material03">
                                <div className="descMaterial">
                                    <h3>Material Name</h3>
                                    <p>Description</p>
                                </div>
                            </div>
                        </>
                        : null
                    */}

                    <div  ref={fullScRefIMG}  className="carreteContainer">

                        {/*
                    <div className="fullScControllers">
                        <span >
                                {fullScreen
                                ? <BsFullscreenExit 
                            onClick={() => deActivate()}/>
                                :<BsFullscreen
                            onClick={() => activate()}/>
                                }
                            </span>
                    </div>
                    */}

                        <IoIosArrowBack
                            className="arrowsGallery"
                            onClick={backwardIMG}
                        />
                    <img
                        className="mainIMGGallery"
                        src={granImage}
                        alt={title}/>
                        <IoIosArrowForward
                            className="arrowsGallery"
                            onClick={forwardIMG}
                        />
                    </div>

                </article>
                {/*
                //Titulo y lineas
                <aside className="asideGallery">
                    <RxCross2
                    style={{strokeWidth:"0.5", stroke:"var(--azul)"}}
                        onClick={() => navigate(-1)}
                        className="exitBigIMg" />
                    <h1 className="mainGTitle">
                        {title}
                    </h1>
                        // Rest of the info
                        // Resto de la informacion

                        <div className="mainGDesc">
                            <div className="subDescGallery">
                                <h5 className="subInfoG">
                                    Location
                                </h5>
                                <p className="subSubInfoG">
                                    {location}
                                </p>
                            </div>
                            <div className="subDescGallery">
                                <h5 className="subInfoG">
                                    Area
                                </h5>
                                <p className="subSubInfoG">
                                    {area}
                                </p>
                            </div>
                            <div className="subDescGallery">
                                <h5 className="subInfoG">
                                    Status
                                </h5>
                                <p className="subSubInfoG">
                                    {status}
                                </p>
                            </div>
                            <div className="subDescGalleryG">
                                <h5 className="subInfoG">
                                    Scope
                                </h5>
                                <p className="subSubInfo">
                                    {scope}
                                </p>
                            </div>
                        </div>
                </aside>
            */}

            </section>
        </>
    )
}

// PropTypes
// info:PropTypes.arrayOf(PropTypes.Object)
/*
NewGallery.propTypes = {
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
*/
