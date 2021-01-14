import './ListEntry.css';

function ListEntry({ item }) {
  console.log(item);
  return (
    <div>
      <p>{item.name}</p>
      <p>
        {item.quantity} {item.unit}
      </p>
      <button>Buy</button>
      <button>Delete</button>
    </div>
  );
}

export default ListEntry;
