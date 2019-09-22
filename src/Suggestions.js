import React,{Component} from 'react'
import Information from './Information.js'

const Suggestions =(props)=>{

  const Item = Information.filter((data)=>{
    return  data.name.toLowerCase().includes(props.result.toLowerCase())
  }).map((data)=>{
    return(
      <div className="tags-dropdown" key={data.name} onClick={props.setDropDowns}>
        <input type="hidden" value={data.name} />
        {data.name}
      </div>
    )
  })
  return Item;

}

export default Suggestions
