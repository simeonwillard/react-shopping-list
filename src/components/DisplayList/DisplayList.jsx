import './DisplayList.css';
import ListEntry from '../ListEntry/ListEntry';

function DisplayList({ list, deleteItem, purchaseItem}) {
  console.log(list);
  return (
    <div class="displayList">
      {list.map((item) => (
        <ListEntry key={item.id} item={item} deleteItem={deleteItem} purchaseItem={purchaseItem}/>
      ))}
    </div>
  );
}

export default DisplayList;