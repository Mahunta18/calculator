import React from 'react'
import {BrowserRouter as Router, Route, Routes, } from 'react-router-dom'
import Menu from './component/Menu'
import Home from './component/Home'
import BMICalc from './component/BMICalc'
import EMICalc from './component/EMICalc'
import MathCalc from './component/MathCalc'
import AgeCalculator from './component/AgeCalculator'
import Pnf from './component/Pnf'



export default function App(props) {
  return (
    <Router>
              <Menu/>
              <Routes>
                  <Route path={`/`} element = {<Home/>} />
                  <Route path={`/home`} element = {<Home/>} />
                  <Route path={`/bmi`} element = {<BMICalc/>} />
                  <Route path={`/emi`} element = {<EMICalc/>} />
                  <Route path={`/math`} element = {<MathCalc/>} />
                  <Route path={`/age`} element = {<AgeCalculator/>} />
                  <Route path={`/*`} element = {<Pnf/>} />
              </Routes>
    </Router>
  )
}

