import React from 'react'
import './ActualComponent_css/PopupcardContents.css'
import Review1 from '../../Images/Review-1.jpg'

const PopupcardContents = (person) => {
    return (
        <>
            <div className='popupcardcontents-container'>
                <div className='popupcardcontents-dp'>
                    <img src={person.img}/>
                </div>
                <div className='popupcardcontents-data'>
                    <span className='name'>{person.name}</span>
                    {/* <span className='phoneno'><b>Phone No.</b> {person.phone}</span> */}
                    <span className='loaction'><b>Service Location:</b> {person.location}</span>
                    <div className='sales-data-conatiner'>
                        <div className='total-sales'>
                            <div>Total Sales</div>
                            <div>{person.salesdata}</div>
                        </div>
                        <div className='rating'>
                            <div>Rating</div>
                            <div>{person.rating}</div>
                        </div>
                        <div className='member'>
                            <div>Member Since</div>
                            <div>{person.joiningdate}</div>
                        </div>
                    </div>
                    <div className='popupcardcontents-btn'>
                        <button className='call'>Call Now</button>
                        <button className='book'>Book Now</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default PopupcardContents