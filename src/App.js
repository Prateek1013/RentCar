import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import { useState } from "react";
import Dashboard from './Dashboard';
import Data from './Data'
import Details from './Details';
import Booking from './Booking';
import { MyContext } from './MyContext';

function App() {

  const [dat,setdat]=useState(Data);
  // const handleBooked = (booked) => {
  //   console.log(booked.person);
  //   console.log(booked.id); 
  //   // const index=Data.findIndex( obj => obj.id==booked.id);
  //   // Data[index].book_status=true;
  //   // setdat(Data);
  // };
  return (
    <MyContext.Provider value={{ dat,setdat }}>
    <Router>
    <div>
      <Routes>
      <Route path='/' element={ <Dashboard Data={dat}/>} />
      <Route path='/details/:id' element={<Details Data={dat}/>} />
      <Route path='/book/:id' element={<Booking/>} />
      </Routes>
    </div>
    </Router>
    </MyContext.Provider>
  );
}

export default App;
