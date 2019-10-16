import React from 'react';
import Button from '../button';
export default function (props) {
  return (
    <ul>
      {
        props.todo.map((item, i) => {
          return (
            <div key={i}>
              <li>{item}</li>
              <Button id={i} onClick={props.deleteTodo} value='X'></Button>
            </div>
          )
        })
      }
    </ul>
  )
}