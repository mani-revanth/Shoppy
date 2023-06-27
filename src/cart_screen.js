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
import { MdOutlineDelete } from 'react-icons/md';
import { ImLocation } from 'react-icons/im';
import { MdSmartphone } from 'react-icons/md';
import { GrMail } from 'react-icons/gr';
import { DataView } from 'primereact/dataview';
import { Button } from 'primereact/button';
import { FaCartArrowDown } from 'react-icons/fa';
import { Tag } from 'primereact/tag';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import MyNavBar from './components/navbar';
import {Select,MenuItem} from '@mui/material';



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


//let userUsing="abcdefg";


function CollapsibleExample() {
  let userMail = localStorage.getItem("currentUserMail");
  //const usermail=user.email;
  let { logout } = UseUserAuth();
  const navigation = useNavigate();
  const [cart_length, set_cart_length] = useState("0");
  let total_cost = 0;
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
    axios.post("http://localhost:5000/get_length_of_cart", { name: `${userMail}` }).then((res) => {
      set_cart_length(res.data);
    })
  }
  useEffect(() => {
    setInterval(() => {
      if (userMail != 'undefined')
        funny();
    }, 100);
  }, []);

  return (
    <Navbar collapseOnSelect expand="lg" style={{ height: '10vh', backgroundColor: '#150050', fontSize: '1.5rem', boxShadow: '5px 5px 5px black', width: '100%' }}>
      <Container>
        <Navbar.Brand style={{ height: '80%', width: '16%', marginRight: '3%', textDecoration: 'none' }}>
          <h1 style={{ color: 'white' }}>Shoppy</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse style={{ backgroundColor: '#150050' }} id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home" className='underline' style={{ color: 'white', textDecoration: 'none' }} onMouseOver={(e) => { e.target.style.color = "#FFB3B3"; e.target.style.transition = "width 2s,height 2s" }} onMouseOut={(e) => { e.target.style.color = "white"; e.target.style.fontSize = '1.5rem'; }}>home</Nav.Link>
            <Nav.Link href="/men" className='underline' style={{ color: 'white', textDecoration: 'none' }} onMouseOver={(e) => { e.target.style.color = "#FFB3B3"; e.target.style.transition = "width 2s,height 2s" }} onMouseOut={(e) => { e.target.style.color = "white"; e.target.style.fontSize = '1.5rem'; }}>men</Nav.Link>
            <Nav.Link href="/women" className='underline' style={{ color: 'white', textDecoration: 'none' }} onMouseOver={(e) => { e.target.style.color = "#FFB3B3"; e.target.style.transition = "width 2s,height 2s" }} onMouseOut={(e) => { e.target.style.color = "white"; e.target.style.fontSize = '1.5rem'; }}>women</Nav.Link>
            {userMail == "ch.m.s.revanth@gmail.com" ? null :
              <Nav.Link href="/cart" className='underline' style={{ color: 'white', textDecoration: 'none' }} onMouseOver={(e) => { e.target.style.color = "#FFB3B3"; e.target.style.transition = "width 2s,height 2s" }} onMouseOut={(e) => { e.target.style.color = "white"; e.target.style.fontSize = '1.5rem'; }}>cart({cart_length})</Nav.Link>}
          </Nav>
          <Nav>
            <Nav.Link className='underline' style={{ color: 'white', }} onMouseOver={(e) => { e.target.style.color = "#FFB3B3"; e.target.style.transition = "width 2s,height 2s" }} onMouseOut={(e) => { e.target.style.color = "white"; e.target.style.fontSize = '1.5rem'; }}>{userMail}</Nav.Link>
            <Nav.Link onClick={(e) => { e.preventDefault(); handleSignout(); }} className='underline' style={{ color: 'white', }} onMouseOver={(e) => { e.target.style.color = "#FFB3B3"; e.target.style.transition = "width 2s,height 2s" }} onMouseOut={(e) => { e.target.style.color = "white"; e.target.style.fontSize = '1.5rem'; }}>logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


const totaol_cost_products = (abc) => {
  var sum = 0;
  for (var x of abc) {
    sum = sum + Number(x.card_cost);
  }
  return sum;
}





const getSeverity = (product) => {
  switch (product.inventoryStatus) {
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

const itemTemplate = (product) => {
  return (
    <div className="col-12" style={{ border: 'none' }}>
      <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4" style={{ backgroundColor: 'white' }}>
        <img style={{ height: '10rem' }} className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" src={`${product.card_image_src}`} alt={product.name} />
        <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
          <div className="flex flex-column align-items-center sm:align-items-start gap-3">
            <div className="text-2xl font-bold text-900">{product.card_title}</div>
            <h4>{product.card_description}</h4>
          </div>
          <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
            <span className="text-2xl font-semibold">${product.card_cost}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const get_total_cost = (items) => {
  let sum = 0;
  for (var item of items)
    sum += Number(item.card_cost);
  return sum;
}

function Prev_bill_screen() {
  let userMail = localStorage.getItem("currentUserMail");
  const [bills, setBills] = useState([]);
  useEffect(() => {
    axios.post("http://localhost:5000/get_previous_bills", { name: `${userMail}` }).then((res) => {
      //console.log(res.data);
      setBills(res.data);
    })
  }, [])
  return (
    <div style={{ height: '80vh', width: '100hw', overflowY: 'scroll', display: 'flex', alignItems: 'center', flexDirection: 'column', paddingTop: '2%' }}>
      {
        bills.map((bill, i) => {
          return (


            <div key={i} style={{ marginBottom: '5%', backgroundColor: 'white', borderRadius: '0', width: '60%', boxShadow: '0px 0px 4px', backgroundColor: 'white' }}>


              <div style={{ padding: '1%' }} className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                <div className="flex flex-column align-items-center sm:align-items-start gap-3">
                  <span className="text-2xl font-semibold">{bill.time}</span>
                </div>
              </div>



              <hr />
              <DataView value={bill.cart_items} itemTemplate={itemTemplate} />
              <hr />
              <div className="col-12" style={{ backgroundColor: 'white', borderRadius: '0' }}>
                <div style={{ padding: '1%' }} className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                  <div className="flex flex-column align-items-center sm:align-items-start gap-3">
                    <span className="text-2xl font-semibold">{get_total_cost(bill.cart_items)}</span>
                  </div>
                  <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                    <span className="text-2xl font-semibold" style={{ color: '#301E67' }}>{bill.bill_status}</span>
                  </div>
                </div>


              </div>
            </div>
          )
        })
      }


    </div>
  )
}



const Item = (props) => {
  let userMail = localStorage.getItem("currentUserMail");
  const [quantity, setQuantity] = useState(props.product.quantity);
  const product = props.product;
  const index = props.index;
  return (
    <>
    <div className="col-12" style={{ backgroundColor: 'white', border: '1px solid gray', marginBottom: '2%' }}>
      <div className="flex flex-column xl:flex-row xl:align-items-start gap-4">
        <img style={{ height: '10rem' }} className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto" src={`${product.card_image_src}`} alt={product.card_title} />
        <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
          <div className="flex flex-column align-items-center sm:align-items-start gap-3">
            <div className="text-2xl font-bold text-900">{product.card_title}</div>
            <div className="flex align-items-center gap-3">
              <span className="flex align-items-center gap-2">
                <span className="font-semibold">{product.card_description}</span>
              </span>
            </div>
            <div className="flex align-items-center gap-3">
            <Select value={quantity} onChange={(e) =>{
              axios.post("http://localhost:5000/change_quantity", { name: `${userMail}`, index: `${props.index}`, quantity: `${e.target.value}` }).then((res) => {
                if(res.data=="yes")
                alert("Quantity changed successfully");
                else
                alert("oops some error");
                window.location.reload();
              })
            } } style={{ width: '100%', height: '100%', fontFamily: 'Manrope' }}>
                                  <MenuItem value={1}>1</MenuItem>
                                  <MenuItem value={2}>2</MenuItem>
                                  <MenuItem value={3}>3</MenuItem>
                                  <MenuItem value={4}>4</MenuItem>
                                  <MenuItem value={5}>5</MenuItem>
                                  <MenuItem value={6}>6</MenuItem>
                                  <MenuItem value={7}>7</MenuItem>
                                  <MenuItem value={8}>8</MenuItem>
                                  <MenuItem value={9}>9</MenuItem>
                                  <MenuItem value={10}>10</MenuItem>
            </Select>
            </div>
          </div>
          <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
            <span className="text-2xl font-semibold">${product.card_cost}</span>
            <Button className="p-button-rounded" style={{ backgroundColor: '#DF2E38' }}
              onClick={() => {
                axios.post("http://localhost:5000/remove_item_from_cart", { name: `${userMail}`, index: index }).then((res) => {
                  if (res.data == "yes") {
                    alert("item was removed from your cart");
                    window.location.reload();
                  }
                })
              }}
            ><MdOutlineDelete /></Button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};


function Current_cart_screen() {
  let userMail = localStorage.getItem("currentUserMail");
  const [products, set_cart_Products] = useState([]);
  const [total_cost, set_total_cost] = useState(0);
  const [discount, set_total_dicount] = useState(0);



  useEffect(() => {
    axios.post("http://localhost:5000/get_cart_items", { name: `${userMail}` }).then((res) => {
      set_cart_Products(res.data);
      let sum1 = 0, sum2 = 0;
      for (var x of res.data) {
        sum1 += x.quantity*Number(x.card_cost);
        sum2 += x.quantity*Number(x.offer);
      }
      set_total_cost(sum1);
      set_total_dicount(sum2);
    })
    //console.log(usermail);
  }, []);


  

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ height: '80vh', overflowY: 'scroll', width: '60%' }}>
        <div className="card" style={{ borderWidth: 0 }}>
          {
            products.map((product, i) => {
              return <Item key={i} product={product} index={i} />
            })
          }


          {products.length ?
            <>
            </> :
            <img style={{ height: '100%', width: '100%', }} src='./emptyCart.webp' />
          }


        </div>
      </div>

      {products.length ?
        <div style={{ width: '35%', marginLeft: '3%', height: 'fit-content', backgroundColor: '#EEE2DE', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>


          <div className='col-12' style={{ height: '5%', fontSize: '2Vmax', color: 'black', cursor: 'pointer', padding: '1%', display: 'flex', textAlign: 'start', borderBottom: '1px solid black', paddingLeft: '5%' }}>
            order details
          </div>


          <table style={{ width: '100%', fontSize: '1.5Vmax', fontWeight: 100000 }}>
            <tbody>
              <tr>
                <td style={{ textAlign: 'center' }}>total cost</td>
                <td style={{ color: '#270082' }}>{`Rs.${total_cost}`}</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center' }}>dicount</td>
                <td style={{ color: '#270082' }}>{`Rs.${discount}`}</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center' }}>delivery fee</td>
                <td style={{ color: '#270082' }}>Rs.200</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center' }}>bill amount</td>
                <td style={{ color: '#270082' }}>{`Rs.${total_cost + 200 - discount}`}</td>
              </tr>
            </tbody>
          </table>


          <div className='col-12' style={{ height: '5%', backgroundColor: '#FFD31D', fontSize: '2Vmax', color: 'white', cursor: 'pointer', padding: '3%', textAlign: 'center', fontFamily: 'Merriweather' }}
            onClick={async () => {
              await axios.post("http://localhost:5000/generate_bill", {
                user_name: `${userMail}`,
                time: `${new Date().toLocaleDateString()}` + `  ${new Date().toLocaleTimeString()}`,
                bill_status: "order placed",
                cart_items: products,
              }).then((res) => {
                if (res.data == "yes") {
                  //alert("your order was placed now");
                  return userMail;
                }
              }).then((res) => {
                axios.post("http://localhost:5000/empty_the_cart", { name: `${res}` }).then((res) => {
                  if (res.data == "yes") {
                    alert("order was placed , will reach you soon");
                    window.location.reload();
                  }
                })
              })
            }}
          >
            place my order
          </div>
        </div> :
        null
      }
    </div>
  )
}

export default function Cart_screen() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ height: '100vh', width: '100hw' }}>
      <MyNavBar />
      <Box sx={{ width: '100hw', typography: 'body1', height: '90vh', backgroundColor: 'white' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="cart" value="1" />
              <Tab label="my orders" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1"><Current_cart_screen /></TabPanel>
          <TabPanel value="2"><Prev_bill_screen /></TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}
