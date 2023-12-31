import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
//import CarouselFadeExample from './components/carousel';
//import IndividualIntervalsExample from './components/carousel';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
//import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Chip, Switch, TextField } from "@mui/material";
import Tooltip from '@mui/material/Tooltip';
//import {Link} from 'react-router-dom';
import { UseUserAuth } from './context/UserAuthContext';
import { Navigate, Router, useLocation, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import Marquee from 'react-fast-marquee';
import { map } from '@firebase/util';
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { BsFillTelephoneFill, BsTwitter, BsFacebook } from 'react-icons/bs';
import { ImCross, ImLocation } from 'react-icons/im';
import { MdSmartphone } from 'react-icons/md';
import { GrMail } from 'react-icons/gr';
import {
  Routes,
  Route,
} from 'react-router-dom';
import ProtectedRoute from './components/protected';
import { Button as Button1 } from 'primereact/button';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import { warning } from '@remix-run/router';
import { Button } from 'react-bootstrap';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { Link } from 'react-router-dom';
import { Autocomplete } from '@mui/material';
import MyNavBar from './components/navbar';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";
//import Button from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faCircleXmark, faCross, faMarsStrokeRight, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Paper } from '@mui/material';
import {Modal} from '@mui/material';

//import { RedirectFunction } from 'react-router-dom';
//import {Card} from '@mui/material';
//import TextField from '@mui/material';
//import {useNavigate} from 'react-router-dom';


///////////////////////////////////////////////////////////CAROUSEL/////////////////////////////////////////////////////////////////////////////
function IndividualIntervalsExample({ }) {
  return (
    <Carousel>
      <Carousel.Item interval={1500}>
        <div style={{ backgroundColor: '#EEEEEE', width: '100%', minHeight: '20rem', height: 'auto', textAlign: 'center', justifyContent: 'center', alignItems: 'center', padding: '0', }}>
          <img
            style={{ width: '100%', height: 'auto', minHeight: '20rem', maxHeight: '35rem', borderRadius: '10px', boxShadow: '1px 1px 10px black' }}
            className="d-block w-100"
            src="https://media.centrepointstores.com/i/centrepoint/SP_Offers_Block02MAR18.jpg"
            alt="First slide"
          /></div>
        <Carousel.Caption>
          {/*//////////////////////////////////////////////////captions if required/////////////////////////////*/}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <div style={{ backgroundColor: '#EEEEEE', width: '100%', minHeight: '20rem', height: 'auto', textAlign: 'center', justifyContent: 'center', padding: '0', }}>
          <img
            style={{ width: '100%', height: 'auto', minHeight: '20rem', maxHeight: '35rem', borderRadius: '10px', boxShadow: '1px 1px 10px black' }}
            className="d-block w-100"
            src="https://media.centrepointstores.com/i/centrepoint/SP_Offers_Block10MAR18.jpg"
            alt="Second slide"
          /></div>
        <Carousel.Caption>
          {/*////////////////////////////////////////////////////////captions if required///////////////////////////////*/}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <div style={{ backgroundColor: '#EEEEEE', width: '100%', minHeight: '20rem', height: 'auto', textAlign: 'center', justifyContent: 'center', padding: '0' }}>
          <img
            style={{ width: '100%', height: 'auto', minHeight: '20rem', maxHeight: '35rem', borderRadius: '10px', boxShadow: '1px 1px 10px black' }}
            className="d-block w-100"
            //src="https://assets.ajio.com/cms/AJIO/MOBILE/18022023-UHP-M-TopBanner-P6-Arrow-Min40.jpg"
            src="https://assetscdn1.paytm.com/images/catalog/view_item/784753/1617186512494.jpg?imwidth=480&impolicy=hq"
            alt="Third slide"
          /></div>
        <Carousel.Caption>
          {/*/////////////////////////////////////////////////////////////////captions if requirde////////////////////////////////*/}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <div style={{ backgroundColor: '#EEEEEE', width: '100%', minHeight: '20rem', height: 'auto', textAlign: 'center', justifyContent: 'center', padding: '0' }}>
          <img
            style={{ width: '100%', height: 'auto', minHeight: '20rem', maxHeight: '35rem', borderRadius: '10px', boxShadow: '1px 1px 10px black' }}
            className="d-block w-100"
            src="https://media.centrepointstores.com/i/centrepoint/SP_Offers_Block06MAR18.jpg"
            alt="Third slide"
          /></div>
        <Carousel.Caption>
          {/*/////////////////////////////////////////////////////////////////captions if requirde////////////////////////////////*/}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <div style={{ backgroundColor: '#EEEEEE', width: '100%', minHeight: '20rem', height: 'auto', textAlign: 'center', justifyContent: 'center', padding: '0' }}>
          <img
            style={{ width: '100%', height: 'auto', minHeight: '20rem', maxHeight: '35rem', borderRadius: '10px', boxShadow: '1px 1px 10px black' }}
            className="d-block w-100"
            //src="https://assets.ajio.com/cms/AJIO/MOBILE/18022023-UHP-M-TopBanner-P6-Arrow-Min40.jpg"
            src="https://media.centrepointstores.com/i/centrepoint/SP_Offers_Block08MAR18.jpg"
            alt="Third slide"
          /></div>
        <Carousel.Caption>
          {/*/////////////////////////////////////////////////////////////////captions if requirde////////////////////////////////*/}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <div style={{ backgroundColor: '#EEEEEE', width: '100%', minHeight: '20rem', height: 'auto', textAlign: 'center', justifyContent: 'center', padding: '0' }}>
          <img
            style={{ width: '100%', height: 'auto', minHeight: '20rem', maxHeight: '35rem', borderRadius: '10px', boxShadow: '1px 1px 10px black' }}
            className="d-block w-100"
            //src="https://assets.ajio.com/cms/AJIO/MOBILE/18022023-UHP-M-TopBanner-P6-Arrow-Min40.jpg"
            src="https://assetscdn1.paytm.com/images/catalog/view_item/787364/1617369686163.jpg?imwidth=480&impolicy=hq"
            alt="Third slide"
          /></div>
        <Carousel.Caption>
          {/*/////////////////////////////////////////////////////////////////captions if requirde////////////////////////////////*/}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
///////////////////////////////////////////////////////////CAROUSEL/////////////////////////////////////////////////////////////////////////////

let i = 0;
function Shopify() {
  const name1 = "Shopify.";
  const [name, setName] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setName(name1.substring(0, i));
      i = (i + 1) % 8;
    }, 400);
  }, [name]);
  return (
    <h1 style={{ color: 'white' }}>{name}</h1>
  )
}

