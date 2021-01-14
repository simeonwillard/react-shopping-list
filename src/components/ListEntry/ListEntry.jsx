import './ListEntry.css';

function ListEntry({ item, purchaseItem }) {
  console.log(item);

  const handlePurchaseItem = () => {
    purchaseItem(item);
    console.log(item.purchased)
    
  }

  return (
    <div>
      <p>{item.name}</p>
      <p>
        {item.quantity} {item.unit}
      </p>
      <button onClick={handlePurchaseItem}>Buy</button>
      <button>Delete</button>
      {item.purchased && <h3>Purchased</h3>}
    </div>
  );
}

export default ListEntry;
