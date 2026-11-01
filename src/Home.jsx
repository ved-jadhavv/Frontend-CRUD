import axios from "axios";
import { useState, useEffect } from "react";

function Home (){

const [users, setUser]=useState([]);

let getUsers= async ()=>{

  try{
  const response= await axios.get("/api/");
   setUser(response.data);
  }
  catch(error){
    console.error("failed to fetch user", error);
  }
}
useEffect(() => {
  getUsers();

}, []);

let deleteUser=async(id)=>{
  await axios.delete(`/api/user/${id}`)
  getUsers();
}

    return(
      
        <div className="home">
            <div className="py-4">
        <table className="table border">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Username</th>
      <th scope="col">nameOfUser</th>
      <th scope="col">emailOfUser</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {
     
     users.map((user, id) =>(
    <tr>
      <th scope="row" key={id}>{id+1}</th>
      <td>{user.username}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        <button className="bg-blue-500 border-2 border-black m-2 p-2 rounded-2xl! text-white ">View</button>
        <button className=" border-2 border-black m-2 p-2 rounded-2xl!">Edit</button>
        <button className="bg-red-500 border-2 border-black m-2 p-2 rounded-2xl! text-white" onClick={()=>deleteUser(user.id)}>Delete</button>
      </td>
    </tr>

     ))

    }
  
  </tbody>
</table>
    </div>
    </div>)

    
};
export default Home; // by craring a syntax