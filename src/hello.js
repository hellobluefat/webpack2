import React from 'react'
import './main.css'
import Img from "../timg.jpg"
import $ from 'jquery'
export default class App extends React.Component{
  handleclick(){
    var a =$('.box')
    console.log(a)
  }
  render(){
    return(
      <div className='box' onClick={this.handleclick.bind(this)}>
        <h1>App</h1>
        <img src={Img}/>
      </div>
    )
  }
}
