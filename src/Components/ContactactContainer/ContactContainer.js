import React from 'react'
import { Element } from 'react-scroll'
import { IconButton } from "@mui/material"
import {Instagram,LinkedIn,GitHub,WhatsApp,Email} from "@mui/icons-material"
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
                <a href= "https://www.linkedin.com/in/mohamed-siddiq-m-154682225/" target="_blank">
                    <IconButton>
                        <LinkedIn />
                    </IconButton>
                </a>

                <a href= "mailto:siddiqdec23@gmail.com" target="_blank">
                    <IconButton>
                        <Email />
                    </IconButton>
                </a>


                <a href= "https://github.com/SID-DIQ" target="_blank">
                    <IconButton>
                        <GitHub />
                    </IconButton>
                </a>

                <a href= "https://www.instagram.com/_._.siddiq._._/" target="_blank">
                    <IconButton>
                        <Instagram />
                    </IconButton>
                </a>

                <a href= "https://wa.me/9087377981" target="_blank">
                    <IconButton>
                        <WhatsApp />
                    </IconButton>
                </a>
            </div>
        </div>
            <footer>
                <p>&copy; 2023 BONE CHILLER
                    .</p>
                </footer>
    </Element>
  )
}
export default ContactContainer