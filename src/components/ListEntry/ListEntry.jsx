import './ListEntry.css';

function ListEntry({ item, deleteItem }) {
  console.log(item);

  const handleDelete = () => {
    deleteItem(item)
  }

  return (
    <div>
      <p>{item.name}</p>
      <p>
        {item.quantity} {item.unit}
      </p>
      <button>Buy</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default ListEntry;
