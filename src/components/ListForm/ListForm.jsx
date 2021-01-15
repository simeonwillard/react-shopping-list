import './ListForm.css';

function ListForm({
  handleSubmit,
  newItemName,
  setNewItemName,
  newItemQuantity,
  setNewItemQuantity,
  newItemUnit,
  setNewItemUnit,
  resetItems,
  clearItems,
}) {
  console.log('in ListForm');
  return (
    <div className="formResetClearContainer">
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
            maxLength="80"
            required
          />
        </div>
        <div className="quantity">
          <label>Quantity: </label>
          <input
            className="quantityInput"
            type="number"
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
        <button className="addFoodButton submit" type="submit">
          Add Food
        </button>
      </form>
      <div className="resetClearContainer">
        <button className="listFormButton reset" onClick={resetItems}>
          Reset
        </button>
        <button className="listFormButton clear" onClick={clearItems}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default ListForm;
