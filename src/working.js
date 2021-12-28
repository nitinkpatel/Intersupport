import * as React from "react"
import axios from "axios";
// import './App.css';
const { useEffect, useState } = React;

const fetchRandomData = () => {
  return axios.get('https://randomuser.me/api')
    .then(({ data }) => {
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
  }, [])

  return (
    <div>
      <h1> hello</h1>

      <p>
        {counter}
      </p>
      <button onClick={() => {
        setcounter(counter + 1);

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


import React from 'react';
import "./App.css";
import { stores } from './store';
import Diamond from './Diamond';

export default function App() {
  return (
    <div className='App'>
      {stores.map((store) => {
        return <Diamond key={store.id} store={store}></Diamond>

      })}

    </div>
  )
}

import React, { useState, useEffect } from 'react'
const url = 'https://api.github.com/users';

export default function App() {
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    const response = await fetch(url)
    const users = await response.json();
    setUsers(users);
  }
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div className="book h1">

        {users.map((user) => {
          const { login, id, avatar_url, html_url } = user
          return <li key={id}>
            <img src={avatar_url} alt={login} />
            <div>
              <h4>{login}</h4>
              < a href={html_url}>profile</a>
            </div>

          </li>

        }
        )}
      </div>
    </>
  )
}

import React, { useState } from "react";


export default function App() {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [people, setPeople] = useState([])
  const [person, setPerson] = useState({ firstName: '', email: '' })

  const handleChange = (e) => {
    const name = e.target.name;
    const email
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && email) {
      const person = { firstName, email };
      setPeople((people) => {
        return [...people, person];
      })
    }
    else {
      console.log('empty')
    }
  };
  return (
    <div>
      <article>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName"> Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)} />
          <div>
            <label htmlFor="firstName"> Email:</label>
            <input type="text"
              id="firstName"
              name="firstName"
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
          </div>
          <button type="submit">add person
          </button>
        </form>
        {people.map((person) => {
          const { id, firstName, email } = person;
          return (
            <div key={id}>
              <h4>
                {firstName}
              </h4>
              <p>{email}</p>
            </div>
          )
        })}
      </article>
    </div>
  )
}

import React, {useEffect, useRef} from 'react'

export default function App() {
  
 
  const refContainer = useRef(null);
  const divContainer = useRef(null);
 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
    console.log(divContainer.current);

  };
  useEffect(() => {
    console.log(refContainer.current);
    refContainer.current.focus();
  })

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input type = 'text' ref={refContainer}/>
          <button type='submit'>submit</button>
        </div>
      </form>
   <div ref = {divContainer}>
     <h1>hello world</h1>
     </div>
    </div>
  )
}
