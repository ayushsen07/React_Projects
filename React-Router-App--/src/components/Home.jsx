import React from "react";
import { Link, NavLink, useNavigate } from "react-router";
function Home() {

  const navigate = useNavigate()

  function handleClick(){
    navigate('/about')
  }

  return (
    <>
      <div className="text-3xl">Welcome to the our Home page</div>
      <button onClick={handleClick}>Go To About Page</button>
      
    </>
  );
}

export default Home;
