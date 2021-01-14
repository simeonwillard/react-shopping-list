import './DisplayList.css';

function DisplayList({ list }) {
  return (
    <div>
      {list.map((item) => (
        <ListEntry key={item.id} listEntry={item} />
      ))}
    </div>
  );
}

export default DisplayList;
