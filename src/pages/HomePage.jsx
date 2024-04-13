import React, { useContext, useEffect, useState } from "react";

const HomePage = () => {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     let response = await api.get("/api/Clientorder/Clientorder_Get");

  //     console.log("tok", response.headers);
  //     console.log(response.data.result);
  //     setOrders(response.data.result);
  //     console.log(orders);
  //   };
  //   fetchData();
  // }, []);
  //  console.log(orders);

  return (
    <div className="container">
      <h1>Online Interactive Game</h1>
      <div>
        <ul className="menu">
          <li className="">New Game</li>
          <li className="">Rules</li>
          <li className="">Player Settings</li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