let abcdefg = "bayya";

function CollapsibleExample() {
  let { user, logout } = UseUserAuth();
  abcdefg = user.email;
  const navigation = useNavigate();
  const [cart_length, set_cart_length] = useState("0");
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
    axios.post("http://localhost:5000/get_length_of_cart", { name: `${abcdefg}` }).then((res) => {
      set_cart_length(res.data);
    })
  }
  useEffect(() => {
    setInterval(() => {
      if (abcdefg != "ch.m.s.revanth@gmail.com")
        funny();
    }, 100);
  }, []);

  return (
    <Navbar collapseOnSelect expand="lg" style={{ height: '10vh', zIndex: '10', backgroundColor: '#150050', fontSize: '1.5rem', boxShadow: '5px 5px 5px black', width: '100hw' }}>
      <Container>
        <Navbar.Brand style={{ height: '100%', width: '16%', marginRight: '3%', textDecoration: 'none', color: 'white' }}>
          <h1>Shoppy</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse style={{ backgroundColor: '#150050' }} id="responsive-navbar-nav">
          <Nav className="me-auto" style={{ textDecoration: 'none' }}>
            <Link to="/home" className='underline' style={{ color: 'white', textDecoration: 'none' }} onMouseOver={(e) => { e.target.style.color = "#FFB3B3"; e.target.style.transition = "width 2s,height 2s" }} onMouseOut={(e) => { e.target.style.color = "white"; e.target.style.fontSize = '1.5rem'; }}>home</Link>
            <Link to="/men" className='underline' style={{ color: 'white', textDecoration: 'none' }} onMouseOver={(e) => { e.target.style.color = "#FFB3B3"; e.target.style.transition = "width 2s,height 2s" }} onMouseOut={(e) => { e.target.style.color = "white"; e.target.style.fontSize = '1.5rem'; }}>men</Link>
            <Link to="/women" className='underline' style={{ color: 'white', textDecoration: 'none' }} onMouseOver={(e) => { e.target.style.color = "#FFB3B3"; e.target.style.transition = "width 2s,height 2s" }} onMouseOut={(e) => { e.target.style.color = "white"; e.target.style.fontSize = '1.5rem'; }}>women</Link>
            {user.email == "ch.m.s.revanth@gmail.com" ? null :
              <Link to="/cart" className='underline' style={{ color: 'white', textDecoration: 'none' }} onMouseOver={(e) => { e.target.style.color = "#FFB3B3"; e.target.style.transition = "width 2s,height 2s" }} onMouseOut={(e) => { e.target.style.color = "white"; e.target.style.fontSize = '1.5rem'; }}>cart({cart_length})</Link>}
            {
              user.email != "ch.m.s.revanth@gmail.com" ? null :
                <Link to="/billing" className='underline' style={{ color: 'white', textDecoration: 'none' }} onMouseOver={(e) => { e.target.style.color = "#FFB3B3"; e.target.style.transition = "width 2s,height 2s" }} onMouseOut={(e) => { e.target.style.color = "white"; e.target.style.fontSize = '1.5rem'; }}>bills</Link>
            }
          </Nav>
          <Nav>
            <Link className='underline' style={{ color: 'white', }} onMouseOver={(e) => { e.target.style.color = "#FFB3B3"; e.target.style.transition = "width 2s,height 2s" }} onMouseOut={(e) => { e.target.style.color = "white"; e.target.style.fontSize = '1.5rem'; }}>{user.email}</Link>
            <Link onClick={(e) => { e.preventDefault(); handleSignout(); }} className='underline' style={{ color: 'white', }} onMouseOver={(e) => { e.target.style.color = "#FFB3B3"; e.target.style.transition = "width 2s,height 2s" }} onMouseOut={(e) => { e.target.style.color = "white"; e.target.style.fontSize = '1.5rem'; }}>logout</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


const add_new_card_men = (link, name) => {
  axios.post("http://localhost:5000/add_women_card", {
    card_name: `${name}`,
    card_image_src: `${link}`,
    products_array: [],
  }).then((res) => {
    if (res.data == "yes") {
      alert("new card added successfully");
      window.location.reload();
    }
  })
}



export default function Women_products() {
  let { user } = UseUserAuth();
  const [link, setLink] = useState("");
  const [name, setName] = useState("");
  const [men_cards_array, set_men_cards_arry] = useState([]);
  let navigate_to = useNavigate();
  useEffect(() => {
    axios.post("http://localhost:5000/get_women_cards", {}).then((res) => {
      set_men_cards_arry(res.data);
      //console.log(res.data);
    })
  }, []);
  return (
    <div>
      <MyNavBar />
      <div style={{ height: '90vh', overflowY: 'scroll' }}>
        <IndividualIntervalsExample />
        <div style={{ height: 'fit-content', backgroundColor: '#FA9884', width: '100%', paddingLeft: '5%', alignItems: 'center', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,22rem)', gridTemplateRows: 'repeat(auto-fit,19rem)', paddingBottom: '1%' }}>

          {
            men_cards_array.map((card, i) => {
              return (
                <div key={i} className="product_card" onClick={() => { navigate_to(`/women/${card._id}`, { state: { products: card.products_array } }) }} style={{ color: 'gainsboro', height: '15rem', margin: '1%', border: '3px solid black', backgroundImage: `url(${card.card_image_src})`, backgroundSize: 'cover', width: '20rem', justifyContent: 'center', textAlign: 'center', alignItems: 'center', flex: 1, paddingTop: '45%' }}>
                  <div className="ribbon">
                    <span className="ribbon5">{card.card_name}</span>
                  </div>
                </div>
              )
            })
          }

          {user.email == "ch.m.s.revanth@gmail.com" ? <div style={{ height: '80%', width: '80%', margin: '2rem', borderRadius: '10px', backgroundColor: 'gray', justifyContent: 'space-around', textAlign: 'center', alignItems: 'center', }}>
            <input type="text" style={{ marginTop: '25%', fontSize: '1rem', height: '10%', width: '80%', borderRadius: '10px' }} id="a11" placeholder="image link" onChange={(e) => { setLink(e.target.value) }} />
            <input type="text" style={{ marginTop: '25%', fontSize: '1rem', height: '10%', width: '80%', borderRadius: '10px' }} id="b11" placeholder="name" onChange={(e) => setName(e.target.value)} />
            <button style={{ backgroundColor: 'blue', borderRadius: '10px', marginTop: '3%' }} onClick={(e) => {
              e.preventDefault(); add_new_card_men(link, name);
              document.getElementById("a11").value = "";
              document.getElementById("b11").value = "";
            }}>add new card</button>
          </div> : null}
        </div>
        <div style={{ backgroundColor: '#EEEEEE', color: 'black', height: 'fit-content', width: '100%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,22rem)', justifyContent: 'center', alignItems: 'center', textAlign: 'center', paddingTop: '3%' }}>
          <div style={{ height: '100%', minwidth: '21rem', maxWidth: '100%', justifyContent: 'space-evenly', alignItems: 'center', padding: '3%', textAlign: 'center', }}>
            <h2>QUICK LINKS</h2>
            <p>home</p>
            <p>about</p>
            <p>shop</p>
            <p>contact</p>
          </div>
          <div style={{ height: '100%', minwidth: '21rem', maxWidth: '100%', justifyContent: 'space-evenly', alignItems: 'center', padding: '3%', textAlign: 'center', }}>
            <h2>EXTRA LINKS</h2>
            <p>login</p>
            <p>register</p>
            <p>cart</p>
            <p>others</p>
          </div>
          <div style={{ height: '100%', minwidth: '21rem', maxWidth: '100%', justifyContent: 'space-evenly', alignItems: 'center', padding: '3%', textAlign: 'center', }}>
            <h2>CONTACT INFO</h2>
            <p><MdSmartphone />+986-616-1137</p>
            <p><BsFillTelephoneFill />+998-559-8581</p>
            <p><GrMail />shopify@gmail.com</p>
            <p><ImLocation />vishakapatnam,India-400104</p>
          </div>
          <div style={{ height: '100%', minwidth: '21rem', maxWidth: '100%', justifyContent: 'space-evenly', alignItems: 'center', padding: '3%', textAlign: 'center', }}>
            <h2>FOLLOW US</h2>
            <p><BsFacebook />facebook</p>
            <p><BsTwitter />twitter</p>
            <p><AiFillLinkedin />linkedin</p>
            <p><AiFillInstagram />instagram</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const push_card_into_array = (name, link, des, cost, id1) => {
  axios.post("http://localhost:5000/push_cards_into_array", {
    id: `${id1}`,
    card_title: `${name}`,
    card_description: `${des}`,
    card_image_src: `${link}`,
    card_cost: cost,
    warning: " ",
    offer: 0,
    is_best_seller: 0,
  }).then((res) => {
    if (res.data == "yes")
      alert("card added succesfully");
  })
}

const delete_card_from_array = (id1, id2) => {
  axios.post("http://localhost:5000/remove_card_from_array_women", { main_id: id1, temp_id: id2 }).then((res) => {
    if (res.data == "yes") {
      alert("card removed succesfully");
      window.location.reload();
    }
  })
}


const remove_best_seller_women = (id) => {
  axios.post("http://localhost:5000/delete_card_bestsellerwomen", { id1: id }).then((res) => {
    if (res.data == "yes")
      alert("product was removed from best seller men");
  })
}


const update_best_sellerwomen = (id, x) => {
  axios.post("http://localhost:5000/update_card_bestsellerwomen", { id1: id, ...x }).then((res) => {
    if (res.data == "yes")
      alert("best seller men was updated succesfully");
  })
}

const add_best_seller_women = (id1, x) => {
  
  axios.post("http://localhost:5000/add_new_card_bestsellerwomen", {...x,id1:id1 }).then((res) => {
    if (res.data == "yes") {
      alert("product was added to best seller men");
    }
  })
}

const update_card_from_array = (id1, id2, x, i) => {
  axios.post("http://localhost:5000/update_women_product", { ...x, id1, id2, i }).then((res) => {
    if (res.data == "yes") {
      alert("product was updated succesfully");
    }
  })
}


{/*function Product_card_men(props){
  const [toggle,setToggle]=useState(false);
  const card=props.cardx;
  const user=props.userx;
  const [title,setTitle]=useState(card.card_title);
  const [des,setDes]=useState(card.card_description);
  const [cost,setCost]=useState(card.card_cost);
  const [offer,setOffer]=useState(card.offer);
  const [warning,setWarning]=useState(card.warning);
  //const id1=props.id;
  if(toggle==false)
  {
  return(
    <div className="product_card" style={{height:'25rem',width:'20rem',backgroundColor:'white',borderRadius:'10px',boxShadow:'1px 1px 10px black',justifyContent:'center',textAlign:'center',border:'5px solid black'}}>
            <img src={card.card_image_src} style={{width:'100%',height:'50%',borderTopRightRadius:'10px',borderTopLeftRadius:'10px',borderBottom:'5px solid black'}}></img>
            <h1>{card.card_title}</h1>
            <p>{card.card_description}</p>
            <p>cost : {card.card_cost}</p>
            {
              user.email=="ch.m.s.revanth@gmail.com" ?
              <button style={{height:'10%',width:'60%',backgroundColor:'green',borderRadius:'5px'}}
              onClick={()=>{setToggle(true)}}
              >edit</button>:
              <button style={{height:'10%',width:'60%',backgroundColor:'blue',borderRadius:'5px'}}
              onClick={(e)=>{
              e.preventDefault();
              axios.post("http://localhost:5000/add_item_to_cart",{
                name:`${user.email}`,
                title:`${card.card_title}`,
                cost:`${card.card_cost}`,
              }).then((res)=>{
                if(res.data=="yes")
                alert("item was added to cart succesfully");
              })
            }}
              >add to cart</button>
            }
    </div>
  )
  }
  else
  {
    return(
      <div className="product_card" style={{height:'25rem',width:'20rem',backgroundColor:'white',borderRadius:'10px',boxShadow:'1px 1px 10px black',justifyContent:'space-evenly',textAlign:'center',border:'5px solid black',padding:'5%'}}>
      <input type="text" style={{width:'100%'}} value={title} placeholder="name" onChange={(e)=>setTitle(e.target.value)}></input>
      <br/><br/>
      <input type="text" style={{width:'100%'}} value={des} placeholder="description" onChange={(e)=>setDes(e.target.value)}></input>
      <br/><br/>
      <input type="number" style={{width:'100%'}} value={cost} placeholder="cost" onChange={(e)=>setCost(e.target.value)}></input>
      <br/><br/>
      <input type="number" style={{width:'100%'}} value={offer} placeholder="offer" onChange={(e)=>setOffer(e.target.value)}></input>
      <br/><br/>
      <input type="text" style={{width:'100%'}} value={warning.trim()==null?"warning":warning} placeholder="warning" onChange={(e)=>setWarning(e.target.value)}></input>
      <div style={{display:'flex',justifyContent:'space-evenly',marginTop:'5%'}}>
      <button style={{height:'10%',width:'85%',backgroundColor:'gold',borderRadius:'5px',marginTop:'2%'}} onClick={()=>{
        let x={
          card_title:card.card_title,
          card_description:card.card_description,
          card_image_src:card.card_image_src,
          card_cost:card.card_cost,
          warning:card.warning,
          offer:card.offer,
          is_best_seller:1,
        }
        if(card.is_best_seller)
        x.is_best_seller=0;
        update_card_from_array(props.id,card._id,x,props.index);
        if(x.is_best_seller)
        add_best_seller_men(card._id,x);
        else
        remove_best_seller_man(card._id);
      }}>{`${card.is_best_seller ? "remove from best seller" :"add to best seller"}`}</button></div>
      <div style={{display:'flex',justifyContent:'center'}}>
      <button style={{height:'10%',width:'85%',backgroundColor:'blue',borderRadius:'5px',marginTop:'2%'}} onClick={()=>{
        let x={
          card_title:title,
          card_description:des,
          card_image_src:card.card_image_src,
          card_cost:cost,
          warning:warning,
          offer:offer,
          is_best_seller:card.is_best_seller,
        }
        update_card_from_array(props.id,card._id,x,props.index);
        if(card.is_best_seller==1)
        update_best_sellermen(card._id,x);
      }}>update</button>
      </div>
      <div style={{display:'flex',justifyContent:'space-evenly',marginTop:'5%'}}>
      <button style={{height:'10%',width:'40%',backgroundColor:'red',color:'white',borderRadius:'5px'}} onClick={(e)=>{
        e.preventDefault();
        delete_card_from_array(props.id,card._id);
        if(card.is_best_seller)
        remove_best_seller_man(card._id);
      }}>delete card</button>
      <button style={{height:'10%',width:'40%',backgroundColor:'green',borderRadius:'5px'}} onClick={()=>setToggle(false)}>edit</button>
      </div>
    </div>
    )
  }
}*/}

const GridItem = (props) => {
  const product = props.product;
  const id1 = props.id;
  const id2 = props.product._id;

  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [toggle1, setToggle1] = useState(false);

  const [images, setImages] = useState([]);
  const [themes, setThemes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [addingToggle1, setAddingToggle1] = useState(false);
  const [addingToggle2, setAddingToggle2] = useState(false);

  const [image, setImage] = useState("");
  const [theme, setTheme] = useState("");
  const [categorie, setCategorie] = useState("");

  const card = props.product;
  const user = props.user;
  const [title, setTitle] = useState(card.card_title);
  const [des, setDes] = useState(card.card_description);
  const [cost, setCost] = useState(card.card_cost);
  const [offer, setOffer] = useState(card.offer);
  const [warning, setWarning] = useState(card.warning);
  let options = ['IN STOCK', 'OUT OF STOCK', 'LOW STOCK'];
  
  const getSeverity = (product) => {
    switch (product.warning) {
      case 'IN STOCK':
        return 'success';

      case 'LOW STOCK':
        return 'warning';

      case 'OUT OF STOCK':
        return 'danger';

      default:
        return null;
    }
  };


  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <div style={{ backgroundColor: `${themes[i]}`, height: '3vh', width: '3vh', borderRadius: '50%', border: '1px solid black' }} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


  useEffect(() => {
    axios.post("http://localhost:5000/get_product", { _id: id2 }).then((res) => {
      setImages(res.data.images);
      setThemes(res.data.themes);
      setCategories(res.data.categories);
      setTitle(res.data.card_title);
      setDes(res.data.card_description);
      setCost(res.data.card_cost);
      setOffer(res.data.offer);
      setWarning(res.data.warning);
    })
  }, []);

  return (
    <div style={{height:'100%'}} onClick={() => {
      navigate(`/product/${id2}`);
    }}>
      <div className="p-4 border-1 surface-border surface-card border-round" style={{ width: '100%', height: '100%', overflow: 'scroll' }}>



        {toggle ?

          <div className="product_card" style={{ height: '100%', width: '100%', backgroundColor: 'white', justifyContent: 'space-evenly', textAlign: 'center', padding: '5%' }} onClick={(e) => { e.stopPropagation(); }}>
            {toggle1 ?



              <>

                <div style={{ height: '30vh', marginBottom: '5vh', width: '100%' }}>
                  {
                    (images.length == 0 || addingToggle1) ?


                      <div style={{ backgroundColor: 'white', height: 'fit-content', padding: '2%', border: '1px solid grey', borderRadius: '10px', marginBottom: '3%' }}>
                        <TextField style={{ width: '100%', marginBottom: '2%' }} label="image" value={image} onChange={(e) => { setImage(e.target.value); }} />
                        <TextField style={{ width: '100%', marginBottom: '2%' }} label="theme" value={theme} onChange={(e) => { setTheme(e.target.value); }} />
                        <Button1 onClick={() => {
                          if (image.trim() == "" || theme.trim() == "") {
                            alert("fill all the fields completely");
                          }
                          else {
                            let abc = images;
                            abc.push(image);
                            let bcd = themes;
                            bcd.push(theme);
                            setImages(abc);
                            setThemes(bcd);
                            console.log(images);
                            console.log(themes);
                            setImage("");
                            setTheme("");
                          }
                        }}
                        >add</Button1>
                      </div>

                      :

                      <Slider {...settings}
                        nextArrow={<FontAwesomeIcon icon={faChevronRight} />}
                        prevArrow={<FontAwesomeIcon icon={faChevronLeft} />}
                      >
                        {
                          images.map((image, i) => {
                            return (
                              <div key={image + i}>
                                <div style={{ backgroundColor: `${themes[i]}`, width: '100%', position: 'absolute', height: '100%', top: 0, display: 'flex', justifyContent: 'flex-end', borderRadius: '5px' }}>
                                  <img src={image} style={{ height: '100%', position: 'absolute', width: 'auto', transform: 'translate(-50%)', left: '50%' }} />
                                  <Button1 style={{ height: 'fit-content', backgroundColor: '#F15A59', border: '1px solid white' }} onClick={() => {
                                    let abc = [...images];
                                    abc.splice(i, 1);
                                    let bcd = [...themes];
                                    bcd.splice(i, 1);
                                    console.log(abc);
                                    console.log(bcd);
                                    setImages(abc);
                                    setThemes(bcd);
                                  }}
                                  >delete</Button1>
                                </div>
                              </div>
                            )
                          })
                        }
                      </Slider>
                  }


                </div>

                {
                  images.length ?
                    <Button1 style={{ marginBottom: '3%' }} onClick={() => { setAddingToggle1(!addingToggle1) }}>{addingToggle1 ? "back" : "add"}</Button1> :
                    null
                }

                <Paper
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    listStyle: 'none',
                    backgroundColor: 'white',
                    marginBottom: '3%',
                    overflow: 'scroll',
                    maxHeight: '20vh',
                    p: 0.5,
                  }}
                >
                  {
                    categories.map((categorie, i) => {
                      return (
                        <Chip key={i} style={{ margin: '2%' }} label={categorie} onDelete={() => {
                          let abc = [...categories];
                          abc.splice(i, 1);
                          setCategories(abc);
                        }} />
                      )
                    })
                  }
                </Paper>

                <div style={{ backgroundColor: 'white', height: 'fit-content', padding: '2%', border: '1px solid black', display: 'flex', justifyContent: 'space-between', borderRadius: '5px' }}>
                  <TextField style={{ width: '100%', marginRight: '2%' }} label="categorie" value={categorie} onChange={(e) => { setCategorie(e.target.value); }} />

                  <Button1 style={{ minHeight: '100%' }} onClick={() => {
                    if (categorie.trim() != "") {
                      setCategories([...categories, categorie]);
                      //console.log(categories);
                      setCategorie("");
                    }
                    else
                      alert("fill all the fields");
                  }}
                  >Add</Button1>
                </div>

                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', marginTop: '3%' }}>
                  <Button1 onClick={() => { setToggle1(false) }}>back</Button1>
                  <Button1 onClick={() => {
                    axios.post("http://localhost:5000/update_product", { _id: id2, images: images, themes: themes, categories: categories }).then((res) => {
                      if (res.data == "yes") {
                        alert("product updated successfully");
                        window.location.reload();
                      }
                    })
                  }}>Update</Button1>
                </div>

              </>

              :


              <>
                <TextField type="text" style={{ width: '100%' }} value={title} label="name" onChange={(e) => setTitle(e.target.value)}></TextField>
                <br /><br />
                <TextField type="text" style={{ width: '100%' }} value={des} label="description" onChange={(e) => setDes(e.target.value)}></TextField>
                <br /><br />
                <TextField type="number" style={{ width: '100%' }} value={cost} label="cost" onChange={(e) => setCost(e.target.value)}></TextField>
                <br /><br />
                <TextField type="number" style={{ width: '100%' }} value={offer} label="offer" onChange={(e) => setOffer(e.target.value)}></TextField>
                <br /><br />
                <Autocomplete
                  value={warning}
                  inputValue={warning}
                  onInputChange={(event, newInputValue) => {
                    setWarning(newInputValue);
                  }}
                  options={options}
                  sx={{ width: '100%' }}
                  renderInput={(params) => <TextField {...params} label="warning" />}
                />
                <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '5%' }}>


                  <Button1 style={{ backgroundColor: 'gold', width: '100%' }} onClick={() => {
                    let x = {
                      card_title: card.card_title,
                      card_description: card.card_description,
                      card_image_src: card.card_image_src,
                      card_cost: card.card_cost,
                      warning: card.warning,
                      offer: card.offer,
                      is_best_seller: 1,
                    }
                    if (card.is_best_seller)
                      x.is_best_seller = 0;
                    update_card_from_array(props.id, card._id, x, props.index);
                    if (x.is_best_seller)
                      add_best_seller_women(card._id,x);
                    else
                      remove_best_seller_women(card._id);
                  }}>{`${card.is_best_seller ? "remove from best seller" : "add to best seller"}`}</Button1></div>
                <br />
                <div style={{ display: 'flex', justifyContent: 'center' }}>


                  <Button1 style={{ width: '100%', backgroundColor: 'blue' }} onClick={() => {
                    let x = {
                      card_title: title,
                      card_description: des,
                      card_image_src: card.card_image_src,
                      card_cost: cost,
                      warning: warning,
                      offer: offer,
                      is_best_seller: card.is_best_seller,
                    }
                    update_card_from_array(props.id, card._id, x, props.index);
                    if (card.is_best_seller == 1)
                      update_best_sellerwomen(card._id, x);
                  }}>update</Button1>
                </div>



                <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '5%' }}>
                  <Button1 style={{ width: '30%', backgroundColor: 'red' }} onClick={(e) => {
                    e.preventDefault();
                    delete_card_from_array(props.id, card._id);
                    if (card.is_best_seller)
                      remove_best_seller_women(card._id);
                  }}>delete</Button1>



                  <Button1 style={{ width: '30%', backgroundColor: 'green' }} onClick={() => setToggle(false)}>back</Button1>



                  <Button1 style={{ width: '30%', backgroundColor: '#F5F5F5', color: 'black' }} onClick={() => setToggle1(true)}>more...</Button1>
                </div>
              </>
            }

          </div>




          :







          <div>
            <div className="flex flex-wrap align-items-center justify-content-between gap-2">
              <div className="flex align-items-center gap-2">
                <i className="pi pi-tag"></i>
                <span className="font-semibold">for men</span>
              </div>
              <Tag value={product.warning} severity={getSeverity(product)}></Tag>
            </div>


            <div className="flex flex-column align-items-center gap-3 py-5" >
              <img className="w-9 shadow-2 border-round" src={product.card_image_src} alt={product.name} style={{ height: '40Vmin', width: '100%' }} />
              <h1 className="text-2xl font-bold">{product.card_title}</h1>
              <h3>{product.card_description}</h3>


            </div>
            <div className="flex align-items-center justify-content-between">
              <span className="text-2xl font-semibold">Rs.{product.card_cost}</span>


              {user == 'ch.m.s.revanth@gmail.com' ? <Button1 icon="pi pi-pencil" className='p-button-rounded' style={{ backgroundColor: '#AACB73' }} onClick={(e) => { e.stopPropagation(); setToggle(true) }}></Button1>

                :
                null
              }
              {/*<Button1 icon="pi pi-shopping-cart" className="p-button-rounded" disabled={product.warning === 'OUT OF STOCK'}
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    axios.post("http://localhost:5000/add_item_to_cart", { name: `${user}`, ...product }).then((res) => {
                      if (res.data == "yes")
                        alert("item was added to cart succesfully");
                    })
                  }}
                ></Button1>*/}
            </div>
          </div>
        }
      </div>
    </div>
  );
};






