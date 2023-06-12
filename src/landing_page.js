import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
//import CarouselFadeExample from './components/carousel';
import IndividualIntervalsExample from './components/carousel';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
//import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { TextField } from "@mui/material";
import { Link } from 'react-router-dom';
import {Tooltip} from '@mui/material';
import './primestylings.css';
import shoppingBag from './shoppingBag.jpg';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { useNavigate } from 'react-router-dom';
//import {Link} from 'react-router-dom';


let i=0;
function Shopify()
{
  const name1="Shoppy";
  const [name,setName]=useState("");
  useEffect(()=>{
    setTimeout(()=>{
      setName(name1.substring(0,i));
      i=(i+1)%8;
    },400);
  },[name]);
  return(
    <h1 style={{color:'white'}}>{name}</h1>
  )
}
function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" style={{height:'10vh',backgroundColor:'#FA9884',fontSize:'1.5rem',borderBottom:'2px solid black'}}>
      <Container>
      <Navbar.Brand style={{height:'80%',width:'10%',marginRight:'3%',textDecoration:'none'}}>
      <Shopify/>
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse style={{backgroundColor:'#FA9884'}} id="responsive-navbar-nav">
          
          
          <Nav className="me-auto">
            <Nav.Link ref={el=>{if(el){
              el.style.setProperty("text-decoration","none","important");
            }}} className='underline' style={{color:'white',textDecoration:'none'}} onClick={()=>{
              document.getElementById("about_us_div").scrollIntoView({behavior:'smooth'});
            }} onMouseOver={(e)=>{e.target.style.color="#7B2869";e.target.style.transition="width 2s,height 2s"}}  onMouseOut={(e)=>{e.target.style.color="white";e.target.style.fontSize='1.5rem';}}>about us</Nav.Link>
            
            
            <Nav.Link ref={el=>{if(el){
              el.style.setProperty("text-decoration","none","important");
            }}} className='underline' style={{color:'white',textDecoration:'none'}} onClick={()=>{
              document.getElementById("brands_land").scrollIntoView({behavior:'smooth'});
            }} onMouseOver={(e)=>{e.target.style.color="#7B2869";e.target.style.transition="width 2s,height 2s"}}  onMouseOut={(e)=>{e.target.style.color="white";e.target.style.fontSize='1.5rem';}}>brands</Nav.Link>
            
            
            <Nav.Link ref={el=>{if(el){
              el.style.setProperty("text-decoration","none","important");
            }}} className='underline' onClick={()=>{
              document.getElementById("contact_us").scrollIntoView({behavior:'smooth'});
            }} style={{color:'white',textDecoration:'none'}} onMouseOver={(e)=>{e.target.style.color="#7B2869";e.target.style.transition="width 2s,height 2s"}}  onMouseOut={(e)=>{e.target.style.color="white";e.target.style.fontSize='1.5rem';}}>contact us</Nav.Link>
          
          
          </Nav>
          <Nav>
            
            <Nav.Link href='/login' ref={el=>{if(el){
              el.style.setProperty("text-decoration","none","important");
            }}} className='underline' style={{color:'white',}} onMouseOver={(e)=>{e.target.style.color="#7B2869";e.target.style.transition="width 2s,height 2s"}}  onMouseOut={(e)=>{e.target.style.color="white";e.target.style.fontSize='1.5rem';}}>Sign-in/signup</Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
const boxVariant = {
  visible: { opacity: 1, y : 0, transition: { duration: 1 } },
  hidden: { opacity: 0, y : 50 }
};
const Box3 = () => {

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
      style={{height:'fit-content',width:'100%',display:'flex',color:'white',fontSize:'1.5Vmax'}}
    >
      <p>Curators of ethical fashion and Indian designed
       Shopify is a destination concept store and online haven for style-seekers.
      A fashion selection lovingly handpicked for you, sealed with personal touch. Open six days.</p>
    </motion.div>
  );
};

