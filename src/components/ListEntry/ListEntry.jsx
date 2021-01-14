import './ListEntry.css';

function ListEntry({ item, deleteItem }) {
  console.log(item);

  const handleDelete = () => {
    deleteItem(item)
  }

  return (
    <div className="entry">
      <p className="itemName">{item.name}</p>
      <p className="quantityUnit">
        {item.quantity} {item.unit}
      </p>
      <div class="buttonContainer">
        <button onClick={handleDelete} className="material-icons buttonDone">done</button>
        <button className="material-icons buttonDelete">clear</button>
      </div>
    </div>
  );
}

export default ListEntry;
