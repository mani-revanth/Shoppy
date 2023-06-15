import React, { useState, useEffect, useRef } from 'react';
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
import { TextField } from "@mui/material";
import Tooltip from '@mui/material/Tooltip';
//import {Link} from 'react-router-dom';
import { UseUserAuth } from './context/UserAuthContext';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import Marquee from 'react-fast-marquee';
import { map } from '@firebase/util';
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { BsFillTelephoneFill, BsTwitter, BsFacebook } from 'react-icons/bs';
import { ImLocation } from 'react-icons/im';
import { MdSmartphone } from 'react-icons/md';
import { GrMail } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';
//import MyMenu from './components/navbar';
import MyNavBar from './components/navbar';



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



////////////////////////////////////////////////////////database handling functions//////////////////////////////////////////////////////////////

/*async function add_new_card_bestsellersmen(title,des,cost,imgsrc)
{
  await axios.post("http://localhost:5000/add_new_card_bestsellermen",{card_title:`${title}`,
  card_description:`${des}`,
  card_image_src:`${imgsrc}`,
  card_cost:`${cost}`,
  warning:" ",}).then((res)=>{
    if((res.data)=="yes")
    alert("new card was added succesfully");
  })
}*/


////////////////////////////////////////////////////////database handling functions//////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////CAROUSEL///////////////////////////////////////////

