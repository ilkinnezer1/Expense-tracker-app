import React,{useState, useEffect, useRef} from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import AddExpense from './Components/AddExpense';
import Tracker from './Pages/Tracker';

function App() {
  const [loader, setLoader] = useState(true)
  const [timer, setTimer] = useState(2)
  const id = useRef(null)
  const swiper = () => {
    window.clearInterval(id.current)
    setLoader(false)
  }
  useEffect(()=> {
    id.current = window.setInterval(() => {
      setTimer(timer => timer - 1 )
    }, 1000)
  }, [])

  //For timer
  useEffect(()=> {
      if(timer === 0) {
        swiper()
      }
  }, [timer])
     
  return (
<>
{loader ? <div className="loader full-screen landing">
      <img src="/images/loader.svg" className="w-50"/>
      <h3>Baku, Azerbaijan</h3>
      </div>
      : 
      <Routes>
        <Route path="/" exact element={<Tracker/>}/>
        <Route path="/add" element={<AddExpense/>}/>
        </Routes>
 } </>
      
  );
}

export default App;
