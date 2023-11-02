import PopupBanner from "../components/BannerHome"
import { HeroSlider } from "../components/HeroSlider"
import { Head } from "../layout/Head"
import "../styles/homePage.css"
import "../styles/index.css"

export const HomePage = () => {
    return (
        <>
            <Head title="Le Prestige" />
            <header>
                <HeroSlider />
                {/* <PopupBanner/> */}
            </header>
            
        </>
    )
}
