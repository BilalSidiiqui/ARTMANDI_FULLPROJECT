import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from 'react-bootstrap';
import FOOTER from './footer';
import BUYER from './buyer';

 function home() {
    return (
        <div className="App" style={{backgroundColor:"#D3D3D3"}}>
        <Carousel>
     <Carousel.Item>
       <img
         className="d-block w-100"
         src="https://uploads.codesandbox.io/uploads/user/16fd4925-c311-4876-83a8-013d492edc8d/SV1s-2.jpg"
         alt="First slide"
        height="600px"
        width="2500px"
       />
       <Carousel.Caption>
         <h3 >CREATIVTY IS A WILD MIND AND A DISCIPLINED EYE.</h3>
          <p>Dorothy Parker</p> 
       </Carousel.Caption>
     </Carousel.Item>
     <Carousel.Item>
       <img
         className="d-block w-100"
         src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
         alt="second slide"
         height="600px"
         width="2000px"
       />
   
       <Carousel.Caption>
         <h3>ART IS NOT WHAT YOU SEE BUT WHAT YOU MAKE OTHERS SEE.</h3>
         <p>Edgar Degas</p>
       </Carousel.Caption>
     </Carousel.Item>
     <Carousel.Item>
       <img
         className="d-block w-100"
         src="https://images.ctfassets.net/hrltx12pl8hq/6bi6wKIM5DDM5U1PtGVFcP/1c7fce6de33bb6575548a646ff9b03aa/nature-photography-pictures.jpg?fit=fill&w=800&h=300"
         alt="Third slide"
         height="600px"
         width="2000px"
       />
   
       <Carousel.Caption>
         <h3>ART SPEAKS WHERE WORDS ARE UNABLE TO EXPLAIN.</h3>
         <p>Mathiole</p>
       </Carousel.Caption>
     </Carousel.Item>
   </Carousel>

<br/><br/><br/><br/>
   
  <BUYER/>


    
    <br/><br/><br/><br/>
    <FOOTER/>
    </div>
    )
}
export default home;