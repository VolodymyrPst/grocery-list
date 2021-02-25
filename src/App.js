import React, { useState } from "react";
import "./App.css";
import Item from "./components/Item";
import nextId from "react-id-generator";

const arr = () => {
  let data = localStorage.getItem("data");
  if (data) return JSON.parse(localStorage.getItem("data"));
  else return [];
};

function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState(arr);

  let htmlId = nextId();

  const handleSubmit = (e) => {
    const newItem = {
      item: item,
      complete: false,
      id:htmlId,
      status: 'have',
    };
    e.preventDefault();
    if (item && item.length <= 25) {
      setList([...list, newItem]);
      setItem("");
    }
  };

  React.useEffect(() => {
    localStorage.setItem("data", JSON.stringify(list));
  }, [list]);

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  return (
    <div className="App">
      <h1>Grocery List</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          value={item}
          placeholder="Enter the items"
          onChange={handleChange}
        />
        <button className="btn" type="submit">
          Add Items
        </button>
        <button>Filter</button>
        <br></br>
        <br></br>
      </form>
      <div>
        {list.map((c, id) => (
          <Item
            key={id}
            id={c.id}
            item={c.item}
            list={list}
            setList={setList}
            status={c.status}
            setItem={setItem}
            
          />
        ))}
      </div>
    </div>
  );
}

export default App;