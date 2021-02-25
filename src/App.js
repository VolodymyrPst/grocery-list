import React, { useState, useEffect } from "react";
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
      date: setTime()
    };
    e.preventDefault();
    if (item && item.length <= 25) {
      setList([...list, newItem]);
      setItem("");
    }
  };

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(list));
  }, [list]);

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const setTime = () => {
    let today = new Date();
    let date = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    return date;
  }

  return (
    <div className="App">
      <h1>Grocery List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={item}
          placeholder="Enter the items"
          onChange={handleChange}
        />
        <button type="submit">
          Add Items
        </button>
        <button>Filter</button>
        <br></br>
        <br></br>
      </form>
      <div>
        {list.map((component, id) => {
          return (<Item
            key={id}
            id={component.id}
            item={component.item}
            list={list}
            setList={setList}
            status={component.status}
            setItem={setItem}
            date={component.date}
            setTime={setTime}
          />)
        })}
      </div>
    </div>
  );
}

export default App;