function IndividualIntervalsExample({ }) {
  return (
    <Carousel>
      <Carousel.Item interval={1500}>
        <div style={{ backgroundColor: '#EEEEEE', width: '100%', minHeight: '20rem', height: 'auto', textAlign: 'center', justifyContent: 'center', alignItems: 'center', padding: '0', }}>
          <img
            style={{ width: '100%', height: 'auto', minHeight: '20rem', maxHeight: '35rem', boxShadow: '1px 1px 10px black' }}
            className="d-block w-100"
            src="https://www.linkpicture.com/q/1676363627542.jpg"
            alt="First slide"
          /></div>
        <Carousel.Caption>
          {/*//////////////////////////////////////////////////captions if required/////////////////////////////*/}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <div style={{ backgroundColor: '#EEEEEE', width: '100%', minHeight: '20rem', height: 'auto', textAlign: 'center', justifyContent: 'center', padding: '0' }}>
          <img
            style={{ width: '100%', height: 'auto', minHeight: '20rem', maxHeight: '35rem', boxShadow: '1px 1px 10px black' }}
            className="d-block w-100"
            src="https://www.karrimor.com/images/marketing/karrimor-homepage-carousel-banner-desktop-27-01.jpg"
            alt="Third slide"
          /></div>
        <Carousel.Caption>
          {/*/////////////////////////////////////////////////////////////////captions if requirde////////////////////////////////*/}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <div style={{ backgroundColor: '#EEEEEE', width: '100%', minHeight: '20rem', height: 'auto', textAlign: 'center', justifyContent: 'center', padding: '0', }}>
          <img
            style={{ width: '100%', height: 'auto', minHeight: '20rem', maxHeight: '35rem', boxShadow: '1px 1px 10px black' }}
            className="d-block w-100"
            src="https://www.linkpicture.com/q/1676364745953.jpg"
            alt="Second slide"
          /></div>
        <Carousel.Caption>
          {/*////////////////////////////////////////////////////////captions if required///////////////////////////////*/}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <div style={{ backgroundColor: '#EEEEEE', width: '100%', minHeight: '20rem', height: 'auto', textAlign: 'center', justifyContent: 'center', padding: '0' }}>
          <img
            style={{ width: '100%', height: 'auto', minHeight: '20rem', maxHeight: '35rem', boxShadow: '1px 1px 10px black' }}
            className="d-block w-100"
            src="https://cdn11.bigcommerce.com/s-nkt4v7/images/stencil/original/carousel/414/Pink_Yellow_Illustration_Summer_Sale_Flyer_1640_600_px_2.png?c=2"
            alt="Third slide"
          /></div>
        <Carousel.Caption>
          {/*/////////////////////////////////////////////////////////////////captions if requirde////////////////////////////////*/}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <div style={{ backgroundColor: '#EEEEEE', width: '100%', minHeight: '20rem', height: 'auto', textAlign: 'center', justifyContent: 'center', padding: '0' }}>
          <img
            style={{ width: '100%', height: 'auto', minHeight: '20rem', maxHeight: '35rem', boxShadow: '1px 1px 10px black' }}
            className="d-block w-100"
            src="https://cdn11.bigcommerce.com/s-154ncqg253/images/stencil/original/image-manager/2208s-banners-hero-v2.gif?t=1662654759"
            alt="Third slide"
          /></div>
        <Carousel.Caption>
          {/*/////////////////////////////////////////////////////////////////captions if requirde////////////////////////////////*/}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <div style={{ backgroundColor: '#EEEEEE', width: '100%', minHeight: '20rem', height: 'auto', textAlign: 'center', justifyContent: 'center', padding: '0' }}>
          <img
            style={{ width: '100%', height: 'auto', minHeight: '20rem', maxHeight: '35rem', boxShadow: '1px 1px 10px black' }}
            className="d-block w-100"
            src="https://www.linkpicture.com/q/1676364956045.jpg"
            alt="Third slide"
          /></div>
        <Carousel.Caption>
          {/*/////////////////////////////////////////////////////////////////captions if requirde////////////////////////////////*/}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <div style={{ backgroundColor: '#EEEEEE', width: '100%', minHeight: '20rem', height: 'auto', textAlign: 'center', justifyContent: 'center', padding: '0' }}>
          <img
            style={{ width: '100%', height: 'auto', minHeight: '20rem', maxHeight: '35rem', boxShadow: '1px 1px 10px black' }}
            className="d-block w-100"
            src="https://strapi-catalog-migrated.s3.ap-south-1.amazonaws.com/Shehzada_Banner_d8e685f6d4.jpg"
            alt="Third slide"
          /></div>
        <Carousel.Caption>
          {/*/////////////////////////////////////////////////////////////////captions if requirde////////////////////////////////*/}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}



function IndividualIntervalsExample0({ }) {
  return (
    <Carousel>
      <Carousel.Item interval={1500}>
        <div style={{ backgroundColor: '#EEEEEE', width: '100%', minHeight: '20rem', height: 'auto', textAlign: 'center', justifyContent: 'center', alignItems: 'center', padding: '0', }}>
          <img
            style={{ width: '100%', height: 'auto', minHeight: '20rem', maxHeight: '35rem', borderRadius: '10px', boxShadow: '1px 1px 10px black' }}
            className="d-block w-100"
            src="https://www.linkpicture.com/q/1676363627542.jpg"
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
            src="https://www.linkpicture.com/q/1676364745953.jpg"
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
            src="https://cdn11.bigcommerce.com/s-154ncqg253/images/stencil/original/image-manager/2208s-banners-hero-v2.gif?t=1662654759"
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
            src="https://www.linkpicture.com/q/1676364956045.jpg"
            alt="Third slide"
          /></div>
        <Carousel.Caption>
          {/*/////////////////////////////////////////////////////////////////captions if requirde////////////////////////////////*/}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

///////////////////////////////////////////////////////CAROUSEL/////////////////////////////////////////////////////

{/*/////////////////////////////////////////////////////////////////NAVBAR/////////////////////////////////////
let abcdefg="bayya";
let flag=1;

function CollapsibleExample() {
  let {user}=UseUserAuth();
  const ref=useRef(null);
  abcdefg=user.email;
  let {logout}=UseUserAuth();
  const navigation =useNavigate();
  const [cart_length,set_cart_length]=useState("0");
  const [mail,setMail]=useState(`${user.email}`);
  //let mail=user.email;
  const handleSignout =()=>{
    try{
      logout();
      navigation("/");
    }catch(err){
      alert(err.message);
    }
  }
  const funny=()=>
  {
    //console.log(abcdefg);
    axios.post("http://localhost:5000/get_length_of_cart",{name:`${abcdefg}`}).then((res)=>{
      set_cart_length(res.data);
    })
  }
  useEffect(()=>{
    setInterval(()=>{
      if(abcdefg!="ch.m.s.revanth@gmail.com")
      {
      if(flag)
      {
        flag=0;
        axios.post("http://localhost:5000/add_new_cart",{user_name:user.email,cart_items:[]}).then((res)=>{
          if(res.data!="yes")
          flag=1;
        })
      }
      else
      funny();
      }
    },100);
  },[]);
  return (
    <Navbar collapseOnSelect expand="lg" style={{height:'10vh',backgroundColor:'#150050',fontSize:'1.5rem',boxShadow:'5px 5px 5px black',width:'100%'}}>
      <Container>
      <Navbar.Brand style={{height:'80%',textDecoration:'none'}}>
      <h1>Shoppy</h1>
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse style={{backgroundColor:'#150050'}} id="responsive-navbar-nav">
          <Nav className="me-auto">
            <a ref={el=>{if(el){el.style.setProperty('text-decoration','none','important')}}} href="/home" className='underline' style={{color:'white',textDecoration:'none'}} onMouseOver={(e)=>{e.target.style.color="#FFB3B3";e.target.style.transition="width 2s,height 2s"}}  onMouseOut={(e)=>{e.target.style.color="white";e.target.style.fontSize='1.5rem';}}>home</a>
            <a href="/men" className='underline' style={{color:'white',textDecoration:'none'}} onMouseOver={(e)=>{e.target.style.color="#FFB3B3";e.target.style.transition="width 2s,height 2s"}}  onMouseOut={(e)=>{e.target.style.color="white";e.target.style.fontSize='1.5rem';}}>men</a>
            <a href="/women" className='underline' style={{color:'white',textDecoration:'none'}} onMouseOver={(e)=>{e.target.style.color="#FFB3B3";e.target.style.transition="width 2s,height 2s"}}  onMouseOut={(e)=>{e.target.style.color="white";e.target.style.fontSize='1.5rem';}}>women</a>
            {user.email=="ch.m.s.revanth@gmail.com" ? null :
            <a href="/cart" className='underline' style={{color:'white',textDecoration:'none'}} onMouseOver={(e)=>{e.target.style.color="#FFB3B3";e.target.style.transition="width 2s,height 2s"}}  onMouseOut={(e)=>{e.target.style.color="white";e.target.style.fontSize='1.5rem';}}>cart({cart_length})</a>
            }
            {
              user.email!="ch.m.s.revanth@gmail.com" ?null:
              <a href="/billing" className='underline' style={{color:'white',textDecoration:'none'}} onMouseOver={(e)=>{e.target.style.color="#FFB3B3";e.target.style.transition="width 2s,height 2s"}}  onMouseOut={(e)=>{e.target.style.color="white";e.target.style.fontSize='1.5rem';}}>bills</a>
            }
          </Nav>
          <Nav>
            <Nav.Link  className='underline' style={{color:'white',}} onMouseOver={(e)=>{e.target.style.color="#FFB3B3";e.target.style.transition="width 2s,height 2s"}}  onMouseOut={(e)=>{e.target.style.color="white";e.target.style.fontSize='1.5rem';}}>{user.email}</Nav.Link>
            <Nav.Link  onClick={(e)=>{e.preventDefault();handleSignout();}}  className='underline' style={{color:'white',}} onMouseOver={(e)=>{e.target.style.color="#FFB3B3";e.target.style.transition="width 2s,height 2s"}}  onMouseOut={(e)=>{e.target.style.color="white";e.target.style.fontSize='1.5rem';}}>logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


///////////////////////////////////////////////////////////////////NAVBAR/////////////////////////////////////////////////////////////*/}


///////////////////////////////////////////////////////////////////BEST SELLERS FOR MEN///////////////////////////////////////////////////////



const delete_card_bestsellermen = async (card) => {
  console.log(card);
  await axios.post("http://localhost:5000/delete_card_bestsellermen", card).then((res) => {
    if ((res.data) == "yes")
      alert("card was deleted succesfully");
  })
}

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0.5 }
};

const boxVariant1 = {
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, y: -50 }
};


