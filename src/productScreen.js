import axios from 'axios';
import React,{useState,useEffect,useRef} from 'react';
import ReactDOM from 'react-dom';
import { useParams } from 'react-router-dom';
import MyNavBar from './components/navbar';
import { Tag } from 'primereact/tag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa1, faAnchor, faCartPlus, faHome, faHomeAlt, faHomeLgAlt, faIndianRupee, faPuzzlePiece, faStairs, faStamp } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { GrHome, GrHomeOption } from 'react-icons/gr';
import { ImHome } from 'react-icons/im';
import { MdHomeFilled } from 'react-icons/md';
import { Chip, InputLabel, Menu, Select, SvgIcon } from '@mui/material';
import { Rating } from '@mui/material';
import { Button, FormControl } from 'react-bootstrap';
import {MenuItem} from '@mui/material';

/*card_title: String,
    card_description: String,
    card_image_src: String,
    card_cost: Number,
    warning: String,
    offer: Number,
    is_best_seller: Number,
    id1: String,
    gender: Number,
    images: [String],
    themes: [String],
    categories: [String],
    comments: [{
        name: String,
        text: String,
        rating: Number,
    }],*/


export default function ProductScreen(){
    let {id}=useParams();
    let user=localStorage.getItem('currentUserMail');
    const [product,setProduct]=useState(null);
    const [imageIndex,setImageIndex]=useState(-1);
    const ref=useRef(null);
    const sizes=['XS','S','M','L','XL','XXL','XXXL'];
    const [sizeIndex,setSizeIndex]=useState(-1);
    const [rating,setRating]=useState(0);
    const [quantity,setQuantity]=useState(1);


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


    useEffect(()=>{
        axios.post("http://localhost:5000/get_product",{_id:id}).then((res)=>{
            setProduct(res.data);
            let x=0;
            for(var i in res.data.comments){
                x=x+res.data.comments[i].rating;
            }
            setRating(Number((x/res.data.comments.length).toFixed(1)));
        })
    })



    return(
        <div style={{height:'100vh',width:'100vw',}}>
            <MyNavBar/>
            {product ?
            <div style={{height:'90vh',width:'100%',overflowY:'scroll'}}>
                <div style={{height:'fit-content',display:'flex',width:'100%'}}>
                    <div style={{height:'90vh',width:'50%'}}>
                        <img src={imageIndex==-1 ? product.card_image_src : product.images[imageIndex]} style={{height:'90%',width:'75%',marginTop:'5%',borderRadius:'15px',marginLeft:'20%',boxShadow:'0px 0px 3px black'}}/>
                    </div>
                    <div style={{height:'90vh',width:'50%',display:'flex',flexDirection:'column',alignItems:'flex-start',paddingTop:'2.5%',paddingLeft:'5vh',fontFamily:'Manrope'}}>
                        <div style={{backgroundColor:'white',border:'1px solid black',color:'black',fontSize:'3vh',paddingLeft:'2%',paddingRight:'2%',borderRadius:'0',marginBottom:'3%',fontFamily:'Manrope'}}>
                            {product.gender ? "For Women" : "For Men"}
                        </div>
                        <h1 style={{fontFamily:'Manrope',fontWeight:800}}>{product.card_title}</h1>
                        <p style={{color:'grey',fontSize:'3vh',fontWeight:400,fontFamily:'Manrope'}}>{product.card_description}</p>
                        <h2>₹ {product.card_cost}</h2>

                        <Rating value={rating} readOnly style={{color:'black',fontSize:'5vh',fontWeight:400,fontFamily:'Manrope',marginBottom:'1vh'}}/>

                        <h3 style={{fontFamily:'Manrope'}}>color :</h3>
                        <div style={{display:'flex',width:'50%',height:'fit-content'}}>
                        
                            <motion.div key={imageIndex} initial={{boxShadow:`${imageIndex==-1 ? "0px 0px 3px black" : "none"}`}} style={{marginRight:'2%',width:'7vh',height:'7vh',display:'flex',borderRadius:'2px',justifyContent:'center',alignItems:'center',borderRadius:'50%',cursor:'pointer'}} whileHover={{boxShadow:'0px 0px 3px black'}} whileTap={{boxShadow:'0px 0px 3px black'}}>
                                <div style={{height:'4vh',width:'4vh',borderRadius:'50%'}} onClick={()=>setImageIndex(-1)}>
                                    <FontAwesomeIcon icon={faHome} style={{height:'100%',width:'100%',color:'black'}}/>
                                </div>
                            </motion.div>
                            
                            {
                                (product.themes).map((theme,i)=>{
                                    return(
                                        <motion.div initial={{boxShadow:`${imageIndex==i ? "0px 0px 3px black" : "none"}`}} key={theme+imageIndex} style={{marginRight:'2%',width:'7vh',height:'7vh',display:'flex',borderRadius:'2px',justifyContent:'center',alignItems:'center',borderRadius:'50%',cursor:'pointer'}} whileHover={{boxShadow:'0px 0px 3px black'}} whileTap={{boxShadow:'0px 0px 3px black'}}>
                                            <div style={{height:'6vh',width:'6vh',backgroundColor:`${theme}`,borderRadius:'50%'}} onClick={()=>setImageIndex(i)}/>
                                        </motion.div>
                                    )
                                })
                            }
                        </div>

                        <h3 style={{fontFamily:'Manrope'}}>size :</h3>

                        <div style={{display:'flex',width:'50%',height:'fit-content'}}>
                            {
                                sizes.map((size,i)=>{
                                    return(
                                        <div  key={size+sizeIndex} style={{width:'7vh',height:'7vh',display:'flex',borderRadius:'2px',justifyContent:'center',alignItems:'center',borderRadius:'50%',cursor:'pointer'}}>
                                            <motion.div style={{height:'6vh',width:'6vh',borderRadius:'50%',boxShadow:`${sizeIndex==i ? "0px 0px 4px #E0144C": "none"}`,border:`${sizeIndex!=i ? "1px solid grey" : "1px solid #E0144C"}`,color:`${sizeIndex==i ? "#E0144C" :"grey"}`,display:'flex',justifyContent:'center',textAlign:'center',alignItems:'center',paddingTop:'30%'}} onClick={()=>setSizeIndex(i)} whileHover={{boxShadow:'0px 0px 3px black'}}>
                                                <p style={{fontFamily:'Manrope',fontWeight:800}}>{size}</p>
                                            </motion.div>
                                        </div>
                                    )
                                })
                            }
                        </div>

                        <h3 style={{fontFamily:'Manrope'}}>Categories :</h3>
                        <div style={{display:'flex',width:'50%',height:'fit-content'}}>
                            {
                                (product.categories).map((category,i)=>{
                                    return(
                                        <Chip key={category} label={category} style={{marginRight:'2%',backgroundColor:'#E0144C',color:'white',fontFamily:'Manrope'}}/>
                                    )
                                })
                            }
                        </div>

                        <div style={{display:'flex',width:'80%',height:'8vh',justifyContent:'space-between',marginTop:'2%'}}>
                            <Select value={quantity} onChange={(e)=>setQuantity(e.target.value)} style={{width:'20%',height:'100%',fontFamily:'Manrope'}}>
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
                            <Button variant="contained" color="primary" style={{color:'white',width:'70%',backgroundColor:'#F2BE22',fontFamily:'Manrope',display:'flex',alignItems:'center',justifyContent:'center',paddingTop:'2%'}} onClick={()=>{
                                if(sizeIndex==-1){
                                    alert("Please select a size");
                                }
                                else{
                                    let x={
                                        card_title: product.card_title,
                                        card_description: product.card_description,
                                        card_image_src: `${imageIndex==-1 ? product.card_image_src : product.images[imageIndex]}`,
                                        card_cost: product.card_cost,
                                        warning: product.warning,
                                        offer: product.offer,
                                        is_best_seller: product.is_best_seller,
                                        quantity: quantity,
                                        size : sizes[sizeIndex],
                                    }
                                    axios.post('http://localhost:5000/add_item_to_cart',{...x,name:user}).then((res)=>{
                                        //console.log(res);
                                        if(res.data=="yes"){
                                            alert("Added to cart");
                                            window.location.reload();
                                        }
                                        else{
                                            alert("Some error occured");
                                        }
                                    }
                                    )
                                }
                            }}><h1><FontAwesomeIcon icon={faCartPlus}/>Add to cart</h1></Button>
                        </div>
                    </div>
                </div>
            </div>:
            null
            }
        </div>
    )
}