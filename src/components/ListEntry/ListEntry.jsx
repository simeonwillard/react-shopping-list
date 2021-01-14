import './ListEntry.css';

function ListEntry({ item, deleteItem }) {
  console.log(item);

  const handleDelete = () => {
    console.log('in handle delete')
    deleteItem(item)
  }

  return (
    <div className="entry">
      <p className="itemName">{item.name}</p>
      <p className="quantityUnit">
        {item.quantity} {item.unit}
      </p>
      <div class="buttonContainer">
        <button className="material-icons buttonDone">done</button>
        <button onClick={handleDelete} className="material-icons buttonDelete">clear</button>
      </div>
    </div>
  );
}

export default ListEntry;
