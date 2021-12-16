
import React from 'react';
import "./App.css";
import {stores} from './store';
import Diamond from './Diamond';

export default function App() {
  return (
    <div className='App'>
    {stores.map((store)=>{
      return <Diamond key={store.id} store={store}></Diamond>

    })}

    </div>
  )  
}



