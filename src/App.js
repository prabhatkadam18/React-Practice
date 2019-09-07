import React from 'react';
import './App.css';

function a(){
  var arr=[];
  for(var i=0;i<100;i++){
    arr.push(<li> {i} </li>);
  }
  return arr;
}

function App() {
  return (
    <ul>
      {a()}
    </ul>
  );
}
export default App;