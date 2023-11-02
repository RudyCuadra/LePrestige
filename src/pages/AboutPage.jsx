import { Head } from "../layout/Head"
import { aboutPartners, aboutInsPeople, aboutUsCEOS, aboutUsInfo } from "../content/aboutUsContent"
import "../styles/about.css"
//import { AboutSec01 } from "../components/aboutSections/AboutSec01"
//import { AboutSec02 } from "../components/aboutSections/AboutSection02"
//import { AboutSec03 } from "../components/aboutSections/AboutSec03"
import { AboutSec01, AboutSec02, AboutSec03 } from "../components/aboutSections"
import { AboutSecNew02 } from "../components/aboutSections/AboutSecNew02"
import { AboutSecNew03 } from "../components/aboutSections/AboutSecNews03"
import { AboutSecNew04 } from "../components/aboutSections/AboutSecNews04"
import { TeamContainer } from "../components/team/TeamContainer"
import { cardTeam01, cardTeam02, cardTeam03, cardTeamAll } from "../content/cardTeam"
import useWidthClient from "../hooks/useWidthClient"
//import { useEffect, useState } from "react"

export const AboutPage = () => {
    /* INSPIRATIONAL PEOPLE INFO 
    const insPeopleIMG = aboutInsPeople[0].img
    const insPeopleNAME = aboutInsPeople[0].name
    const insPeopleDesc = aboutInsPeople[0].text
    * */

    /*Custom Hook que determina si la pantalla mide menos de 550px*/
    const [isMobile, isIpad]=useWidthClient()

    return (
	<>
	    <Head title="About" />
	    <div  className={isIpad ? "" : "scroll-container"}>
		<AboutSec01
		    isMobile={isMobile}
		    info={
			aboutUsInfo
		    } />
		<AboutSecNew02
		    isMobile={isMobile}
		/>
		<AboutSecNew03
		    isMobile={isMobile}
		/>
		<AboutSecNew04
		    isMobile={isMobile}
		/>
		{isMobile 
		    ?<TeamContainer
			isMobile={isMobile}
			title="OUR TEAM"
		    teamMembers={cardTeamAll}/>
		    :<>
			<TeamContainer
			    isMobile={isMobile}
			    title="OUR TEAM"
			teamMembers={cardTeam01}/>
			<TeamContainer
			    isMobile={isMobile}
			teamMembers={cardTeam02}/>
			<TeamContainer
			    isMobile={isMobile}
			teamMembers={cardTeam03}/>
		    </>
		}
		{/**
		<AboutSec02
		    info={
			[
			    insPeopleIMG,
			    insPeopleNAME,
			    insPeopleDesc
			]
		    } />
		 */}
		<AboutSec03
		    isMobile={isMobile}
		    info={[
			aboutUsCEOS,
			aboutPartners
		    ]} />

	    </div>

	</>
    )
}
