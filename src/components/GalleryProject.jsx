import { useContext, useRef, useState } from "react"
import { galleryInfo } from "../content/galleryContent"
import ExpandableGridItem from "./ExpandableGridItem/ExpandableGridItem"
import { FilterContext } from "../context/FilterContext"
import "../styles/galleryProjects.css"
import "../styles/cardsArch.css"

export const GalleryProjects = () => {
  const [expandedId, setExpandedId] = useState(null);
  const mainContainerRef = useRef(null);
  const { tag } = useContext(FilterContext)

  const onItemClick = (item) => {
    if (expandedId === item.id) {
      setExpandedId(null);
    } else {
      setExpandedId(item.id);

      // Scroll to top
      mainContainerRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start',
      });
    }
  }

  const gridItemsView = galleryInfo
    .filter(item => item.tag === tag)
    .map((item, index) => {
      return <ExpandableGridItem
        className={item.imgClassName}
        onClick={() => onItemClick(item)}
        key={index}
        expanded={item.id === expandedId}
        image={{
          src: item.img,
          alt: item.tag,
        }}
        fields={[
          {
            title: item.title,
            content: item.description,
            projectType: item.projectType,
            location: item.location,
            area: item.area,
            status: item.status,
            collaborators: item.collaborators,
          }
        ]}
      />
    });

  return (
    <div className="allWidth" ref={mainContainerRef}>
      <div className="grid--container">
        {gridItemsView}
      </div>
    </div >
  )
}