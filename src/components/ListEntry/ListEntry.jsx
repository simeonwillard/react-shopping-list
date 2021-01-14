import './ListEntry.css';

function ListEntry({ item }) {
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
