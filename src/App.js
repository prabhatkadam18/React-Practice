import React from 'react';
import './App.css';

let z = 'btn'


class App extends React.Component{
  v = 123;
  state={
    val: 123,
    todo: []
  }

  handleInput=(e)=>{
    const value = e.target.value;
    this.setState({val:value, b: 212});
  }

  clickHandler = (e)=>{
    const {val,todo} = this.state;
    todo.push(val);
    this.setState({todo:todo, val:""})
    console.log(todo);
  }

  deleteTodo = (e)=>{
    const {val,todo} = this.state;
    todo.splice(e.target.id,1);
    this.setState({todo:todo });
  }

  render(){
    const {val:a,todo} =  this.state;
    return (
      <div className='a'>
        <div><button onClick={this.clickHandler}>{z}</button>
          <input value={a} onChange={this.handleInput} />
        </div>

        <div>
          <ul>
            {
              todo.map((item,i)=>{
                return (
                  <div key={i}>
                    <li>{item}</li>
                    <button id={i} onClick={this.deleteTodo}>X</button>
                  </div>
                )
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;

