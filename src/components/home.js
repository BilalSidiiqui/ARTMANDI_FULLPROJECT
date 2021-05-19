import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from 'react-bootstrap';
import FOOTER from './footer';
import BUYER from './buyer';

 function home() {
    return (
        <div className="App" style={{backgroundColor:"#fff"}}>
       
          <div class="container" style={{marginTop:50,marginBottom:70}}>
			<div class="row">

				<div class="col-md-6 col-sm-6 col-sm-pull-6">
					<div class="mu-hero-left">
					<h1>ART MANDI</h1>
						<p>This platform will help you write a book review, a report or essay that offers a critical perspective on a text. It offers a process and suggests some strategies for writing book reviews...</p>
						<p>The Writing Center is a great place to get in depth help on essays and papers. I come to the Writing Center twice a week to get a jump start on essays so that I am not cramming at the last minute. It helps to get an extra set of eyes on your work.</p>
					
					</div>
				</div>
        <div class="col-md-6 col-sm-6 col-sm-push-6">
					<div class="mu-hero-right">
          <img
         className="d-block w-100"
         src="https://thevideoink.com/wp-content/uploads/2019/08/header-image.jpg"
         alt="Art"
         />	
         </div>
				</div>	

			</div>
		</div>

        {/* <Carousel>
     <Carousel.Item>
       <img
         className="d-block w-100"
         src="https://uploads.codesandbox.io/uploads/user/16fd4925-c311-4876-83a8-013d492edc8d/SV1s-2.jpg"
         alt="First slide"
        height="200px"
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
         height="200px"
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
         height="200px"
         width="2000px"
       />
   
       <Carousel.Caption>
         <h3>ART SPEAKS WHERE WORDS ARE UNABLE TO EXPLAIN.</h3>
         <p>Mathiole</p>
       </Carousel.Caption>
     </Carousel.Item>
   </Carousel> */}

<br/>
   
  <BUYER/>

<div style={{backgroundColor:'#fff',paddingTop:50,marginBottom:60}}>
<h1 style={{textAlign:'center',color:'#000'}}>OUR SERVICES</h1>
             <hr  style={{
    color: '#7a7d85',
    height: 0.5,
    borderColor : '#000',
    width:'14%',
    marginRight:680
}}/>

<p >ArtMandi is providing mutiple services to artists and art lovers. Where they can sell and buy artworks.</p>

<div className="row"style={{margin:10}}>

<div style={{marginLeft:170}} className='col-3'>
<text style={{fontWeight:'bold',fontSize:25}}>SELL ARTWORKS</text><br/>
<text>Artists can sell their artwork by uploading it and setting their desired price. </text>
<text>They can set Time interval in which they want to sell their product.</text>
</div>



<div className='col-3'>
<text style={{fontWeight:'bold',fontSize:25}}>BUY ARTWORKS</text><br/>
<text>Buyers can buy the artworks by their choice and taste. </text>
<text>They can place Bid on the artwork and will win the auction if their bid is highest.</text>
</div>


<div className='col-3'>
<text style={{fontWeight:'bold',fontSize:25}}>DELIVER ARTWORKS</text><br/>
<text>Artmandi will responsible for delivering the artwork at door step of buyer.</text>
<text>There's no need for buyer to take away the artwork.</text>
</div>

</div>

</div>

<div style={{backgroundColor:'#F8F8F8',paddingTop:50,paddingBottom:60}}>
<h1 style={{textAlign:'center',color:'#000'}}>MEET THE TEAM</h1>
             <hr  style={{
    color: '#7a7d85',
    height: 0.5,
    borderColor : '#000',
    width:'15%',
    marginRight:680
}}/>

<p >ArtMandi team includes Manger, Client side developer and Server side developer.</p>
<div className="row"style={{margin:10}}>

<div style={{marginLeft:170}} className='col-3'>
<text style={{fontWeight:'bold',fontSize:25}}>Manger </text><br/>
</div>


<div className='col-3'>
<text style={{fontWeight:'bold',fontSize:25}}>Server Side Developer</text><br/>
</div>

<div className='col-3'>
<text style={{fontWeight:'bold',fontSize:25}}>Client Side Developer</text><br/>
</div>
</div>
</div>
    
    <FOOTER/>
    </div>
    )
}
export default home;