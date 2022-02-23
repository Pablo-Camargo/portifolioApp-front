import React from "react";
import './Footer.css'
//import { Container,Row, Col } from "react-bootstrap";

export default function Footer(){
  return(
    <footer>
      <a href="#" className="logoFooter">Pablo</a>
      <ul className="permaLinks">
        <li className="">
          <a href="#" className="">Home</a>
          </li>
          <li className="">
          <a href="#about" className="">About</a>
          </li>
          <li className="">
          <a href="#testimonial" className="">Testimonial</a>
          </li>
          <li className="">
          <a href="#contact" className="">Contact</a>
        </li>
      </ul>
    </footer>
  )

}