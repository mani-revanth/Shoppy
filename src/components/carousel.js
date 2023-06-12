import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from 'react-bootstrap/Carousel';
//import Carousel from 'react-bootstrap/Carousel';

/*function CarouselFadeExample() {
  return (
    <div style={{width:'100%',}}>
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFGi5WdmJydwtBBYWqzGIB0sJyvu5aVv0OUg&usqp=CAU"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>highest quality</h3>
          <p>we will provide you with the best quality brands available in the market</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReKTzlLQeVPlztE0jAMaALpi-QqUxyHKUcXA&usqp=CAU"
          alt="Second slide" 
        />

        <Carousel.Caption>
          <h3>affordable prices</h3>
          <p>the prices here are very low compared to others</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wallpaperaccess.com/full/2489629.jpg"
          alt="Third slide" 
        />

        <Carousel.Caption>
          <h3>various options</h3>
          <p>you will always have a choice here , for any design you wished for</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}*/

function IndividualIntervalsExample({}) {
  return (
    <Carousel>
      <Carousel.Item interval={1500}>
      <div style={{backgroundColor:'#EEEEEE',width:'100%',minHeight:'20rem',height:'auto',textAlign:'center',justifyContent:'center',alignItems:'center',padding:'0',}}>
        <img
          style={{width:'100%',height:'auto',minHeight:'20rem',maxHeight:'35rem',borderRadius:'0',boxShadow:'1px 1px 10px black'}}
          className="d-block w-100"
          src="https://wallpaperaccess.com/full/4620238.jpg"
          alt="First slide"
        /></div>
        <Carousel.Caption>
          <h2 style={{color:'#FEB139',textShadow:'3px 3px 3px black'}}>highest quality</h2>
          <p style={{color:'black',}}>we will provide you with the best quality brands available in the market</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
      <div style={{backgroundColor:'#EEEEEE',minHeight:'20rem',width:'100%',height:'auto',textAlign:'center',justifyContent:'center',padding:'0',}}>
        <img
         style={{width:'100%',height:'auto',minHeight:'20rem',maxHeight:'35rem',borderRadius:'0',boxShadow:'1px 1px 10px black'}}
          className="d-block w-100"
          src="https://wallpaperaccess.com/full/1437631.jpg"
          alt="Second slide"
        /></div>
        <Carousel.Caption>
          <h2 style={{color:'#3FA796',textShadow:'3px 3px 3px black'}}>affordable prices</h2>
          <p style={{color:'black',}}>the prices here are very low compared to others</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
      <div style={{backgroundColor:'#EEEEEE',width:'100%',minHeight:'20rem',height:'auto',textAlign:'center',justifyContent:'center',padding:'0'}}>
        <img
         style={{width:'100%',height:'auto',minHeight:'20rem',maxHeight:'35rem',borderRadius:'0',boxShadow:'1px 1px 10px black'}}
          className="d-block w-100"
          src="https://media.allure.com/photos/594ac9f7939ed872d6fc9c79/16:9/w_2560%2Cc_limit/19023411_1719239948091260_6300867499385825788_o.jpg"
          alt="Third slide"
        /></div>
        <Carousel.Caption>
          <h2 style={{color:'#5F9DF7',textShadow:'3px 3px 3px black'}}>various options</h2>
          <p style={{color:'black',}}>you will always have a choice here , for any design you wished for</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;