const boxVariant1 = {
  visible: { opacity: 1, y : 0, transition: { duration: 1 } },
  hidden: { opacity: 0, y : 50 }
};

const boxVariant2 = {
  visible: { opacity: 1, y : 0, transition: { duration: 1 } },
  hidden: { opacity: 0, y : 50 }
};


const boxVariant3 = {
  visible: { opacity: 1, scale : 1, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0.5 }
};

const Box1=()=>{
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
      style={{height:'auto',width:'auto',minHeight:'5rem',minWidth:'10rem',maxHeight:'25rem',maxWidth:'37rem',color:'green',textAlign:'center',justifyContent:'center',alignItems:'center',color:'black',fontWeight:'1',fontSize:'2vh',position:'relative',zIndex:'1'}}
    >
    <h1>about us</h1>
      <p style={{fontWeight:800}}>Shopify is a online platform that connects people with the most quality fashion products available in the market . you can also visit our shop directly . our shop is located in Jagadamba junction , beside MVR shopping mall . this webpage was completely designed and develpped by Mani sankar reevanth .Shopify will work 6days in a week , for better customer satisfaction . the timings of shopify are 10:00 AM to 9:00PM </p>
      <Link to="/login"><button style={{backgroundColor:'black',color:'white',paddingTop:'1%',paddingBottom:'1%',paddingLeft:'1.3%',paddingRight:'1.3%',fontSize:'1.5rem',borderRadius:'4px'}}>join us</button>
      </Link>
    </motion.div>
  );
}


const Image_box=(props)=>{
  const control = useAnimation();
  const [ref, inView] = useInView();
  const boxvariant3 = {
    visible: { opacity: 1, scale : 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 }
  };

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
      variants={boxvariant3}
      initial="hidden"
      animate={control}
      style={{height:'100%',width:'100%',display:'flex',color:'green',textAlign:'center',justifyContent:'center',alignItems:'center',color:'#DC5F00',}}
    >
      <img style={{height:'auto',width:'auto',minHeight:'2rem',maxHeight:'15rem',minWidth:'2rem',maxWidth:'15rem',borderRadius:'10px',}} src={props.lin}></img>
    </motion.div>
  );
}


const Intro=()=>{

  const navigate=useNavigate();

  return(
    <div style={{height:'90vh',backgroundImage:`url(${shoppingBag})`,padding:'2%',backgroundSize:'contain',backgroundRepeat:'no-repeat',backgroundPosition:'left',display:'flex',alignItems:'center',justifyContent:'flex-end',position:'relative'}}>
          <img src='./Colored Patterns.svg' style={{width:'100vw',height:'100%',minWidth:'50rem',zIndex:'0',position:'absolute'}}/>
          <div style={{position:'absolute',zIndex:'2'}}>
          <motion.div initial={{opacity:0,x:100}} whileInView={{opacity:1,x:0,transition:{type:'spring',bounce:0.5,duration:1,}}} viewport={{amount:0.1,once:true}}>
          <h3 style={{color:'black',fontFamily:'Monomaniac One',fontSize:'5vh'}}>welcome to</h3></motion.div>
          <motion.div initial={{opacity:0,x:100}} whileInView={{opacity:1,x:0,transition:{type:'spring',bounce:0.5,duration:1,delay:1,}}} viewport={{amount:0.1,once:true}}>
          <h1 style={{color:'#EB144C',fontWeight:1000,fontFamily:'Abril Fatface',fontSize:'7vh'}}>Shoppy</h1></motion.div>
          <motion.div initial={{
            opacity:0,
            y:100,
          }}
          whileInView={{
            opacity:1,
            y:0,
            transition:{
              type:'string',
              bounce:0.5,
              duration:1,
              delay:1.5,
            }
          }}
          viewport={{once:true}}
           style={{width:'100%',maxWidth:'40rem',paddingLeft:'2%',paddingTop:'1%',paddingBottom:'1%',fontSize:'4vh',marginLeft:'-2%'}}>
          <h4 style={{color:'black',fontFamily:'Monomaniac One'}}>your online shopping partner</h4>
          </motion.div>


          <motion.div initial={{
            opacity:0,
            y:100,
          }}
          whileInView={{
            opacity:1,
            y:0,
            transition:{
              type:'string',
              bounce:0.5,
              duration:1,
              delay:2,
            }
          }} viewport={{once:true}} style={{width:'100%',maxWidth:'40rem',color:'#4E3636',fontWeight:'500',fontFamily:'Monomaniac One',textAlign:'left',fontSize:'2vh'}}>
            <p>Discover a world of endless possibilities at our e-commerce online shopping platform. Explore a vast collection of products, ranging from simple home wear to complex party wear . Shop with confidence, enjoy seamless browsing, secure transactions, and exceptional customer service. Find exactly what you need and experience the convenience of online shopping like never before</p>
          </motion.div>
          <motion.button initial={{opacity:0,
            x:-50,
          }}
          whileInView={{
            opacity:1,
            x:0,
            transition:{
              type:'string',
              bounce:0.5,
              duration:1,
              delay:2.5,
            }
          }} viewport={{amount:0.5,once:true}} style={{fontSize:'2.5Vmax',backgroundColor:'black',color:'white',borderRadius:'10px',paddingLeft:'2%',paddingRight:'2%'}} onClick={()=>{
            navigate('/login');
          }}>
            join us
          </motion.button>
          </div>
        
  </div>
  )
}



