import './DisplayList.css';
import ListEntry from '../ListEntry/ListEntry';

function DisplayList({ list, purchaseItem }) {
  console.log(list);
  return (
    <div>
      {list.map((item) => (
        <ListEntry key={item.id} item={item} purchaseItem={purchaseItem}/>
      ))}
    </div>
  );
}

export default DisplayList;
