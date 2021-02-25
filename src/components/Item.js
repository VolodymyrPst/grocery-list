import React from "react";
import './Item.css'

const Item = ({ id, item, list, setList, complete, status }) => {
  const remove = (id) => {
    setList(list.filter((el) => el.id !== id));
  };

  const handleStatus = (id) => {
    setList(
      list.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            complete: !item.complete,
            status: (item.complete ? 'have' : 'ran out')
          };
        }
        return item;
      })
    );
  };

  const handleItem = (e) => {
    if (e.target.value.length <= 25) {
      setList(
        list.map((el) => {
          if (el.id === id) {
            return {
              ...el,

              item: e.target.value,
            };
          }

          return el;
        })
      );
    }
  };

  return (
    <div className="item">
      <input
        type="text"
        value={item}
        style={{
          // border: "none",
          // outline: "none",
          // backgroundColor: "transparent",
          
          // fontSize: "20px",
        }}
        onChange={handleItem}
        className={item.complete ? 'have' : 'ran-out'}
      />
      <button onClick={() => handleStatus(id)}>{status}</button>
      <button onClick={() => remove(id)}>Delete</button>
    </div>
  );
};
export default Item;