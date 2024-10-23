import React from 'react'
import './Component_css/Admin.css'

import orders from '../Images/admin-orders.png';
import seller from '../Images/admin-seller.png';
import customers from '../Images/admin-customers.png';

const Admin = () => {
    return (
        <div className='admin-container'>

            {/* Admin Heading */}
            <div className='admin-heading'>Welcome to Admin Page</div>

            {/* Stats */}
            <div className='admin-stats-container'>
                <div className='admin-stats'>
                    <img src={customers}/>
                    <div>
                        <h2>10000+</h2>
                        <label>Customers</label>
                    </div>
                </div>

                <div className='admin-stats'>
                    <img src={seller}/>
                    <div>
                        <h2>500+</h2>
                        <label>Sellers</label>
                    </div>
                </div>

                <div className='admin-stats'>
                    <img src={orders}/>
                    <div>
                        <h2>13687+</h2>
                        <label>Orders</label>
                    </div>
                </div>
            </div>

            {/* Filter */}
            <div className='admin-filter'>
                <label>Select a Service - </label>
                <select className='admin-services'>
                    <option value="Plumbing Services">Plumbing Services</option>
                    <option value="Electrician Services">Electrician Services</option>
                    <option value="Cleaning Services">Cleaning Services</option>
                    <option value="Lawncare Services">Lawncare Services</option>
                    <option value="Painting Services">Painting Services</option>
                    <option value="Carpet Cleaning">Carpet Cleaning</option>
                    <option value="Handyman Services">Handyman Services</option>
                    <option value="Moving Services">Moving Services</option>
                    <option value="Computer Services">Computer Services</option>
                    <option value="Event Planning">Event Planning</option>
                    <option value="Photo Services">Photo Services</option>
                    <option value="Graphic Design">Graphic Design</option>
                    <option value="Web Developement">Web Developement</option>
                    <option value="Message Therapy">Message Therapy</option>
                    <option value="Tutor Services">Tutor Services</option>
                    <option value="Fitness Training">Fitness Training</option>
                    <option value="Message Therapy">Message Therapy</option>
                    <option value="Legal Services">Legal Services</option>
                    <option value="Interior Design">Interior Design</option>
                    <option value="Car Repair">Car Repair</option>
                    <option value="Personal Chef">Personal Chef</option>
                    <option value="Music Lessons">Music Lessons</option>
                    <option value="Wedding Planning">Wedding Planning</option>
                    <option value="Real Estate">Real Estate</option>
                    <option value="Pet Grooming">Pet Grooming</option>
                    <option value="Financial Planning">Financial Planning</option>
                    <option value="Language Lessons">Language Lessons</option>
                    <option value="Art Classes">Art Classes</option>
                    <option value="Personal Stylist">Personal Stylist</option>
                    <option value="Yoga Classes">Yoga Classes</option>
                </select>
            </div>

            {/* Table Data */}
            <div className='admin-table'>
                <table>
                    <tr>
                        <th>Service Name</th>
                        <th>Service Type</th>
                        <th>Seller Name</th>
                        <th>Location</th>
                        <th>Ph. No</th>
                        <th>Rating</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td>Art Classes</td>
                        <td>Art</td>
                        <td>Parthib Pal</td>
                        <td>Uttarpara, Hooghly</td>
                        <td>1234567890</td>
                        <td>4.3</td>
                        <td><button className='admin-action-btn'><i class="fa-solid fa-trash admin-action-icon"></i></button></td>
                    </tr>
                    <tr>
                        <td>Art Classes</td>
                        <td>Art</td>
                        <td>Parthib Pal</td>
                        <td>Uttarpara, Hooghly</td>
                        <td>1234567890</td>
                        <td>4.3</td>
                        <td><button className='admin-action-btn'><i class="fa-solid fa-trash admin-action-icon"></i></button></td>
                    </tr>
                    <tr>
                        <td>Art Classes</td>
                        <td>Art</td>
                        <td>Parthib Pal</td>
                        <td>Uttarpara, Hooghly</td>
                        <td>1234567890</td>
                        <td>4.3</td>
                        <td><button className='admin-action-btn'><i class="fa-solid fa-trash admin-action-icon"></i></button></td>
                    </tr>
                    <tr>
                        <td>Art Classes</td>
                        <td>Art</td>
                        <td>Parthib Pal</td>
                        <td>Uttarpara, Hooghly</td>
                        <td>1234567890</td>
                        <td>4.3</td>
                        <td><button className='admin-action-btn'><i class="fa-solid fa-trash admin-action-icon"></i></button></td>
                    </tr>
                    <tr>
                        <td>Art Classes</td>
                        <td>Art</td>
                        <td>Parthib Pal</td>
                        <td>Uttarpara, Hooghly</td>
                        <td>1234567890</td>
                        <td>4.3</td>
                        <td><button className='admin-action-btn'><i class="fa-solid fa-trash admin-action-icon"></i></button></td>
                    </tr>
                    <tr>
                        <td>Art Classes</td>
                        <td>Art</td>
                        <td>Parthib Pal</td>
                        <td>Uttarpara, Hooghly</td>
                        <td>1234567890</td>
                        <td>4.3</td>
                        <td><button className='admin-action-btn'><i class="fa-solid fa-trash admin-action-icon"></i></button></td>
                    </tr>
                    <tr>
                        <td>Art Classes</td>
                        <td>Art</td>
                        <td>Parthib Pal</td>
                        <td>Uttarpara, Hooghly</td>
                        <td>1234567890</td>
                        <td>4.3</td>
                        <td><button className='admin-action-btn'><i class="fa-solid fa-trash admin-action-icon"></i></button></td>
                    </tr>
                    <tr>
                        <td>Art Classes</td>
                        <td>Art</td>
                        <td>Parthib Pal</td>
                        <td>Uttarpara, Hooghly</td>
                        <td>1234567890</td>
                        <td>4.3</td>
                        <td><button className='admin-action-btn'><i class="fa-solid fa-trash admin-action-icon"></i></button></td>
                    </tr>
                </table>
            </div>
            
        </div>
    )
}

export default Admin