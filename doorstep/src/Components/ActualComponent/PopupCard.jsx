import React, {useState} from 'react'
import './ActualComponent_css/PopupCard.css'
import PopupcardContents from './PopupcardContents'
import servicepopuplogo from '../../Images/service-popup-logo.png'

const PopupCard = (id) => {

  

  return (

    <>
      <div className='popupcard-container'>
        <div className='popupcard-heading'>
          <img src={servicepopuplogo}/>
          <h2>Services Providers List</h2>
        </div>
        <div className='popupcard-content'>
          <PopupcardContents img={"/images/Samrat.jpg"} name={'Samrat Kumar'} phone={'7980660633'} location={'Bally'} salesdata={'660'} rating={'4.5'} joiningdate={'2001'}/>
          <PopupcardContents img={"/images/Softy.jpg"} name={'Softy Sharma'} phone={'6289992544'} location={'Hindmotor'} salesdata='532' rating='3.9' joiningdate='2002'/>
          <PopupcardContents img={"/images/Supriti.jpg"} name={'Supriti Das'} phone={'8697219189'} location={'Liluah'} salesdata='532' rating='4.1' joiningdate='2002'/>
          <PopupcardContents img={"/images/Parthib.jpg"} name={'Parthib Pal'} phone={'8777246552'} location={'Uttarpara'} salesdata='532' rating='4.9' joiningdate='2002'/>
          <PopupcardContents img={"/images/Rajdeep.jpg"} name={'Rajdeep Patra'} phone={'6290671725'} location={'Maniktala'} salesdata='532' rating='3.5' joiningdate='2002'/>
          
        </div>

      </div>

    </>
  )
}

export default PopupCard