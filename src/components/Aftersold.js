
import React ,{ useState, useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router';
import FOOTER from './footer';

 function Aftersold() {
     
var {id} = useParams()  
const url=`http://127.0.0.1:8000/Listing/${id}/`;

const [Aftersold,setAftersold] =useState(null);
let content=null;

useEffect(()=>{
  axios.get(url)
  .then(response => {
    setAftersold(response.data)
  })
}, [url])

if(Aftersold){
  content=
  <div className="relative pb-10 min-h-screen">
  <div class="card" style={{height:300,width:500,margin:30, marginBottom:600,marginLeft:300}}>
<img src={Aftersold.image} class="card-img-top" style={{height:300}} />
  <div class="card-body">
  <h5 class="card-title">TITLE: {Aftersold.title}</h5>
  <p class="card-text">DESCRIPTION: {Aftersold.description}</p>
  <h6>PRICE: ${Aftersold.start_price}</h6>
  <text style={{fontWeight:'bold', fontSize:25}}>PRODUCT SOLD AT PRICE : ${localStorage.getItem("bid")} </text><br/>
<text style={{fontWeight:'bold', fontSize:25}}>PRODUCT WINER : {localStorage.getItem("user")} </text>
</div></div>
</div>
}
    return (
        <div className="App"  style={{backgroundColor:"#D3D3D3",paddingTop:50}}>
       <div className="container"  style={{marginBottom:600}}>
     {content}
     
     <br/><br/><br/><br/><br/><br/>
     <br/><br/><br/><br/><br/><br/>
     
     
     </div>
     <FOOTER />
  </div>
    )
    }
export default Aftersold;