const Box2=()=>{

  return (
    <motion.div
      initial={{opacity:0,y:50}}
      whileInView={{opacity:1,y:0,transition:{duration:1}}}
      viewport={{amount:0.5,once:true}}
      style={{height:'auto',width:'auto',display:'flex',textAlign:'center',justifyContent:'center',alignItems:'center',padding:'5%'}}
    >
      <img  src="https://assets.vogue.com/photos/5fd29d0d84810a792efde9ff/master/w_2560%2Cc_limit/Heidi-Klum-Leni-Klum-vogue-germany-091220-courtesy-Chris-Colls-Vogue-Germany.jpg"
      style={{height:'100%',width:'80%',minHeight:'5rem',minWidth:'10rem',maxHeight:'50rem',maxWidth:'40rem'}}>
      </img>
    </motion.div>
  );
}


const parent = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}
  
const child = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

const brands=["./channel.png",
"./louis.png",
"https://upload.wikimedia.org/wikipedia/commons/2/24/Adidas_logo.png",
"https://seeklogo.com/images/G/givenchy-logo-B1FAD9A0DF-seeklogo.com.png",
"https://palladiumahmedabad.s3.ap-south-1.amazonaws.com/BrandsImages/02082022150624880_brlo.png",
"https://logos-world.net/wp-content/uploads/2020/10/Hugo-Boss-Logo-1924-2021.png",
"https://cdn.worldvectorlogo.com/logos/lacoste-logo.svg",
"https://cdn.worldvectorlogo.com/logos/puma-logo.svg"]

