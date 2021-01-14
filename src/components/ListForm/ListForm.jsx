function ListForm({
    handleSubmit,
    newItemName,
    setNewItemName,
    newItemQuantity,
    setNewItemQuantity,
    newItemUnit,
    setNewItemUnit
}) {
    console.log('in ListForm');
    return (
        <div>
            <h2>Add an Item</h2>
            <form onSubmit={handleSubmit}>
                <label>*Item: </label>
                <input
                    type="text"
                    placeholder="item"
                    value={newItemName}
                    onChange={(event) => setNewItemName(event.target.value)}
                    maxlength="80"
                    required
                />
                <br></br>
                <label>*Quantity: </label>
                <input
                    type="number"
                    placeholder="quantity"
                    value={newItemQuantity}
                    onChange={(event) => setNewItemQuantity(event.target.value)}
                    required
                />
                <label>Unit: </label>
                <input
                    type="text"
                    placeholder="quantity"
                    value={newItemUnit}
                    onChange={(event) => setNewItemUnit(event.target.value)}
                />
                <br></br>
                <button type="submit">Add Food</button>
                <p><i>Fields noted with * are required</i></p>
            </form>
        </div>
    )
}


export default ListForm