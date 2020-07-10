import React from 'react'
import { Link } from "gatsby"

const Footer = () => (
    <div>
        <p className="footer-text">Created by Maria Recskova, 2020
        <Link className="footer-text" to="/legal">Legal Disclaimer</Link>
            <Link className="footer-text" to="/privacy">Privacy Policy</Link>
        </p>
    </div>
)
export default Footer;
