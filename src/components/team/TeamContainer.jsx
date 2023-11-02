import { TeamCard } from "./TeamCard"
import "../../styles/about.css"
import "../../styles/about_new_sections.css"
import "../../styles/team.css"
import { useEffect, useRef, useState } from "react"

export const TeamContainer = ({title, teamMembers, isMobile}) => {
    const [card, openCard] = useState(null)
    const rightSideRef = useRef()
    const getID = (cardID) => {
        openCard(cardID)
    }

    const fadeOut = () => {
        if(card ){
            rightSideRef.current.classList.add("backdropFadeOut")

            setTimeout(() => {
                openCard(null)
                rightSideRef.current.classList.remove("backdropFadeOut")
            }, 600)

        }
        clearTimeout();
    }

    // close on ESC Key
    useEffect(() => {
        const handlekeyDown = ({ key }) => {
            //console.log(key)
            if (key === "Escape") {
                fadeOut()
            }
        }

        window.addEventListener('keydown', handlekeyDown)

        return () => window.removeEventListener('keydown', handlekeyDown)

    }, [fadeOut])

    return (
        <section
            className={isMobile ? "" : "scroll-area"}
            onClick={fadeOut}>
            < div className="allWidth" >
                <article className="aboutLayoutIns">
                    <div className="cardsWraper">
                        <h3>{title}</h3>
                        <TeamCard
                            isMobile={isMobile}
                            getID={getID}
                            teamMembers={teamMembers}
                            rightSideRef={rightSideRef}
                            fadeOut={fadeOut}
                            card={card}
                            openCard={openCard} />
                    </div>
                </article>
            </div >
        </section >
    )
}
