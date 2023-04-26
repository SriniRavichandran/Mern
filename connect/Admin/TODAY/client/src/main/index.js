import React from 'react'

export const Main = () => {


    const handleLogout=()=>{
        localStorage.removeItem("token");
        window.location.reload();
    }
  return (
    <div><button onClick={handleLogout}>logout</button></div>
  )
}
