// import React, {useState} from 'react';

// export default function FormAdd(){

//     const [priority, setPriority] = useState(0);
//     const [name, setName] = useState('');

//     const handleSubmit = () => {
//         localStorage.setItem(name, priority)
//         console.log('localStorage')
//     }

//     const handleChange = ()=> {
//         localStorage.setItem(name, priority);
//     }


//     return (
//         <>
//             <form onSubmit={handleSubmit}>
//                 <label type="text" htmlFor="name">What food to buy</label>
//                 <input type="text" id="name" onChange={(e)=>setName(e.target.value)}/><br/>
//                 <label type="number" htmlFor="priority">Priority</label>
//                 <input type="number" id="priority" max='5'onChange={(e) => setPriority( e.target.value)}/>  
//                 <button type="submit">Add</button>
//             </form>
//         <button>Filter</button>
//         </>
//     )
// }