import React from "react";
import { Header, Calendar } from "../components/index";

const Schedular = () => {
  return (
    <div className='className="m-2 md:m-10 p-2 md:10'>
      <Header category="App" title="Schedular" />
      <Calendar />
    </div>
  );
};

export default Schedular;
