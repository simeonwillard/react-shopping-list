import './DisplayList.css';
import ListEntry from '../ListEntry/ListEntry';

function DisplayList({ list, deleteItem, purchaseItem, editItem }) {
  console.log(list);
  return (
    <div className="displayList">
      {list.map((item) => (
        <ListEntry
          key={item.id}
          item={item}
          deleteItem={deleteItem}
          purchaseItem={purchaseItem}
          editItem={editItem}
        />
      ))}
    </div>
  );
}

export default DisplayList;