const Card_box1 = ({ children }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      className="box"
      ref={ref}
      variants={boxVariant1}
      initial="hidden"
      animate={control}
    >
      {children}
    </motion.div>
  );
}



const Card_box = ({ children }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      className="box"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    //style={{border:'2px solid black'}}
    >
      {children}
    </motion.div>
  );
}


function BestSellersForMen() {
  const [newlink, setNewlink] = useState("");
  const [cost, setCost] = useState("");
  const [des, setDes] = useState("");
  const [title, setTitle] = useState("");
  const [cards_array, setCardsarray] = useState([]);
  const [refresher, setRefresher] = useState(0);
  let { user } = UseUserAuth();
  useEffect(() => {
    axios.post("http://localhost:5000/get_cards_bestsellermen", {}).then((res) => {
      setCardsarray(res.data);
      //alert("cards set");
    })
  });
  return (
    <div id='best_seller_men' style={{ display: 'inline-flex', overflowX: 'scroll', scrollBehavior: 'smooth', height: 'fit-content' }}>
      {
        cards_array.map((abc, i) => {
          return (
            <Card_box key={i}>
              <div style={{ color: 'white', height: '25rem', width: '15rem', justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: 'transparent', borderRadius: '5px', margin: '0.5rem' }}>
                <img src={abc.card_image_src} style={{ height: '75%', width: '100%', border: '0.1px solid white', marginBottom: '2%' }}></img>
                <h4>{abc.card_title}.</h4>

                {/*

            <div style={{display:'flex',overflowX:'scroll'}}><p>{abc.card_description}</p></div>
            <h6>cost : {abc.card_cost}</h6>
            {(user.email=="ch.m.s.revanth@gmail.com"?
            <button   onClick={()=>{
              delete_card_bestsellermen(abc);
              axios.post("http://localhost:5000/get_cards_bestsellermen",{}).then((res)=>{
            setCardsarray(res.data);
            })
            }} style={{backgroundColor:'#393E46',borderRadius:'5px',color:'white',height:'15%',width:'80%'}}>delete</button>null:
            
            
            
            <button style={{backgroundColor:'#ABC270',borderRadius:'5px',color:'white',height:'10%',width:'80%'}}
            onClick={(e)=>{
              e.preventDefault();
              axios.post("http://localhost:5000/add_item_to_cart",{name:`${user.email}`,...abc}).then((res)=>{
                if(res.data=="yes")
                alert("item was added to cart succesfully");
              })
            }}
            >add to cart</button>)} 

            */}

              </div>
            </Card_box>
          )
        })
      }
      {/*user.email=="ch.m.s.revanth@gmail.com" ? <div style={{height:'20rem',width:'15rem',justifyContent:'space-evenly',alignItems:'center',backgroundColor:'white',borderRadius:'5px',padding:'1rem',margin:'0.5rem'}}>
       <input type="text" style={{margin:'1rem'}} id="a"  placeholder='title' onChange={(e)=>{setTitle(e.target.value)}}/>
       <input type="text" style={{margin:'1rem'}} id="b" placeholder='image link' onChange={(e)=>{setNewlink(e.target.value)}}/>
       <input type="text" style={{margin:'1rem'}} id="c" placeholder='description' onChange={(e)=>{setDes(e.target.value)}}/>
       <input type="text" style={{margin:'1rem'}} id="d" placeholder='cost' onChange={(e)=>{setCost(e.target.value)}}/>
       <button style={{backgroundColor:'blue',borderRadius:'5px'}} onClick={()=>{
        if((newlink.trim()=="" || cost.trim()=="" || des.trim()=="" || title.trim()==""))
        alert("all the fields should be filled");
        else
        {
          add_new_card_bestsellersmen(title,des,cost,newlink);
          document.getElementById("a").value="";
          document.getElementById("b").value="";
          document.getElementById("c").value="";
          document.getElementById("d").value="";
          axios.post("http://localhost:5000/get_cards_bestsellermen",{}).then((res)=>{
          setCardsarray(res.data);
          })
        //alert("avtundhi anniyaa");
        }
       }}>add card</button> 
    </div> : null*/}
    </div>
  )
}



