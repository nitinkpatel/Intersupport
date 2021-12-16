import * as React from "react"
import axios from "axios";
// import './App.css';
const {useEffect, useState} = React;

const fetchRandomData = () => {
  return axios.get('https://randomuser.me/api')
    .then (({data})=> {
      console.log(data);
      return JSON.stringify(data, null, 2);
    })
    .catch(err => {
      console.error(err);
    })
}

export default function App() {
  const [counter, setcounter] = useState(0);
  const [randomData, setrandomData] = useState('');

  useEffect(() => {
    fetchRandomData().then(random => {
    setrandomData(random || '');
    });
      },[])

  return(
  <div>
  <h1> hello</h1>

<p>
  {counter}
</p>
<button onClick = { ()=> {
  setcounter(counter+1);

}}>Increase</button>
<pre>
  {randomData}
</pre>

{/* <button onClick = { ()=> {
fetchRandomData();
}}>Fetch Data</button> */}


</div>
  );
}





// //    type:1
// //    const greeting = 'Hello Function Component!';
// //    return <h1>{greeting}</h1>;

// //    type:2
// //    function Headline() {
// //      const greeting = 'Hello Function Component!';
// //      return <h1>{greeting}</h1>;
// //    }
// //    return <Headline />;
// // //----------------------------------------------------------------------
// //     const greeting = 'Hello Function Component!';
// //     return <Headline value={greeting} />;
// //   }

// //   type:3 props.value
// // function Headline(props) {
// //   return <h1>{props.value}</h1>;

// // type-4 value
// // function Headline({ value }) {
// //   return <h1>{value}</h1>;
// // //-----------------------------------------------------------------------
// // }
// // export default App;

// // import React, { useState } from 'react';
// // const App = () => {
// //   return <Headline />;
// // };
// // const Headline = () => {
// //   const [greeting, setGreeting] = useState(
// //     'Hello Function state!'
// //   );
// // //----------------------------------------------------------------------
// //    type-5 steady state
// //     return <h1>{greeting}</h1>;

// //   type-6 state change
// //   return (
// //     <div>
// //       <h1>{greeting}</h1>
// //       <input
// //         type="text"
// //         value={greeting}
// //         onChange={event => setGreeting(event.target.value)}
// //       />
// //     </div>
// //   );

// //   type -7 handle change
// //   const handleChange = event => setGreeting(event.target.value)
// //     return (
// //       <div>
// //         <h1>{greeting}</h1>
// //         <input type="text" value={greeting} onChange={handleChange} />
// //       </div>
// //     );

// //   };
// // // export default App;
// // import React, { useState } from 'react';

// // const App = () => {
// //   const [count, setCount] = useState(0);

// //   const handleIncrement = () =>
// //     setTimeout(
// //       () => setCount(currentCount => currentCount + 1),
// //       1000
// //     );

// //   const handleDecrement = () =>
// //     setTimeout(
// //       () => setCount(currentCount => currentCount - 1),
// //       1000
// //     );

// //   return (
// //     <div>
// //       <h1>{count}</h1>

// //       <button handleClick={handleIncrement}>Increment</button>
// //       <button handleClick={handleDecrement}>Decrement</button>
// //     </div>
// //   );
// };

// // // const Button = ({ handleClick, children }) => (
// // //   <button type="button" onClick={handleClick}>
// // //     {children}
// // //   </button>
// // // );

// export default App;

//------------------------------------------------------------
//import { useState } from "react";


// export default function App() {
//   const [state, setstate] = useState("");

//   function handleChange(e){
//     setstate(e.target.value);
//   }
//     return <div className="App">
//       <input type="text" value={state} onChange={handleChange}/>   
          
//         </div>;
      
// }
//--------------------------------------------------------------------
// function Child(props){
//   return <GrandChild value={props.value}/>
// }

// function GrandChild(props){
//   return <h1>{props.value}</h1>
// }

// export default function App() {
//   const [mine, setmine] = useState(1);
//   return(
//     <div>
//     <Child value={mine}/>
//     </div>
 
//     );
//}
