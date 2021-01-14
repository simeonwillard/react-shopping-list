import './DisplayList.css';
import ListEntry from '../ListEntry/ListEntry';

function DisplayList({ list }) {
  console.log(list);
  return (
    <div class="displayList">
      {list.map((item) => (
        <ListEntry key={item.id} item={item} />
      ))}
    </div>
  );
}

export default DisplayList;
