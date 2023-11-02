import PropTypes from "prop-types"
import "../styles/about.css"

export const MovingImages = ({ movingImages }) => {
    return (
        <div className='movingImagesContainer'>
            {movingImages.slice(0).map(item => (
                <img
                    src={item.img}
                    key={item.id}
                    className='companyLogos'
                />
            ))}
        </div>
    )
}

// PropTypes
MovingImages.propTypes = {
    movingImages: PropTypes.arrayOf(
        PropTypes.object
    )
}