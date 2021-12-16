import react from "react"
const Diamond = (props) => {
    const {img, title, desc} = props.store
    return (
      <div className='book'>
        <img src={img}/>
        <h1>{title}</h1> 
        <h4>{desc}</h4>
      </div>
    )
  }
  export default Diamond;