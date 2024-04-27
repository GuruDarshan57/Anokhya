import React, { useState, useRef } from 'react'
import './Contact_Us.css'
import bimg from '../../Assets/bottom.png'
import emailjs from "@emailjs/browser"
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact_Us = () => {
    const [fname, Setfname] = useState("");
    const [lname, Setlname] = useState("");
    const [email, Setemail] = useState("");
    const [query, Setquery] = useState("");

    const [submitDisabled, setSubmitDisabled] = useState(false);
 
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        if (submitDisabled) {
            toast.info("Please wait before submitting again.");
            return;
        }

        emailjs
            .sendForm(
                "service_5dzkzqw",
                "template_fvjbvhq",
                form.current,
                "DR2ZtgA5eJIBUPWmm"
            )
            .then(
                (result) => {
                    toast.success("Message Sent Successfully !")
                    console.log("message sent");
                    setSubmitDisabled(true);
                    setTimeout(() => {
                        setSubmitDisabled(false);
                    }, 300000); 
                }
                ,
                (error) => {
                    toast.error("Error Sending The Message")
                    console.log("error sending the message")
                    setSubmitDisabled(true);
                    setTimeout(() => {
                        setSubmitDisabled(false);
                    }, 300000); 
                })

    }





    return (
        <div className="conts" id='Contact'>
            <ToastContainer position="top-right"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                bodyClassNameclassName="toastBody" />
            <div className="conts_con">
                <div className="conts_head">
                    CONTACT US
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="conts_name">
                        <input type="text" name="anok_fname" id="fname" placeholder='First Name' required />
                        <input type="text" name="anok_lname" id="lname" placeholder='Last Name' required />
                    </div>
                    <div className="conts_contact">
                        <input type="email" name="anok_email" id="email" placeholder='Email Address' required />
                        <input type="text" name="anok_ph_num" id="ph_num" placeholder='Phone Number' required />
                    </div>
                    <div className="conts_query">
                        <textarea name="anok_query" id="query" cols="300" placeholder='Enter Your Query Here ...' required></textarea>
                    </div>
                    <div className="conts_submit">
                        <input type="submit" value="SUBMIT" />
                    </div>
                </form>
                <div className="conts_links">
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