///////////////////////////////////////////////////////////////////BEST SELLERS///////////////////////////////////////////////////////


async function add_new_card_bestsellerswomen(title, des, cost, imgsrc) {
  await axios.post("http://localhost:5000/add_new_card_bestsellerwomen", {
    card_title: `${title}`,
    card_description: `${des}`,
    card_image_src: `${imgsrc}`,
    card_cost: `${cost}`,
    warning: " ",
  }).then((res) => {
    if ((res.data) == "yes")
      alert("new card was added succesfully");
  })
}



const delete_card_bestsellerwomen = async (card) => {
  console.log(card);
  await axios.post("http://localhost:5000/delete_card_bestsellerwomen", card).then((res) => {
    if ((res.data) == "yes")
      alert("card was deleted succesfully");
  })
}



function BestSellersForWomen() {
  const [newlink, setNewlink] = useState("");
  const [cost, setCost] = useState("");
  const [des, setDes] = useState("");
  const [title, setTitle] = useState("");
  const [cards_array1, setCardsarray1] = useState([]);
  //const [refresher,setRefresher]=useState(0);
  let { user } = UseUserAuth();
  useEffect(() => {
    axios.post("http://localhost:5000/get_cards_bestsellerwomen", {}).then((res) => {
      setCardsarray1(res.data);
    })
  });
  return (
    <div id='best_seller_women' style={{ display: 'inline-flex', overflowX: 'scroll' }}>
      {
        cards_array1.map((abc, i) => {
          return (
            <Card_box key={i}>
              <div style={{ color: 'white', height: '25rem', width: '15rem', justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: 'transparent', borderRadius: '5px', margin: '0.5rem' }}>
                <img src={abc.card_image_src} style={{ height: '75%', width: '100%', marginBottom: '2%', border: '0.1px solid white' }}></img>
                <h4>{abc.card_title}.</h4>
                {/*<div style={{display:'flex',overflowX:'scroll'}}><p>{abc.card_description}</p></div>*/}
                <h6>cost : {abc.card_cost}</h6>
                {(user.email == "ch.m.s.revanth@gmail.com" ?/*<button   onClick={()=>{
              delete_card_bestsellerwomen(abc);
              axios.post("http://localhost:5000/get_cards_bestsellerwomen",{}).then((res)=>{
            setCardsarray1(res.data);
            })
            }} style={{backgroundColor:'#393E46',borderRadius:'5px',color:'white',height:'15%',width:'80%'}}>delete</button>*/null :
                  <button style={{ backgroundColor: '#ABC270', borderRadius: '5px', color: 'white', height: '10%', width: '80%' }}
                    onClick={(e) => {
                      e.preventDefault();
                      axios.post("http://localhost:5000/add_item_to_cart", { name: `${user.email}`, ...abc }).then((res) => {
                        if ((res.data == "yes"))
                          alert("item was added to your cart succesfully");
                      })
                    }}
                  >add to cart</button>)}
              </div>
            </Card_box>
          )
        })
      }
      {/*user.email=="ch.m.s.revanth@gmail.com" ? <div style={{height:'20rem',width:'15rem',justifyContent:'space-evenly',alignItems:'center',backgroundColor:'white',borderRadius:'5px',padding:'1rem',margin:'0.5rem'}}>
       <input type="text" style={{margin:'1rem'}} id="a1"  placeholder='title' onChange={(e)=>{setTitle(e.target.value)}}/>
       <input type="text" style={{margin:'1rem'}} id="b1" placeholder='image link' onChange={(e)=>{setNewlink(e.target.value)}}/>
       <input type="text" style={{margin:'1rem'}} id="c1" placeholder='description' onChange={(e)=>{setDes(e.target.value)}}/>
       <input type="text" style={{margin:'1rem'}} id="d1" placeholder='cost' onChange={(e)=>{setCost(e.target.value)}}/>
       <button style={{backgroundColor:'blue',borderRadius:'5px'}} onClick={()=>{
        if((newlink.trim()=="" || cost.trim()=="" || des.trim()=="" || title.trim()==""))
        alert("all the fields should be filled");
        else
        {
          add_new_card_bestsellerswomen(title,des,cost,newlink);
          document.getElementById("a1").value="";
          document.getElementById("b1").value="";
          document.getElementById("c1").value="";
          document.getElementById("d1").value="";
          axios.post("http://localhost:5000/get_cards_bestsellerwomen",{}).then((res)=>{
          setCardsarray1(res.data);
          })
        //alert("avtundhi anniyaa");
        }
       }}>add card</button> 
    </div> : null*/}
    </div>
  )
}

