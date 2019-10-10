import React from 'react';
export default function(props){
  return(
    <input id={props.id} placeholder={props.place} value={props.value} onChange={props.onChange}/>
  )
}