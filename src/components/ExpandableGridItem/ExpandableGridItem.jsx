import "../../styles/ExpandableGridItem.css";
import "../../styles/cardsArch.css"

const ExpandableGridItem = ({
  image,
  expanded,
  fields,
  ...rest
}) => {
  // If there is an image show it
  image.className = expanded
    ? ''
    : 'image--saturation ' + image.className;
  const imageView = image ? <img {...image} /> : null;

  // Definiendo el titulo
  const { title } = fields[0]

  // applying expanded class and any provided className
  rest.className =
    (rest.className ?? '') + ' expandable-card ' + (expanded ? 'expanded' : 'collapsed');


  const fieldsView = (
    <div className={`data ${expanded ? 'visible' : 'not-visible'}`}>
      {fields.map((field, index) => {
        return (
          <div
            className='field'
            key={index}
          >
            <div className="insideField">
              <h2 className='title'>{field.title}</h2>
              <div className="microContainer">
                <h3 className='subTitle'>Project Type</h3>
                <p className='content'>{field.projectType}</p>
              </div>
              <div className="microContainer">
                <h3 className='subTitle'>Location</h3>
                <p className='content'>{field.location}</p>
              </div>
              <div className="microContainer">
                <h3 className='subTitle'>Area</h3>
                <p className='content'>{field.area}</p>
              </div>
              <div className="microContainer">
                <h3 className='subTitle'>Status</h3>
                <p className='content'>{field.status}</p>
              </div>
              <div className="microContainer">
                <h3 className='subTitle'>Collaborators</h3>
                <p className='content'>{field.collaborators}</p>
              </div>
            </div>
            <div className="insideField">
              <p className="parragraph">{field.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div {...rest}>
      <span className={expanded ? "displayNone not" : "image--filter--tag"}>
        {title}
        <p className="loremIpsumTag">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      </span>
      {imageView}
      {fieldsView}
    </div>
  );
};

export default ExpandableGridItem;