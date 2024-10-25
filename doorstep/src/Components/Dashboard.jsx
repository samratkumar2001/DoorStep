import React from 'react';
import {useState} from 'react';
import "../Components/Component_css/Dashboard.css";
// import ProfileIcon from "../Images/profileIcon.png";
import DashIcon from "../Images/dashboard.png";
import dasboardusers from "../Images/dasboard-users.png";
import dasboardproducts from "../Images/dasboard-products.png";
import dasboardinvoice from "../Images/dasboard-invoice.png";
import dasboardsales from "../Images/dasboard-sales.png";
import dasboardreturn from "../Images/dasboard-return.png";
import dasboardhelp from "../Images/dasboard-help.png";
const Dashboard = () => {
    const handleNavigationClick = (event) => {
        event.preventDefault();
    };

    const [state1, setState1] = useState(true);
    const [state2, setState2] = useState(false);
    const [state3, setState3] = useState(false);

    const handleClicknext1 = () => {
        setState1(false);
        setState2(true);
    };

    const handleClickprev2 = () => {
        setState2(false);
        setState1(true);
    };
    const handleClicknext2 = () => {
        setState2(false);
        setState3(true);
    };

    const handleClickprev3 = () => {
        setState3(false);
        setState2(true);
    };
    

   

    
    return (
        <>
            <div className='dash-container'>

                <div className='dash-inner-container'>
                    <div className="side-nav">
                        <ul className='side-nav-options'>
                            <li>Dashboard</li>
                            <li>Users</li>
                            <li>Products</li>
                            <li>Invoices</li>
                            <li>Orders</li>
                            <li>Message</li>
                            <li>Notifications</li>
                            <li>Settings</li>
                            <li>Logout</li>
                        </ul>
                    </div>
                    <div className="dash-home">
                        <img src={DashIcon} />
                        <p>Dashboard</p>
                    </div>
                    <div className="dash-info">
                        <div className="left-small-box">
                            <div className="box">
                                <h3>Total Users</h3>
                                <img src={dasboardusers} alt='icon' />
                                <span>Active Users: 100</span>
                                <div className='growth'>
                                    <span>+ 98%</span>
                                    <span>Last Month</span>
                                </div>


                            </div>
                            <div className="box">
                                <h3>Total Sales</h3>
                                <img src={dasboardsales} alt='icon' />
                                <span>Total Sales: ₹100</span>
                                <div className='growth'>
                                    <span>+ 81%</span>
                                    <span>Last Month</span>
                                </div>
                            </div>

                            
                            <div className="box">
                                <h3>Available Products</h3>
                                <img src={dasboardproducts} alt='icon' />
                                <span>Products Available: 10</span>
                                <div className='growth'>
                                    <span>-98%</span>
                                    <span>Last Month</span>
                                </div>
                            </div>
                            <div className="box">
                                <h3>Return Products</h3>
                                <img src={dasboardreturn} alt='icon' />
                                <span>Return: 19</span>
                                <div className='growth'>
                                    <span>- 98%</span>
                                    <span>Last Month</span>
                                </div>
                            </div>
                            <div className="box">
                                <h3>Invoices</h3>
                                <img src={dasboardinvoice} alt='icon' />
                                <span>Invoice Generated: 1000</span>
                                <div className='growth'>
                                    <span>+ 98%</span>
                                    <span>Last Month</span>
                                </div>
                            </div>
                            <div className="box">
                                <h3>Customer Query</h3>
                                <img src={dasboardhelp} alt='icon' />
                                <span>Query Request: 100</span>
                                <div className='growth'>
                                    <span>+ 9%</span>
                                    <span>Last Month</span>
                                </div>
                            </div>
                        </div>
                        <div className="right-big-box">
                            <nav>
                                <div>Product Details</div>
                                <div className='mid-nav'>Upload Images</div>
                                <div>Provider Details</div>
                            </nav>
                            
                            <div className='right-big-box-sections'>
                            { state1 &&(
                                <div className='right-big-box-sections-section'>
                                    <h3>Product Details</h3>
                                    
                                    <label>Service Name</label>
                                    <div>
                                        <input type='text' placeholder='enter name'/>
                                    </div>
                                    <label>Location</label>
                                    <div>
                                        <input type='text' placeholder='enter location'/>
                                    </div>
                                    <label>Service Cost</label>
                                    <div>
                                        <input type='text' placeholder='enter cost'/>
                                    </div>

                                    <button type='button' id='product-nxt' onClick={handleClicknext1}>NEXT</button>
                                </div>)}


                                { state2 &&(<div className='right-big-box-sections-section'>
                                    <h3>Upload Images</h3>
                                    
                                    <label>Upload Image 1</label>
                                    <div>
                                        <input type='file'/>
                                    </div>
                                    <label>Upload Image 2</label>
                                    <div>
                                    <input type='file'/>
                                    </div>
                                    <label>Upload Image 3</label>
                                    <div>
                                    <input type='file'/>
                                    </div>
                                    <button type='button' id='upload-prev' onClick={handleClickprev2}>BACK</button>
                                    <button type='button' id='upload-nxt' onClick={handleClicknext2}>NEXT</button>
                                    
                                </div>)}

                                { state3 &&(<div className='right-big-box-sections-section'>
                                    <h3>Provider Details</h3>
                                    
                                    <label>Provider Email</label>
                                    <div>
                                        <input type='email' placeholder='enter email'/>
                                    </div>
                                    <label>Phone No.</label>
                                    <div>
                                        <input type='text' placeholder='enter phone no'/>
                                    </div>
                                    <label>Location</label>
                                    <div>
                                        <input type='text' placeholder='enter location'/>
                                    </div>
                                    <button type='button' id='provider-prev' onClick={handleClickprev3}>BACK</button>
                                    <button type='button'>SUBMIT</button>
                                    
                                </div>)}
                            

                            </div>

                            
                        </div>
                    </div>
                </div>

            </div>
            <div className='order-details'>
                <h3>Order Details</h3>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Order Id</th>
                            <th>Order Date</th>
                            <th>Customer Name</th>
                            <th>Customer Email</th>
                            <th>Payment Status</th>
                            <th>Payment Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#45012</td>
                            <td>30/07/2024</td>
                            <td>Parthib Pal</td>
                            <td>palparthib97@gmail.com</td>
                            <td>Successfull</td>
                            <td>2110</td>
                        </tr>
                        <tr>
                            <td>#45012</td>
                            <td>30/07/2024</td>
                            <td>Parthib Pal</td>
                            <td>palparthib97@gmail.com</td>
                            <td>Successfull</td>
                            <td>2110</td>
                        </tr>
                        <tr>
                            <td>#45012</td>
                            <td>30/07/2024</td>
                            <td>Parthib Pal</td>
                            <td>palparthib97@gmail.com</td>
                            <td>Successfull</td>
                            <td>2110</td>
                        </tr>
                        <tr>
                            <td>#45012</td>
                            <td>30/07/2024</td>
                            <td>Parthib Pal</td>
                            <td>palparthib97@gmail.com</td>
                            <td>Successfull</td>
                            <td>2110</td>
                        </tr>
                        <tr>
                            <td>#45012</td>
                            <td>30/07/2024</td>
                            <td>Parthib Pal</td>
                            <td>palparthib97@gmail.com</td>
                            <td>Successfull</td>
                            <td>2110</td>
                        </tr>
                        <tr>
                            <td>#45012</td>
                            <td>30/07/2024</td>
                            <td>Parthib Pal</td>
                            <td>palparthib97@gmail.com</td>
                            <td>Successfull</td>
                            <td>2110</td>
                        </tr>
                        <tr>
                            <td>#45012</td>
                            <td>30/07/2024</td>
                            <td>Parthib Pal</td>
                            <td>palparthib97@gmail.com</td>
                            <td>Successfull</td>
                            <td>2110</td>
                        </tr>
                        <tr>
                            <td>#45012</td>
                            <td>30/07/2024</td>
                            <td>Parthib Pal</td>
                            <td>palparthib97@gmail.com</td>
                            <td>Successfull</td>
                            <td>2110</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </>
    )
}
export default Dashboard;