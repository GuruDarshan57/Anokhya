import React, { useState } from 'react'
import './Contact_Us.css'
import bimg from '../../Assets/bottom.png'

const Contact_Us = () => {
    const [fname, Setfname] = useState("");
    const [lname, Setlname] = useState("");
    const [email, Setemail] = useState("");
    const [query, Setquery] = useState("");
    return (
        <div className="conts">
            <div className="conts_con">
                <div className="conts_head">
                    CONTACT US
                </div>
                <form>
                    <div className="conts_name">
                        <input type="text" name="fname" id="fname" placeholder='First Name' />
                        <input type="text" name="lname" id="lname" placeholder='Last Name' />
                    </div>
                    <div className="conts_contact">
                        <input type="email" name="email" id="email" placeholder='Email Address' />
                        <input type="text" name="ph_num" id="ph_num" placeholder='Phone Number' />
                    </div>
                    <div className="conts_query">
                        <textarea name="query" id="query" cols="300" placeholder='Enter Your Query Here ...'></textarea>
                    </div>
                    <div className="conts_submit">
                        <input type="submit" value="SUBMIT" />
                    </div>
                </form>
                <div data-aos="zoom-in" className="conts_links">
                    <ul>
                        <li>
                            <a href="https://www.instagram.com" target='_blank'>
                                <i class="fab fa-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com" target='_blank'>
                                <i class="fab fa-youtube"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com" target='_blank'>
                                <i class="fab fa-facebook"></i>
                            </a>

                        </li>
                        <li>
                            <a href="https://www.linkedin.com" target='_blank'>
                                <i class="fab fa-linkedin"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="conts_img">
                    <img src={bimg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Contact_Us