export function ProductDisplayWomen(props) {

  const location = useLocation();
  const { id } = useParams();
  const navigate=useNavigate();
  const [open,setOpen]=useState(false);
  const [image,setImage]=useState("");
  const [name,setName]=useState("");
  const [cost,setCost]=useState("");
  const [des,setDes]=useState("");


  const [products, setProducts] = useState(location.state ? location.state.products : null);
  const [layout, setLayout] = useState('grid');
  let user = localStorage.getItem("currentUserMail");

  useEffect(() => {
    //console.log(user);
    //console.log(id);
      axios.post("http://localhost:5000/get_sub_cards_women", { id: id }).then((res) => {
        setProducts(res.data);
        //console.log(res.data);
        //console.log(typeof(res.data));
        if(res.data)
        setProducts(res.data);
        else
        navigate("/",{replace:true});
      });
  }, []);

  const getSeverity = (product) => {
    return 'success';
  };

  const itemTemplate = (product, layout) => {
    //console.log(product.index);
    if (!product) {
      return;
    }

    return <GridItem product={product} user={user.email} />
  };


  return (
    <div style={{ width: '100hw', height: '100vh' }}>
      {(user=="ch.m.s.revanth@gmail.com")?
      <>
      <Modal open={open}>
          <div style={{height:'fit-content',display:'flex',flexDirection:'column',width:'100%',maxWidth:'30rem',minWidth:'20rem',position:'absolute',left:'50%',translate:'-50%',justifyContent:'space-evenly',padding:'3%',borderRadius:'5px',backgroundColor:'white'}}>
            
              <Button style={{position:'absolute',right:'0.5vh',top:'0.5vh',backgroundColor:'gray'}}>
                  <FontAwesomeIcon icon={faXmark}  style={{color:'white'}}/>
              </Button>
            
            <div style={{width:'100%',alignItems:'center',display:'flex',justifyContent:'center',marginBottom:'2%'}}>
            {
              (image.trim()!="")?
              <img src={image} style={{height:'20vh',width:'20vh',borderRadius:'10px'}}/>:
              null
            }
            </div>
            <TextField style={{marginBottom:'3%',width:'100%'}} label="image" onChange={(e)=>{setImage(e.target.value)}}/>
            <TextField style={{marginBottom:'3%',width:'100%'}} label="title" onChange={(e)=>{setName(e.target.value)}}/>
            <TextField style={{marginBottom:'3%',width:'100%'}} label="description" onChange={(e)=>{setDes(e.target.value)}}/>
            <TextField style={{marginBottom:'3%',width:'100%'}} type="number" label="cost" onChange={(e)=>{setCost(e.target.value)}}/>
            <Button style={{width:'100%',padding:'2%'}} onClick={(e)=>{
              if(image.trim()!="" && name.trim()!="" && des.trim()!="" && cost.trim()!="")
              {
                e.target.disabled="true";
                axios.post("http://localhost:5000/add_new_product_women",{id:id,card_title:`${name}`,card_description:`${des}`,card_image_src:`${image}`,card_cost:cost}).then((res)=>{
                  if(res.data=="yes")
                  {
                    alert("product was added succeesfully");
                    window.location.reload();
                  }
                })
              }
              else
              alert("please fill all the fields completely");
            }}><h1>Add product</h1></Button>
          </div>
      </Modal>
      <Button style={{position:'absolute',zIndex:'100',right:'1vh',bottom:'1vh',height:'10vh',width:'10vh',borderRadius:'50%'}} onClick={()=>{setOpen(true)}}>
          <FontAwesomeIcon icon={faPlus} style={{color: "#ffffff",}} />
      </Button>
      </>
      :
      null
      }
      
      
      <MyNavBar />
      
      
      
      <div style={{ overflowY: 'scroll', width: '100hw', height: '90vh' ,position:'relative' }}>
        <div className="card">
          {/*<DataView value={products} layout={layout} itemTemplate={itemTemplate}/>*/}
          <Box sx={{ flexGrow: 1, p: 2 }}>
            <Grid
              container
              spacing={2}
              sx={{
                borderTop: 'var(--Grid-borderWidth) solid',
                borderLeft: 'var(--Grid-borderWidth) solid',
                borderColor: 'divider',
                '& > div': {
                  borderRight: 'var(--Grid-borderWidth) solid',
                  borderBottom: 'var(--Grid-borderWidth) solid',
                  borderColor: 'divider',
                },
              }}
            >
              {
                products ?  
                products.map((product, i) => {
                  return (
                    <Grid key={i} {...{ xs: 12, sm: 6, md: 4, lg: 3 }} >
                      <GridItem product={product} user={user} id={id} index={i} />
                    </Grid>
                  )
                })
                :
                null
              }
            </Grid>
          </Box>
          {/*
            products.map((product,i)=>{
              return <GridItem key={i} product={product} user={user.email} id={props.id}/>
            })*/
          }
        </div>
      </div>
    </div>
  )
}


