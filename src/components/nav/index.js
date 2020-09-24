import React from 'react';
import { Link } from "gatsby";
import { window } from "browser-monads";
import Logo from "../../images/Logo.png";
import "./nav.css";

const Nav = () => (
    <nav>
        <div className="nav__items">
            <a className="nav__item--left" href="/"><img src={Logo} alt="Yogic Nerd Logo" className="nav__item--logo" /></a>
            <div className="main-header">
                <p className="header" >Maria Recskova</p>
                <p className="sub-header">Web Developer | Yoga Teacher</p>
            </div>
            <Link className={window.location.href.indexOf("about") > 0 ? "nav__item--link active" : "nav__item--link"}
                to="/about">About Me</Link>
            <Link className={window.location.href.indexOf("projects") > 0 ? "nav__item--link active" : "nav__item--link"}
                to="/projects">Projects</Link>
            <Link className={window.location.href.indexOf("yoga") > 0 ? "nav__item--link active" : "nav__item--link"}
                to="/yoga">Yoga</Link>
            <Link className={window.location.href.indexOf("contact") > 0 ? "nav__item--link active" : "nav__item--link"}
                to="/contact">Contact</Link>
            <Link className={window.location.href.indexOf("blog") > 0 || window.location.href.indexOf("category") > 0 ? "nav__item--link active" : "nav__item--link"}
                to="/blog">Blog</Link>

        </div>
    </nav>
)

export default Nav;