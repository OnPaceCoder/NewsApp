import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import './App.css';
import NavBar from './Component/NavBar';
import React, { Component } from 'react'
import News from './Component/News';

export default class App extends Component {

    apiKey = process.env.REACT_APP_USE_YOUR_OWN_API


  render() {
    return (
      <div>
        <BrowserRouter>
        <NavBar/>
        
        <Routes>
      <Route path="/general" element={<News key="general" apiKey={this.apiKey} category="general"/>}></Route>
      <Route path="/business" element={<News key="business" apiKey={this.apiKey} category="business"/>}></Route>
      <Route path="/entertainment" element={<News apiKey={this.apiKey} key="entertainment" category="entertainment"/>}></Route>
      <Route path="/health" element={<News key="health" apiKey={this.apiKey} category="health"/>}></Route>
      <Route path="/science" element={<News  key="science"apiKey={this.apiKey} category="science"/>}></Route>
      <Route path="/technology" element={<News key="technology" apiKey={this.apiKey} category="technology"/>}></Route>
      <Route path="/sports" element={<News  key="sports" apiKey={this.apiKey}  category="sports"/>}></Route>
     
    </Routes>
        </BrowserRouter>
      </div>
    )
  }
}