export default function Landing_page()
{
    const [email,setEmail]=useState("");
    const products=[
      {
        link:'https://rukminim2.flixcart.com/image/450/500/xif0q/shirt/b/d/f/3xl-13-lstr-wine-vtexx-original-imagnzbummhkgr7p.jpeg?q=90&crop=false',
        title:'T-shirts'
      },
      {
        link:'https://img2.cgtrader.com/items/2037204/bcafc7aabb/large/mens-levi-s-jeans-with-4k-texture-3d-model-obj-mtl.jpg',
        title:'pants'
      },
      {
        link:'https://c1.wallpaperflare.com/preview/815/740/1024/saree-indian-ethnic-clothing-fashion-silk.jpg',
        title:'sarees'
      },
      {
        link:'https://c1.wallpaperflare.com/preview/687/384/893/ethnic-wear-saree-kurta-lehengas-designer.jpg',
        title:'Ethnic wear'
      },
      {
        link:'https://img.freepik.com/free-photo/asian-woman-orange-pastel-jacket-sportswear-apparel-full-body_53876-102150.jpg',
        title:'sports-wear'
      },
      {
        link:'https://img.freepik.com/premium-photo/mens-woolen-blazer-suit-checkered-isolated-image-white-background_351981-1598.jpg',
        title:'party wear'
      }
    ];
    //console.log(products.length);
    return(
      <div>
        <div >
           {/*<div style={{backgroundColor:'#E9A6A6',height:'3vh',width:'100%',margin:'0',marginTop:'0',alignItems:'center',justifyContent:'center',fontSize:'2.1vh',textAlign:'center',color:'pink'}}>
            <p>courier fee will be charged according to the distance . only available in India</p>
           </div>*/}
           <CollapsibleExample/>
        </div>
        <div style={{height:'90vh',width:'100%',overflow:'scroll'}}>
           <Intro/>
           <div style={{height:'fit-content',backgroundColor:'#FA9884',width:'100%',justifyContent:'center',alignItems:'center',textAlign:'center',display:'felx',verticalAlign:'center',paddingTop:'3%',paddingBottom:'4%'}}>
              <div style={{height:'70%',width:'60%',margin:'auto',marginTop:'auto',marginBottom:'auto',display:'flex',alignItems:'center',justifyContent:'center',color:'#6FB1E4'}}>
              <Box3/>
              </div>
           </div>
          <div id="about_us_div" className='about_us' style={{position:'relative'}}>
            <img style={{width:'100%',height:'100%',position:'absolute',zIndex:'0',minWidth:'60rem'}} src='./Colored Patterns (1).svg'/>   
           <Box1/>
           <Box2/>
          </div>

          <div style={{display:'inline-flex',overflowX:'scroll',backgroundColor:'#FA9884',width:'100vw',height:'40vh',minHeight:'20rem',alignItems:'center'}}>
          
          {
            products.map((card,i)=>{
              return(
                <div key={i} style={{display:'inline-block',position:'relative',paddingLeftL:'5%',height:'80%',width:'40%',minHeight:'15rem',minWidth:'17rem',paddingTop:'0.5%',marginLeft:'1vw',textAlign:'center'}}>
                <div style={{height:'75%',width:'75%',zIndex:2,position:'absolute',zIndex:'2',bottom:'17%',right:'7%',border:'1vh solid black'}}/>
                <div style={{height:'75%',width:'75%',zIndex:2,position:'absolute',zIndex:'0',bottom:'30%',right:'20%',border:'1vh solid yellow'}}/>
                <img src={card.link} style={{zIndex:1,height:'75%',width:'75%',position:'relative',zIndex:'1'}}/>
                <h1 style={{color:'white',marginTop:'2vh'}}>{card.title}</h1>
                </div>
              )
            })
          }
          <div key={i} style={{display:'inline-block',position:'relative',paddingLeftL:'5%',height:'80%',width:'40%',minHeight:'15rem',minWidth:'17rem',paddingTop:'0.5%',marginLeft:'1vw',textAlign:'center'}}>
                <div style={{height:'75%',width:'75%',zIndex:2,position:'absolute',zIndex:'2',bottom:'17%',right:'7%',border:'1vh solid black'}}/>
                <div style={{height:'75%',width:'75%',zIndex:2,position:'absolute',zIndex:'0',bottom:'30%',right:'20%',border:'1vh solid yellow'}}/>
                <div style={{zIndex:1,height:'75%',width:'75%',position:'relative',zIndex:'1',marginLeft:'12%',backgroundColor:'white',display:'flex',textAlign:'center',alignItems:'center'}}><h1>And Many More.......</h1></div>
                </div>
          
          </div>
          <div style={{width:'100%',height:'fit-content',backgroundColor:'#7D1E6A',justifyContent:'center',alignItems:'center',textAlign:'center',padding:'0'}}>
            <img src='https://firebasestorage.googleapis.com/v0/b/shopify-authentication-15fd1.appspot.com/o/FASHION%20CINEMATIC%20VIDEO%20_%20JITESH%20THAKUR%20_%20HOUSE%20OF%20CREATION%20_%20JAIPUR.gif?alt=media&token=d5036a1b-f654-4f89-b939-56984f7da21e' style={{width:'100%',height:'auto',minHeight:'10rem',maxHeight:'35rem',minWidth:'10rem',maxWidth:'100%'}}>
            </img>
          </div>
          <div id="brands_land" style={{width:'100%',backgroundColor:'#EEEEEE',paddingTop:'2%',paddingLeft:'3%',position:'relative'}}>
          
          <img style={{height:'100%',width:'100%',position:'absolute',zIndex:'0',minWidth:'60rem'}} src='./Colored Patterns (2).svg'/>
          
          <Box sx={{ flexGrow: 1, p: 2 ,position:'relative' ,zIndex:'2' }}>
            <Grid
            initial="hidden"
            animate="visible"
            variants={parent}
            container
            spacing={2}>


              {brands.map((brand,index) => (
              <Grid variants={child} key={index} {...{ xs: 6, sm: 6, md: 4, lg: 3 }} minHeight={250}>
                <motion.img initial={{opacity:0,scale:0}} whileInView={{opacity:1,scale:1,transition:{duration:0.6,type:'spring',bounce:0.4,delay:0.1*index}}} viewport={{amount:0.5,once:'true'}} style={{height:`${index<4 ? '70%' : '80%'}`,width:`${index<4 ? '70%' : '80%'}`}} src={`${brand}`}/>
              </Grid>
              ))}

            
            </Grid>
          </Box>



          </div>
        <div id="contact_us" style={{height:'fit-content',width:'100%',justifyContent:'center',alignItems:'center',textAlign:'center',background:'#E06469',padding:'5%',color:'white',fontSize:'1.5Vmax'}}>
          <p>feel free to contact us . we will let you know if there are any new products and designs available .</p><p> please let us know if you feel
          any deiscomfort . send any complaints or suggestions for us .</p>
          <TextField
                error={email.length === 0}
                sx={{width:'40%'}}
                value={email}
                label="Enter your mail"
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
            />
            <br/><br/>
          <a href={`mailto:ch.m.s.revanth@gmail.com?subject=${"just to get in touch"}&body=${email}`}><button onClick={()=>{setEmail("")}} style={{backgroundColor:'#00F5FF',minHeight:'3rem',minWidth:'8rem',maxHeight:'15rem',maxWidth:'20rem',borderRadius:'10px',paddingLeft:'1%',paddingRight:'1%'}}>send email</button></a>
          <br/>
          <br/>
          <div style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center',textAlign:'center',fontSize:'1.6Vmax'}}>
          <Row>
            <Col className='tootlips'><Tooltip title="will be receiving your delevery in 3 to 7 days" placement='top-start'><p>delivey</p></Tooltip></Col>
            <Col className='tootlips'><Tooltip title="your data cannot be accessed by others" placement='top-start'><p>privacy</p></Tooltip></Col>
            <Col className='tootlips'><Tooltip title="you can contact us by leaving your email above" placement='top-start'><p>contact</p></Tooltip></Col>
            <Col className='tootlips'><Tooltip title="no products will be taken back without proof" placement='top-start'><p>return</p></Tooltip></Col>
          </Row>
          </div>
          <div  style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center',textAlign:'center',fontSize:'1.6Vmax'}}>
          <Row>
            <Col className='tootlips'><Tooltip title="our top barnds are puma,adidas,ck,......" placement='top-start'><p>brands</p></Tooltip></Col>
            <Col className='tootlips'><Tooltip title="our store is loacted at vishakapatnam , jagadhamba centre , beside MVR mall" placement='top-start'><p>location</p></Tooltip></Col>
            <Col className='tootlips'><Tooltip title="once the product is placed it cannot be cancelled afetr 2 days" placement='top-start'><p>canclation</p></Tooltip></Col>
          </Row>
          </div>
        </div>
        </div>
      </div>
    )
}