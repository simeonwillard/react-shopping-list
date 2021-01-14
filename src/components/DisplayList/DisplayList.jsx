import './DisplayList.css';
import ListEntry from '../ListEntry/ListEntry';

function DisplayList({ list, deleteItem }) {
  console.log(list);
  return (
    <div class="displayList">
      {list.map((item) => (
        <ListEntry key={item.id} item={item} deleteItem={deleteItem} />
      ))}
    </div>
  );
}

export default DisplayList;