import './ListForm.css';

function ListForm({
  handleSubmit,
  newItemName,
  setNewItemName,
  newItemQuantity,
  setNewItemQuantity,
  newItemUnit,
  setNewItemUnit,
}) {
  console.log('in ListForm');
  return (
    <div>
      <form onSubmit={handleSubmit} className="formContainer">
        <p className="addItem">Add an Item!</p>
        <div className="item">
          <label>Item: </label>
          <input
					className="itemInput"
            type="text"
            placeholder="item"
            value={newItemName}
            onChange={(event) => setNewItemName(event.target.value)}
            maxlength="80"
            required
          />
        </div>
        <div className="quantity">
          <label>Quantity: </label>
          <input
						className="quantityInput"
            type="text"
            placeholder="quantity"
            value={newItemQuantity}
            onChange={(event) => setNewItemQuantity(event.target.value)}
            required
          />
        </div>
        <div className="unit">
          <label>Unit: </label>
          <input
						className="unitInput"
            type="text"
            placeholder="unit"
            value={newItemUnit}
            onChange={(event) => setNewItemUnit(event.target.value)}
          />
        </div>
        <button className="submitButton" type="submit">
          Add Food
        </button>
      </form>
    </div>
  );
}

export default ListForm;
