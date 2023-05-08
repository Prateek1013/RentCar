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
  const [person,setPerson]=useState({});
  const handleBooked = (person) => {
    console.log(person);
    setPerson(person);
  };
  return (
    <MyContext.Provider value={{ dat,setdat }}>
    <Router>
    <div>
      <Routes>
      <Route path='/' element={ <Dashboard Data={dat} person={person} />} />
      <Route exact path='/details/:id/:name?/:contact?/:start?/:end?' element={<Details Data={dat}/>} />
      <Route path='/book/:id' element={<Booking booked={handleBooked}/>} />
      </Routes>
    </div>
    </Router>
    </MyContext.Provider>
  );
}

export default App;
