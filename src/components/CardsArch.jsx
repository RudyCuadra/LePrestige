import { useContext } from "react"
import { prueba } from "../helpers/imageHelper"
import "../styles/cardsArch.css"
import { FilterContext } from "../context/FilterContext"

export const CardsArch = ({
  selectedItemId,
  handleCardClick/*,
selectedTag */}) => {

  const { tag } = useContext(FilterContext)

  return (
    <>
      {
        prueba.slice(0).map(item => (
          <>
            {(item.tag === tag) ?

              <div
                onClick={() => handleCardClick(item.id)}
                key={item.id}
                className={/*(selectedItemId === item.id) ? "expand" : */`${item.className} /*expanding*/`}
              >
                {/*
                            (selectedItemId === item.id)
                                ?
                                <div className="inside--expand">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi corrupti enim illo corporis pariatur molestiae neque consequatur rem non. Doloremque cupiditate consequuntur voluptatem dolore. Obcaecati vero aut nemo expedita dolor.
                                </div>
                                :
                                null
                */}

                <div className="gallery--containing--img">
                  <img
                    src={item.img}
                    alt="architecture"
                    className={/*(selectedItemId === item.id) ? "" : */"image--saturation image--waiting--gallery"}
                  />
                </div>
                <div className="gallery--containing--text">
                  <h3 className="gallery--inside--title">{item.title}</h3>
                  <p className="gallery--inside--desc">{item.description}</p>
                </div>
                <span className="image--filter--tag">
                  {item.tag.toUpperCase()}
                  <p className="loremIpsumTag">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </span>
              </div>
              :
              null}
          </>
        ))
      }
    </>
  )
}
