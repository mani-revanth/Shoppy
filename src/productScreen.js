import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useParams, useNavigate } from 'react-router-dom';
import MyNavBar from './components/navbar';
import { Tag } from 'primereact/tag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa1, faAnchor, faCartPlus, faHome, faHomeAlt, faHomeLgAlt,faChevronLeft, faChevronRight, faIndianRupee, faPuzzlePiece, faStairs, faStamp } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { GrHome, GrHomeOption } from 'react-icons/gr';
import { ImHome } from 'react-icons/im';
import { MdHomeFilled } from 'react-icons/md';
import { Chip, InputLabel, Menu, Select, SvgIcon } from '@mui/material';
import { Rating } from '@mui/material';
import { Button, FormControl } from 'react-bootstrap';
import { MenuItem } from '@mui/material';
import { Modal } from '@mui/material';
import { TextareaAutosize } from '@mui/material';
import { DataView } from 'primereact/dataview';
import Slider from 'react-slick';

import "./slider1.css";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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


export default function ProductScreen() {
    let { id } = useParams();
    let user = localStorage.getItem('currentUserMail');
    const [product, setProduct] = useState(null);
    const [imageIndex, setImageIndex] = useState(-1);
    const ref = useRef(null);
    const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'];
    const [sizeIndex, setSizeIndex] = useState(-1);
    const [rating, setRating] = useState(1);
    const [quantity, setQuantity] = useState(1);
    const [open, setOpen] = useState(false);
    const [review, setReview] = useState('');
    const [comments, setComments] = useState([]);
    const [avgRating, setAvgRating] = useState(0);
    const [similarProducts, setSimilarProducts] = useState([]);

    const navigate = useNavigate();

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


    useEffect(() => {
        axios.post("http://localhost:5000/get_product", { _id: id }).then((res) => {
            if (res.data) {

                axios.post("http://localhost:5000/similar_products", { id: res.data.id1 }).then((res) => {
                    setSimilarProducts(res.data);
                })

                setProduct(res.data);
                console.log(res.data);
                let x = 0;
                for (var i in res.data.comments) {
                    x = x + res.data.comments[i].rating;
                }
                setRating(Number((x / res.data.comments.length).toFixed(1)));
                setComments(res.data.comments);
                let sum = 0;
                for (var i of res.data.comments) {
                    sum = sum + i.rating;
                }
                setAvgRating(Number((sum / res.data.comments.length).toFixed(1)));
            }
            else {
                navigate('/404', { replace: true });
            }
        })
    }, []);



    const itemTemplate = (comment) => {
        return (
            <div className="col-12">
                <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                    <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                        <div className="flex flex-column align-items-center sm:align-items-start gap-3">
                            <div className="text-2xl font-bold text-900">{comment.name}</div>
                            <Rating value={comment.rating} readOnly></Rating>
                            <div className="flex align-items-center gap-3">
                                <h4>{comment.text}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        
    };


    return (
        <div style={{ height: '100vh', width: '100vw', }}>
            <MyNavBar />
            {product ?
                <div style={{ height: '90vh', width: '100%', overflowY: 'scroll' }}>
                    <div style={{ height: 'fit-content', display: 'flex', width: '100%' }}>
                        <div style={{ height: '90vh', width: '50%' }}>
                            <img src={imageIndex == -1 ? product.card_image_src : product.images[imageIndex]} style={{ height: '90%', width: '75%', marginTop: '5%', borderRadius: '15px', marginLeft: '20%', boxShadow: '0px 0px 3px black' }} />
                        </div>
                        <div style={{ height: '90vh', width: '50%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', paddingTop: '2.5%', paddingLeft: '5vh', fontFamily: 'Manrope' }}>
                            <div style={{ backgroundColor: 'white', border: '1px solid black', color: 'black', fontSize: '3vh', paddingLeft: '2%', paddingRight: '2%', borderRadius: '0', marginBottom: '3%', fontFamily: 'Manrope' }}>
                                {product.gender ? "For Women" : "For Men"}
                            </div>
                            <h1 style={{ fontFamily: 'Manrope', fontWeight: 800 }}>{product.card_title}</h1>
                            <p style={{ color: 'grey', fontSize: '3vh', fontWeight: 400, fontFamily: 'Manrope' }}>{product.card_description}</p>
                            <h2>₹ {product.card_cost}</h2>

                            <Rating value={avgRating} readOnly style={{ fontSize: '5vh', fontWeight: 400, fontFamily: 'Manrope', marginBottom: '1vh' }} />

                            <h3 style={{ fontFamily: 'Manrope' }}>color :</h3>
                            <div style={{ display: 'flex', width: '50%', height: 'fit-content' }}>

                                <motion.div key={imageIndex} initial={{ boxShadow: `${imageIndex == -1 ? "0px 0px 3px black" : "none"}` }} style={{ marginRight: '2%', width: '7vh', height: '7vh', display: 'flex', borderRadius: '2px', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', cursor: 'pointer' }} whileHover={{ boxShadow: '0px 0px 3px black' }} whileTap={{ boxShadow: '0px 0px 3px black' }}>
                                    <div style={{ height: '4vh', width: '4vh', borderRadius: '50%' }} onClick={() => setImageIndex(-1)}>
                                        <FontAwesomeIcon icon={faHome} style={{ height: '100%', width: '100%', color: 'black' }} />
                                    </div>
                                </motion.div>

                                {
                                    (product.themes).map((theme, i) => {
                                        return (
                                            <motion.div initial={{ boxShadow: `${imageIndex == i ? "0px 0px 3px black" : "none"}` }} key={theme + imageIndex} style={{ marginRight: '2%', width: '7vh', height: '7vh', display: 'flex', borderRadius: '2px', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', cursor: 'pointer' }} whileHover={{ boxShadow: '0px 0px 3px black' }} whileTap={{ boxShadow: '0px 0px 3px black' }}>
                                                <div style={{ height: '6vh', width: '6vh', backgroundColor: `${theme}`, borderRadius: '50%' }} onClick={() => setImageIndex(i)} />
                                            </motion.div>
                                        )
                                    })
                                }
                            </div>

                            <h3 style={{ fontFamily: 'Manrope' }}>size :</h3>

                            <div style={{ display: 'flex', width: '50%', height: 'fit-content' }}>
                                {
                                    sizes.map((size, i) => {
                                        return (
                                            <div key={size + sizeIndex} style={{ width: '7vh', height: '7vh', display: 'flex', borderRadius: '2px', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', cursor: 'pointer' }}>
                                                <motion.div style={{ height: '6vh', width: '6vh', borderRadius: '50%', boxShadow: `${sizeIndex == i ? "0px 0px 4px #E0144C" : "none"}`, border: `${sizeIndex != i ? "1px solid grey" : "1px solid #E0144C"}`, color: `${sizeIndex == i ? "#E0144C" : "grey"}`, display: 'flex', justifyContent: 'center', textAlign: 'center', alignItems: 'center', paddingTop: '30%' }} onClick={() => setSizeIndex(i)} whileHover={{ boxShadow: '0px 0px 3px black' }}>
                                                    <p style={{ fontFamily: 'Manrope', fontWeight: 800 }}>{size}</p>
                                                </motion.div>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            <h3 style={{ fontFamily: 'Manrope' }}>Categories :</h3>
                            <div style={{ display: 'flex', width: '50%', height: 'fit-content' }}>
                                {
                                    (product.categories).map((category, i) => {
                                        return (
                                            <Chip key={category} label={category} style={{ marginRight: '2%', backgroundColor: '#E0144C', color: 'white', fontFamily: 'Manrope' }} />
                                        )
                                    })
                                }
                            </div>

                            <div style={{ display: 'flex', width: '80%', height: '8vh', justifyContent: 'space-between', marginTop: '2%' }}>
                                <Select value={quantity} onChange={(e) => setQuantity(e.target.value)} style={{ width: '20%', height: '100%', fontFamily: 'Manrope' }}>
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
                                <Button variant="contained" color="primary" style={{ color: 'white', width: '70%', backgroundColor: '#F2BE22', fontFamily: 'Manrope', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '2%' }} onClick={() => {
                                    if (sizeIndex == -1) {
                                        alert("Please select a size");
                                    }
                                    else {
                                        let x = {
                                            card_title: product.card_title,
                                            card_description: product.card_description,
                                            card_image_src: `${imageIndex == -1 ? product.card_image_src : product.images[imageIndex]}`,
                                            card_cost: product.card_cost,
                                            warning: product.warning,
                                            offer: product.offer,
                                            is_best_seller: product.is_best_seller,
                                            quantity: quantity,
                                            size: sizes[sizeIndex],
                                        }
                                        axios.post('http://localhost:5000/add_item_to_cart', { ...x, name: user }).then((res) => {
                                            //console.log(res);
                                            if (res.data == "yes") {
                                                alert("Added to cart");
                                                window.location.reload();
                                            }
                                            else {
                                                alert("Some error occured");
                                            }
                                        }
                                        )
                                    }
                                }}><h1><FontAwesomeIcon icon={faCartPlus} />Add to cart</h1></Button>
                            </div>
                        </div>
                    </div>
                    <div style={{ maxHeight: '90vh', height: 'fit-content', width: '100%', padding: '3%' }}>
                        <Modal open={open} onClose={() => { setOpen(false) }} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description">
                            <div style={{ height: 'fit-content', width: '100%', maxWidth: '30rem', minWidth: '15rem', position: 'absolute', display: 'flex', flexDirection: 'column', padding: '3%', left: '50%', transform: 'translate(-50%)', backgroundColor: 'white', borderRadius: '10px' }}>
                                rate:
                                <Rating name="simple-controlled" size="large" value={rating} onChange={(event, newValue) => {
                                    setRating(newValue);
                                }} />
                                <TextareaAutosize value={review} aria-label="minimum height" minRows={3} placeholder="eneter your rivew here" style={{ width: '100%', marginTop: '2%', marginBottom: '3%' }} onChange={(event) => {
                                    setReview(event.target.value);
                                }} />
                                <Button onClick={() => {
                                    //console.log(user,rating,review,id);
                                    let comment = {
                                        name: `${user}`,
                                        text: `${review}`,
                                        rating: rating,
                                    }
                                    axios.post('http://localhost:5000/add_review', { id: id, comment: comment }).then((res) => {
                                        if (res.data == "yes") {
                                            alert("review added");
                                            window.location.reload();
                                        }
                                        else {
                                            alert("some error occured");
                                        }
                                    })
                                }}>
                                    <h3>Submit</h3>
                                </Button>
                            </div>
                        </Modal>
                        <div style={{ width: '100%', height: 'fit-content', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h2>Reviews</h2>
                            <Button onClick={() => { setOpen(true) }}><h3>Add review</h3></Button>
                        </div>
                        <hr style={{ width: '20%' }} />
                        {
                            comments.length > 0 ?
                                <div style={{ width: '100%', maxHeight: '75vh', height: 'fit-content', boxShadow: '0px 0px 3px black', borderRadius: '15px' }}>
                                    <DataView value={comments} itemTemplate={itemTemplate} paginator rows={5} />
                                </div>
                                :
                                <div style={{ width: '100%', height: 'fit-content', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <h3>No reviews yet</h3>
                                </div>
                        }

                        <div style={{ width: '100%', height: 'fit-content', marginTop: '3%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h2>similar products</h2>
                        </div>
                        <hr style={{ width: '20%' }} />



                        <div className="slider2">
                        <Slider {...settings} style={{height:'100%',backgroundColor:'white'}} 
                        nextArrow={<FontAwesomeIcon icon={faChevronRight} />}
                        prevArrow={<FontAwesomeIcon icon={faChevronLeft} />}
                        >

                            {
                                similarProducts.map((product, i) => {
                                    if (product._id != id) {
                                        return (
                                            <div  key={i} style={{ height: '30rem', width: '30%', cursor: 'pointer' ,border:'1px solid black'}} onClick={() => {
                                                window.location.href = `/product/${product._id}`;
                                            }}>
                                                <div style={{ color: 'black', height: '25rem', width: '15rem', backgroundColor: 'transparent', borderRadius: '5px', margin: '0.5rem' }}>
                                                    <img src={product.card_image_src} style={{ height: '75%',marginLeft:'6%', width: '100%', marginBottom: '2%', border: '1px solid black' }}></img>
                                                    <h4>{product.card_title}.</h4>

                                                    <h6>cost : {product.card_cost}</h6>
                                                </div>
                                            </div>
                                        )
                                    }
                                    else
                                    return null;
                                })
                            }

                        </Slider>
                        </div>



                    </div>
                </div>
                :
                null
            }
        </div>
    )
}