import React from 'react'
import { Element } from 'react-scroll'
import { IconButton } from "@mui/material"
import {Instagram,LinkedIn,GitHub,WhatsApp} from "@mui/icons-material"
import './ContactContainer.css'

const ContactContainer = () => {
  return (
    <Element className="contact" id= "Contact">
         <h1>Contact</h1>
        <div className="contact__Container">
            <p>Email : <span>siddiqdec23@gmail.com </span>
            </p>
            <p>
                 Github Username : <span>SID-DIQ</span>
            </p>
            <div className="contact__icons">
                <a href= "https://www.linkedin.com/in/mohamed-siddiq-m-154682225/">
                    <IconButton>
                        <LinkedIn />
                    </IconButton>
                </a>

                <a href= "https://github.com/SID-DIQ">
                    <IconButton>
                        <GitHub />
                    </IconButton>
                </a>

                <a href= "https://www.instagram.com/_._.siddiq._._/">
                    <IconButton>
                        <Instagram />
                    </IconButton>
                </a>

                <a href= "https://wa.me/9087377981">
                    <IconButton>
                        <WhatsApp />
                    </IconButton>
                </a>
            </div>
        </div>
    </Element>
  )
}
export default ContactContainer