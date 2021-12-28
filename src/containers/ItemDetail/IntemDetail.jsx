import  './itemDetail.css'
export const ItemDetail = ({category, title, image, description, precio }) => {
  return (
    <div className={`item_card ${category}-fitIntegral`}>
      <h2 style={{ fontWeight:'400'}}>{title}</h2> 
        <span>
          <img src={image} alt={title} className={'big-img'} />
        </span>
      <h3 style={{ fontWeight:'400'}}>{description}</h3>
      <h3 style={{fontWeight:'500'}}>{precio}</h3>
    </div>
  );
};
