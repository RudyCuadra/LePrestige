import { Link } from "react-router-dom"
import "../../styles/accesories.css"

export const Accesories1 = ({ info }) => {
    return (
        <section className="allWidth">
            <div className="accesoriesPasarela">
                {info.map((item) => {
                    return (
                        <div key={item.id} className="pasarelaIMG">
                            <Link to={item.link}>
                                <img
                                    src={item.img}
                                    className="image--saturation"
                                    alt={item.alt} />
                            </Link>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}