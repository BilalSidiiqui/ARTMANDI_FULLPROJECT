
import React ,{ useState, useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router';
import FOOTER from './footer';
import userServices from "../Services/UserServices";
import Comment from './comment';
import Bids from './bids';
import Timer from './Timer';

 function Product() {

const [bid_price,setbid]=React.useState();
const [comment,setcomment]=React.useState();


var {id} = useParams()  
const url=`http://127.0.0.1:8000/Listing/${id}/`;

const [product,setproduct] =useState(null);
let content=null;

useEffect(()=>{
  axios.get(url)
  .then(response => {
    setproduct(response.data)
  })
}, [url])

if(product){
  content=
  <div className="relative pb-10 min-h-screen">
  <div class="card" style={{height:300,width:500,margin:30, marginBottom:600,marginLeft:300}}>
<img src={product.image} class="card-img-top" style={{height:300}} />
  <div class="card-body">
  <h5 class="card-title">TITLE: {product.title}</h5>
  <p class="card-text">DESCRIPTION: {product.description}</p>
  <h6>PRICE: ${product.start_price}</h6>
  <h6>BID CLOSED AT: {product.end_date}</h6>
  
  <Timer id={id}/>

  <div className="form-group">

<button type="submit" className="btn btn-primary btn-block"  onClick={e=>{
                    var listing = id
                    userServices.closeBid(listing).then((data)=>{
                        window.location.href="/BUYER"
                        console.log(listing)
                        alert(localStorage.getItem("user"));
                        alert(localStorage.getItem("bid"))

                    }).catch(err=>{
                        console.log(err)
                    alert("closing failed")
                    })
                   
                }}>Close Bid</button>
 
 
              <form>
               <input type="number" className="form-control" style={{width:460,marginBottom:15,marginTop:30}} placeholder="PLACE BID" 
               value={bid_price} onChange={e=>{
                        setbid(e.target.value)
                    }}
                    />
                    <button  type="submit" className="btn btn-primary btn-block"  onClick={e=>{
                    var user = localStorage.getItem("user_id")
                    var listing = id
                    if (bid_price>product.start_price){
                    userServices.addBid(user,bid_price,listing).then((data)=>{
                      console.log(bid_price)

                        window.location.href="/BUYER"
                    })
                  .catch(err=>{
                        console.log(err)
                    alert("adding failed")
                    } )
                  }
                  else{
                    alert("Bid must be greater than the current price of Product ")
                  }
                   
                }}>Bid Now!</button>
                </form>

                    
                      </div>
                      <Bids id={id}/>
                      <br/>
                      
                      

  
                   <form>
                    <div className="form-group" >
            <textarea class="form-control" rows="5" placeholder="COMMENT"  value={comment} onChange={e=>{
                        setcomment(e.target.value)
                    }}></textarea>
            </div>
                     <button  type="submit" className="btn btn-primary btn-block"  onClick={e=>{
                    var user = localStorage.getItem("user_id")
                    var listing = id
                    userServices.addComment(user,comment,listing).then((data)=>{
                        console.log(comment)
                        window.location.href="/BUYER"
                    }).catch(err=>{
                        console.log(err)
                    alert("adding failed")
                    })
                   
                }}>SEND</button>
                <br/>
                 </form>
              <Comment id={id} />
            </div>
           
            
  </div>
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
export default Product;
