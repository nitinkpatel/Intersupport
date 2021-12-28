import React, {useEffect, useRef, useState} from 'react'
import Modal from './Modal';

export default function App() {
  
  const [name, setName] = useState('')
 const [people, setPeople] = useState('')
 const [showModal, setShowModal] = useState(false)

 
  const handleSubmit = (e) => {
    e.preventDefault();
  if (name) {
    setShowModal(true);
    setPeople([...people,{id: new Date().getTime().toString(),name}]);
    setName('');
  } else{
    setShowModal(true);
  }

  };
  useEffect(() => {
    console.log(refContainer.current);
    refContainer.current.focus();
  })

  return (
    <div>
      {showModal && <Modal/>}
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