{/*function Cardproductscreen(props){
  const [name,setName]=useState("");
  const [link,setLink]=useState("");
  const [des,setDes]=useState("");
  const [cost,setCost]=useState(0);
  const [sub_cards_array,set_sub_cards_array]=useState([]);
  let {user}=UseUserAuth();
  useEffect(()=>{
    axios.post("http://localhost:5000/get_sub_cards_men",{id:props.id}).then((res)=>{
      set_sub_cards_array(res.data);
      //console.log(res.data);
      //if(res.data=="yes")
      //alert("card were added succesfully");
    })
  },[sub_cards_array]);
  return(
    <div>
      <CollapsibleExample/>
      <div style={{height:'90vh',backgroundColor:'white',width:'100%',overflowY:'scroll',overflowX:'hidden',justifyContent:'center',alignItems:'center',display:'grid',gridTemplateColumns:'repeat(auto-fit,30rem)'}}>


    {
      sub_cards_array.map((card,i)=>{
        return(
          <Product_card_men key={i} cardx={card} userx={user} id={props.id} index={i}/>
        )
      })
    }


      {user.email=="ch.m.s.revanth@gmail.com" ? <div style={{padding:'10%',height:'25rem',width:'20rem',margin:'2rem',borderRadius:'10px',backgroundColor:'gray',justifyContent:'space-evenly',textAlign:'center',alignItems:'center',}}>
                   <input type="text" id="a12" style={{margin:'6%'}}  placeholder="name" onChange={(e)=>{setName(e.target.value);}}/>
                   <input type="text" id="b12" style={{margin:'6%'}}  placeholder="image link" onChange={(e)=>{setLink(e.target.value)}}/>
                   <input type="text" id="c12" style={{margin:'6%'}}  placeholder="description" onChange={(e)=>{setDes(e.target.value);}}/>
                   <input type="number" id="d12" style={{margin:'6%'}}  placeholder="cost" onChange={(e)=>{setCost(e.target.value);}}/>
                   <button style={{backgroundColor:'blue',borderRadius:'10px',marginTop:'3%'}} onClick={(e)=>{e.preventDefault();
                   if(name.trim()!="" && link.trim()!="" && des.trim()!="" && cost.trim()!="")
                   {
                   push_card_into_array(name,link,des,cost,props.id);
                   setName("");
                   setCost("");
                   setDes("");
                   setLink("");
                   document.getElementById("a12").value="";  
                   document.getElementById("b12").value="";
                   document.getElementById("c12").value="";
                   document.getElementById("d12").value="";
                   }
                   else
                   alert("please fill all the fields");
                   }}>add new card</button>
                </div> :null}   
      </div>
    </div>
  )
}*/}

{/*export default function Routes_men_products(){
  const [temp_array,set_temp_array]=useState([]);
  useEffect(()=>{
    axios.post("http://localhost:5000/get_men_cards",{}).then((res)=>{
      set_temp_array(res.data);
    })
  })
  return(
    <Routes>
      <Route exact path="/" element={<ProtectedRoute><Men_products/></ProtectedRoute>}/>
      {
        temp_array.map((card,i)=>{
          return(
            <Route key={i} exact path={`/${card._id+card.card_name}`} element={<ProtectedRoute><ProductDisplay id={`${card._id}`} /></ProtectedRoute>}/>
          )
        })
      }
    </Routes>
  )
}*/}