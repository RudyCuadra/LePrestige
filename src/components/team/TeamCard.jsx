import "../../styles/about.css"
import "../../styles/about_new_sections.css"
import "../../styles/team.css"
import { forwardRef, useEffect } from "react"

export const TeamCard = forwardRef((
    {
        card,
        getID,
        teamMembers,
        fadeOut,
        rightSideRef
    }) => {
		
    // Cierra las card con la tecla escape
	useEffect(() => {
		const handlekeyDown = ({ key }) => {
			//console.log(key)
			if(rightSideRef?.current){
				if (key === "Escape") {
					fadeOut()
				}
			}
		}

        window.addEventListener('keydown', handlekeyDown)

        return () => window.removeEventListener('keydown', handlekeyDown)
    }, [])

    return (
        <>
            {
                teamMembers.slice(0).map(item => (
                    <div
                            key={item.id}
                            className={(card === item.id)
                        ? "cardContainer"
                        : (card === null)
                            ? "cardContainer "
                            : "hideMembers floatingCenter"}>
                        <div className={(card === item.id) ? "cardLeftColMove" : "cardLeftCol"} onClick={() => getID(item.id)}>
                            <img
                                className={(card === item.id) ? "cardImgFull" : "image--saturation cardImg"}
                                src={item.img}
                                alt={item.name} />
                            {(card === item.id)
                                ? null
                                : <div className="cardLeftText">
                                    <h3>{item.name}</h3>
                                    <p className="CEOSubTitleJobCard">
                                        {item.title}</p>
                                </div>
                            }
                        </div>
                        {/* CARD RIGHT DESC */}
                        {(card === item.id)
                            ? <div ref={rightSideRef} id={item.id} className="cardRightCol" >
                                <div className="cardLeftText">
                                    <h3>{item.name}</h3>
                                    <p className="CEOSubTitleJobCard">
                                        {item.title}</p>
                                </div>
                                <p className="CEOparr">
                                    {item.description}
                                </p>
                            </div>
                            : null
                        }

                    </div>
                ))
            }
        </>
    )
})
