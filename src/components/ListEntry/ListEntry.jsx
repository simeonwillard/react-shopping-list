import './ListEntry.css';

function ListEntry({ item }) {
  console.log(item);
  return (
    <div className="entry">
      <p className="itemName">{item.name}</p>
      <p className="quantityUnit">
        {item.quantity} {item.unit}
      </p>
      <div class="buttonContainer">
        <button className="material-icons buttonDone">done</button>
        <button className="material-icons buttonDelete">clear</button>
      </div>
    </div>
  );
}

export default ListEntry;
