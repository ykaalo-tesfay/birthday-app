import './App.css';
import Profile from './Profile';
import data from './Data'
import React from 'react';

function App() {
  const [datas,setDatas]= React.useState(data)

  function delet(){
   setDatas([])
  }
  return (
    <div className="App">
      <h1>{datas.length>0 ? 'birthday today': 'no birthday today'}</h1>
      <Profile datas={datas}/>
      <button onClick={delet}>clean all</button>
    </div>
  );
}

export default App;