////////////////////////////////////////////////////////////////////BEST SELLER FOR WOMEN/////////////////////////////////////////////


export default function Home() {
  let user = localStorage.getItem("currentUserMail");
  const sideScroll = (
    element,
    speed,
    distance,
    step
  ) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
    }, speed);
  };
  const best_men = useRef(null);

  useEffect(() => {
    axios.post("http://localhost:5000/add_new_cart", { name: `${user}` }).then((res) => { });
  }, []);


  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <div style={{ height: '10vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <MyNavBar />
      </div>
      <div style={{ height: '90vh', width: '100p%', overflowY: 'scroll', overflowX: '-moz-hidden-unscrollable' }}>
        <IndividualIntervalsExample />



        <div style={{ backgroundColor: '#FA9884', height: 'fit-content', width: '100%' }}>
          <div style={{ height: '2rem', justifyContent: 'center', alignItems: 'center', color: 'black', textAlign: 'center' }}><h3>Best sellers for men</h3></div>
          <div style={{ position: 'relative', height: 'auto', justifyContent: 'center', textAlign: 'center', display: 'flex', overflowY: 'none', paddingLeft: '2rem', paddingRight: '2rem' }}>
            <button style={{ position: 'absolute', zIndex: '2', paddingBottom: '1%', height: '2rem', width: '2rem', borderRadius: '1rem', backgroundColor: 'white', top: '40%', left: '1%' }} onClick={(e) => {
              document.getElementById('best_seller_men').scrollLeft -= 100;
            }}><AiOutlineArrowLeft />
            </button>
            <button style={{ position: 'absolute', zIndex: '2', paddingBottom: '1%', height: '2rem', width: '2rem', borderRadius: '1rem', backgroundColor: 'white', top: '40%', right: '1%' }} onClick={(e) => {

              document.getElementById('best_seller_men').scrollLeft += 100;
            }}><AiOutlineArrowRight />
            </button>
            <BestSellersForMen />
          </div>
        </div>




        <div style={{ backgroundColor: 'white', height: 'fit-content', width: '100%', justifyContent: 'center', backgroundImage: 'url(./polygonBack.svg)', backgroundSize: 'conatin', backgroundRepeat: 'repeat', alignItems: 'center', paddingTop: '3%', paddingBottom: '3%', fontSize: '2Vmax', fontWeight: '1rem', textAlign: 'center' }}>

          <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around', paddingLeft: '30%', paddingRight: '30%' }}>
            <a href="/men" style={{ cursor: 'pointer' }}><button style={{ backgroundColor: 'black', color: 'white', borderRadius: '5px', width: '110%', paddingLeft: '5%', paddingRight: '5%', whiteSpace: 'nowrap' }}>shop men</button></a>
            <a href='/women' style={{ cursor: 'pointer' }}><button style={{ backgroundColor: 'black', color: 'white', borderRadius: '5px', width: '110%', paddingLeft: '5%', paddingRight: '5%', whiteSpace: 'nowrap' }}>shop women</button></a>
          </div>
          <br />
          Whether you're looking for stylish clothing, trendy accessories, or fashionable footwear, we have you covered. Our collection includes a diverse selection of products designed to meet the fashion preferences and needs of both genders. From the latest fashion trends to classic wardrobe staples
        </div>




        <div style={{ backgroundColor: '#FA9884', height: '30rem', width: '100%' }}>
          <div style={{ height: '2rem', justifyContent: 'center', alignItems: 'center', color: 'black', textAlign: 'center' }}><h3>Best sellers for women</h3></div>
          <div style={{ position: 'relative', height: '33rem', justifyContent: 'center', textAlign: 'center', display: 'flex', overflowY: 'none', paddingLeft: '2rem', paddingRight: '2rem' }}>
            <button style={{ position: 'absolute', zIndex: '2', paddingBottom: '1%', height: '2rem', width: '2rem', borderRadius: '1rem', backgroundColor: 'white', top: '40%', left: '1%' }} onClick={(e) => {
              document.getElementById('best_seller_women').scrollLeft -= 100;
            }}><AiOutlineArrowLeft />
            </button>
            <button style={{ position: 'absolute', zIndex: '2', paddingBottom: '1%', height: '2rem', width: '2rem', borderRadius: '1rem', backgroundColor: 'white', top: '40%', right: '1%' }} onClick={(e) => {
              document.getElementById('best_seller_women').scrollLeft += 100;
            }}><AiOutlineArrowRight />
            </button>
            <BestSellersForWomen />
          </div>
        </div>



        <div style={{ backgroundColor: 'white', height: '25rem', width: '100%' }}>
          <Marquee>
            <img style={{ height: '12.5rem', width: '13rem' }} src="https://images-platform.99static.com//KN46x-24--1v4-Qwm-si1WeZboc=/128x0:896x768/fit-in/500x500/99designs-contests-attachments/55/55258/attachment_55258445"></img>
            <img style={{ height: '12.5rem', width: '13rem' }} src="https://www.designhill.com/design-blog/wp-content/uploads/2019/04/10.png"></img>
            <img style={{ height: '12.5rem', width: '13rem' }} src="https://images-platform.99static.com//kPnlyRe-54NlFhEyPcsv05ck8Tk=/106x119:893x906/fit-in/500x500/99designs-contests-attachments/111/111912/attachment_111912148"></img>
            <img style={{ height: '12.5rem', width: '13rem' }} src="https://sslimages.shoppersstop.com/sys-master/root/hbf/h04/27300363927582/app_brand_swarvoski_luxury-brands_20220324.jpg"></img>
            <img style={{ height: '12.5rem', width: '13rem' }} src="https://cdn.shortpixel.ai/spai/q_lossy+w_924+to_webp+ret_img/https://brandyuva.in/wp-content/uploads/2018/01/burberry-logo.jpg"></img>
            <img style={{ height: '12.5rem', width: '13rem' }} src="https://bcassetcdn.com/public/blog/wp-content/uploads/2019/06/18095324/k-fashion.png"></img>
            <img style={{ height: '12.5rem', width: '13rem' }} src="https://images-platform.99static.com//5QGxdft4mM4_Ffo60Z7ZC9mW2i4=/355x8:1145x798/fit-in/500x500/99designs-contests-attachments/84/84045/attachment_84045958"></img>
            <img style={{ height: '12.5rem', width: '13rem' }} src="https://1.bp.blogspot.com/-EXm-GdnlGio/WNYlvfR6ThI/AAAAAAAAGtM/3aWTOF8H4l4c5zpXdbmYjY7dcDj_30ungCLcB/s1600/Oxolloxo-fashion-store-brand-logo.jpg"></img>
            <img style={{ height: '12.5rem', width: '13rem' }} src="https://cdn.shortpixel.ai/spai/q_lossy+w_924+to_webp+ret_img/https://brandyuva.in/wp-content/uploads/2017/09/polo-t-shirt-logo.jpg"></img>
            <img style={{ height: '12.5rem', width: '13rem' }} src="https://cdn.shortpixel.ai/spai/q_lossy+w_924+to_webp+ret_img/https://brandyuva.in/wp-content/uploads/2017/09/arrow-shirt-logo.jpg"></img>
          </Marquee>
          <Marquee direction='right'>
            <img style={{ height: '12.5rem', width: '13rem' }} src="https://mbluxury1.s3.amazonaws.com/2022/02/25172637/guerlian.jpg"></img>
            <img style={{ height: '12.5rem', width: '13rem' }} src="https://www.globalbrandsmagazine.com/wp-content/uploads/2021/06/990__1513770089_693_chanel1_3f16706be8a9-2.png"></img>
            <img style={{ height: '12.5rem', width: '13rem' }} src="https://global-uploads.webflow.com/5f1c9cd99129705b848a815a/6123cefcd8e0073b6a6e704c_4.jpg"></img>
            <img style={{ height: '12.5rem', width: '13rem' }} src="https://www.designhill.com/design-blog/wp-content/uploads/2019/04/36.png"></img>
            <img style={{ height: '12.5rem', width: '13rem' }} src="https://www.brandbucket.com/images5/gc/logo-envato.png?"></img>
            <img style={{ height: '12.5rem', width: '13rem' }} src="https://www.globalbrandsmagazine.com/wp-content/uploads/2020/11/GIORGIO-ARMANI-2.jpg"></img>
            <img style={{ height: '12.5rem', width: '13rem' }} src="https://images-platform.99static.com//wCr1lCX351sFeV89bSSfN9SgTHM=/393x26:1557x1190/fit-in/500x500/99designs-contests-attachments/97/97834/attachment_97834811"></img>
            <img style={{ height: '12.5rem', width: '13rem' }} src="https://bcassetcdn.com/public/blog/wp-content/uploads/2019/06/18095328/the-red-shoe.png"></img>
            <img style={{ height: '12.5rem', width: '13rem' }} src="https://flyingcdn-942385.b-cdn.net/wp-content/uploads/2020/12/Gucci-Logo-min.png"></img>
            <img style={{ height: '12.5rem', width: '13rem' }} src="https://2.bp.blogspot.com/-cipZosUIPd0/WYGdkQSLpyI/AAAAAAAAH9A/egnZJgxRXHcvXHbKMJWVgHMWOgv8r9IpACLcBGAs/s1600/anokhi-organic-clothing-official-logo.jpg"></img>
          </Marquee>
        </div>



        {/*MdSmartphone,BsFillTelephoneFill,GrMail,ImLocation,BsFacebook,BsTwitter,AiFillInstagram,AiFillLinkedin*/}






        <div style={{ backgroundColor: '#E06469', height: 'fit-content', width: '100%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,22rem)', color: 'white', justifyContent: 'center', alignItems: 'center', textAlign: 'center', paddingTop: '3%' }}>
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