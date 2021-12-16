import axios from "axios";


export default function fetchdata(pageNumber:number=1){
    return axios.get(`https://randomuser.me/api?page=${pageNumber}`)
    .then (({data}) =>{
    console.log(data);
    return data
   })
  }
  