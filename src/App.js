import React,{useState} from 'react'
import "./index.css";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
function AppC() {
  const [num,setNum] = useState('');
  const options1 = [
   'VANTAGE', 'OPTION 1', 'OPTION 2','OPTION 3'
  ];
  const defaultOption1 = options1[0];
  const options2 = [
    'CBR', 'OPTION 1', 'OPTION 2','OPTION 3'
   ];
   const defaultOption2 = options2[0];
  const searchAlrt = (e) => {

    e.preventDefault();
    alert ("Searcing for account details  " + num)
       
  }
    return (    
      
        <div className="app">
        <div className="app__header">
        <header>Charter Account Number Verification Portal</header>
        </div>
        <div className="app__form">
        <form >
        <label className="form__label">
          Account Number:
          <input 
          className="acc__text" 
          value={num}  
          onChange={(e) =>setNum(e.target.value)} 
          name="name"  />
        </label>
        <div className="app__drop">
        <label>
          System:
        </label>
        <Dropdown className="app__dropdown" options={options1}  value={defaultOption1} placeholder="Select an option" />
        </div>
        <div className="app__drop" >
        <label>
          Market:
        </label>
        <Dropdown className="app__dropdown"  options={options2}  value={defaultOption2} placeholder="Select an option" />
        </div>
        <button  onClick={searchAlrt} disabled={!num} type="submit">Search Account</button>
      
      </form>
      
        </div>
        </div>
    )
}

export default AppC
