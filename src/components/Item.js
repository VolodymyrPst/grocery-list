import React from "react";

const Item = ({ id, item, list, setList, complete, status, date, setTime}) => {
  const remove = (id) => {
    setList(list.filter((el) => el.id !== id));
  };

  const handleStatus = (id) => {
    
    setList(
      list.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            date: setTime(),
            complete: !item.complete,
            status: (item.complete ? 'have' : 'ran out')
          };
        }
        return item;
      })
    );
  };

  const handleItem = (e) => {
    if (e.target.value.length <= 2 && e.target.value.length <= 20) {
      setList(
        list.map((el) => {
          if (el.id === id) {
            return {
              ...el,
              date: setTime(),
              item: e.target.value,
            };
          }

          return el;
        })
      );
    }
  };

  return (
    <div>
      <input
        type="text"
        value={item}
        onChange={handleItem}
      />
      <button onClick={() => handleStatus(id)}>{status}</button>
      <button
        style={{border:' 2px solid red'}}
        onClick={() => remove(id)}
        >Delete</button>
      <p>Last changes: {date}</p>
    </div>
  );
};
export default Item;