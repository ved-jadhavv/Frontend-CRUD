import axios from "axios";
import { useState } from "react";
  import { useNavigate } from "react-router";

export default function AddUser() {
  const [aduser, setAduser] = useState({
    id: "",
    username: "",
    name: "",
    email: "",
  });


const navigate = useNavigate();

// inside handleSubmit, after the axios.post line:
function handleOnChange(e) {
  //Copies all existing props of the aduser obj so we don't lose previously entered values. and get name: ved of user
    setAduser({ ...aduser, [e.target.name]: e.target.value });
  }

  const handleSubmit = async () => {
    
    try {
      await axios.post("/api/addUser", { ...aduser, id: Number(aduser.id) });
      // use for get empty form values for next data
      setAduser({ id: "", username: "", name: "", email: "" });
      navigate("/");
    } catch (error) {
      console.error("Could not save user", error);
    }
  };


  return (
    <div className="mx-auto mt-4 w-full max-w-md rounded border p-6 shadow">
      <h2 className="">Register User</h2>

      <div className="mb-3">
        <label htmlFor="id" className="mb-1 block font-medium"> id </label>
        <input
          className="w-full rounded border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="id"
          name="id"
          type="number"
          min="1"
          placeholder="Enter your id"
          value={aduser.id}
          onChange={handleOnChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="username" className="mb-1 block font-medium"> Username </label>
        <input
          className="w-full rounded border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="username"
          name="username"
          type="text"
          placeholder="Enter your user name"
          value={aduser.username}
          onChange={handleOnChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="name" className="mb-1 block font-medium"> Name </label>
        <input
          className="w-full rounded border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="name"
          name="name"
          type="text"
          placeholder="Enter Your name"
          value={aduser.name}
          onChange={handleOnChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="mb-1 block font-medium"> email id </label>
        <input
          className="w-full rounded border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="email"
          name="email"
          type="email"
          placeholder="Enter Your email id"
          value={aduser.email}
          onChange={handleOnChange}
        />
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        className="bg-blue-400 rounded border border-black py-2 px-2 hover:bg-red-500"
      >
        Submit
      </button>
    </div>
  );
}