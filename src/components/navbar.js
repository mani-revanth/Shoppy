import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { PrimeIcons } from "primereact/api";
import { Menubar } from 'primereact/menubar';
import axios from 'axios';
import { UseUserAuth } from '../context/UserAuthContext';
import { Navbar, Nav, Container } from 'react-bootstrap';
//import {useNavigate} from "react-router-dom";

const MyMenu = (props) => {
  const navigate = useNavigate();
  //ref=useRef(null)


  const items = [
    {
      label: 'Home',
      icon: PrimeIcons.HOME,
      className: 'underline',
      command: () => { navigate('/home') }
    },
    {
      label: 'men',
      className: 'underline',
      command: () => { navigate("/men") }
    },
    {
      label: 'women',
      className: 'underline',
      command: () => { navigate("/women") }
    },
    {
      label: 'cart',
      className: 'underline',
      command: () => { navigate("/cart") }
    }
  ];

  let searchAndLogout = <div>
    <InputText placeholder="Search" type="text" />
  </div>

  return (
    <Menubar model={items} end={searchAndLogout} start={<img style={{ maxHeight: '3rem', maxWidth: '6rem' }} src="https://firebasestorage.googleapis.com/v0/b/shopify-authentication-15fd1.appspot.com/o/Shoppy%20logo.png?alt=media&token=ac0311a1-9ec1-46be-8ac0-8db70fb9dc52"></img>} />
  );
}


let flag = 1;


const MyNavBar = () => {


  let user = localStorage.getItem("currentUserMail");

  let { logout } = UseUserAuth();
  const navigation = useNavigate();
  const [cart_length, set_cart_length] = useState("0");
  const [mail, setMail] = useState(user);
  //let mail=user.email;
  const handleSignout = () => {
    try {
      logout();
      navigation("/");
    } catch (err) {
      alert(err.message);
    }
  }
  const funny = () => {
    //console.log(abcdefg);
    axios.post("http://localhost:5000/get_length_of_cart", { name: `${user}` }).then((res) => {
      set_cart_length(res.data);
    })
  }
  useEffect(() => {
    setInterval(() => {
      funny();
    }, 100);
  }, []);
  return (
    <Navbar collapseOnSelect expand="lg" style={{ height: '10vh', backgroundColor: '#FA9884', fontSize: '1.5rem', borderBottom: '1px solid black', width: '100%', paddingRight: '0' }}>
      <Container fluid style={{ margin: 0, width: '100%', marginRight: 0 }}>
        <Navbar.Brand style={{ height: '80%', textDecoration: 'none' }}>
          <img src="https://firebasestorage.googleapis.com/v0/b/shopify-authentication-15fd1.appspot.com/o/shoppy-low-resolution-logo-white-on-transparent-background.svg?alt=media&token=a7c466ad-21ed-48cd-a453-807275408dda&_gl=1*eyir74*_ga*MTkyNTUwNTU2NS4xNjg1MTc2MTAx*_ga_CW55HF8NVT*MTY4NjU3MjA2Ny45LjEuMTY4NjU3MjE4MS4wLjAuMA.." style={{ height: '9vh', }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse style={{ backgroundColor: '#FA9884', width: '100%' }} id="responsive-navbar-nav">
          <Nav className="me-auto">
            <a ref={el => { if (el) { el.style.setProperty('text-decoration', 'none', 'important') } }} href="/home" className='underline' style={{ color: 'white', textDecoration: 'none' }} onMouseOver={(e) => { e.target.style.color = "#40128B"; e.target.style.transition = "width 2s,height 2s" }} onMouseOut={(e) => { e.target.style.color = "white"; e.target.style.fontSize = '1.5rem'; }}>home</a>
            <a ref={el => { if (el) { el.style.setProperty('text-decoration', 'none', 'important') } }} href="/men" className='underline' style={{ color: 'white', textDecoration: 'none' }} onMouseOver={(e) => { e.target.style.color = "#40128B"; e.target.style.transition = "width 2s,height 2s" }} onMouseOut={(e) => { e.target.style.color = "white"; e.target.style.fontSize = '1.5rem'; }}>men</a>
            <a ref={el => { if (el) { el.style.setProperty('text-decoration', 'none', 'important') } }} href="/women" className='underline' style={{ color: 'white', textDecoration: 'none' }} onMouseOver={(e) => { e.target.style.color = "#40128B"; e.target.style.transition = "width 2s,height 2s" }} onMouseOut={(e) => { e.target.style.color = "white"; e.target.style.fontSize = '1.5rem'; }}>women</a>
            {user.email == "ch.m.s.revanth@gmail.com" ? null :
              <a ref={el => { if (el) { el.style.setProperty('text-decoration', 'none', 'important') } }} href="/cart" className='underline' style={{ color: 'white', textDecoration: 'none' }} onMouseOver={(e) => { e.target.style.color = "#40128B"; e.target.style.transition = "width 2s,height 2s" }} onMouseOut={(e) => { e.target.style.color = "white"; e.target.style.fontSize = '1.5rem'; }}>cart({cart_length})</a>
            }
            {
              user.email != "ch.m.s.revanth@gmail.com" ? null :
                <a ref={el => { if (el) { el.style.setProperty('text-decoration', 'none', 'important') } }} href="/billing" className='underline' style={{ color: 'white', textDecoration: 'none' }} onMouseOver={(e) => { e.target.style.color = "#40128B"; e.target.style.transition = "width 2s,height 2s" }} onMouseOut={(e) => { e.target.style.color = "white"; e.target.style.fontSize = '1.5rem'; }}>bills</a>
            }
          </Nav>
          <Nav>
            <Nav.Link ref={el => { if (el) { el.style.setProperty('text-decoration', 'none', 'important') } }} className='underline' style={{ color: 'white', }} onMouseOver={(e) => { e.target.style.color = "#40128B"; e.target.style.transition = "width 2s,height 2s" }} onMouseOut={(e) => { e.target.style.color = "white"; e.target.style.fontSize = '1.5rem'; }}>{user}</Nav.Link>
            <Nav.Link ref={el => { if (el) { el.style.setProperty('text-decoration', 'none', 'important') } }} onClick={(e) => { e.preventDefault(); handleSignout(); }} className='underline' style={{ color: 'white', }} onMouseOver={(e) => { e.target.style.color = "#40128B"; e.target.style.transition = "width 2s,height 2s" }} onMouseOut={(e) => { e.target.style.color = "white"; e.target.style.fontSize = '1.5rem'; }}>logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default MyNavBar;

export { MyMenu };