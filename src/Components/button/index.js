import React from 'react';
export default function (props) {
  return (
    <button id={props.id}  onClick={props.onClick}>{props.value}</button>
  )
}