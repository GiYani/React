
import Item from '../item';
import './itemList.css'
const ItemList = ({ items }) => {
  return (
    <section className="">
      {items?.map((item) => (
        <Item {...item} key={item.id} />
      ))}
    </section>
  );
};
export default ItemList;