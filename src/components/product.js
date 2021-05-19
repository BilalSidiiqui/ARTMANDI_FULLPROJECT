
import React ,{ useState, useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router';
import FOOTER from './footer';
import userServices from "../Services/UserServices";
import Comment from './comment';
import Bids from './bids';
import Timer from './Timer';
import Table from 'react-bootstrap/Table'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 function Product() {

const [bid_price,setbid]=React.useState();
const [comment,setcomment]=React.useState();


const BidError= ()=>{
  toast.error("Bid price cannot be greater than 10000",{
  position:"top-center"})
}
const CommentError= ()=>{
  toast.error("You cannot add Special characters in comments!",{
  position:"top-center"})
}

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
<div style={{backgroundColor:'#F8F8F8'}}>

<h5 style={{fontSize:40,paddingTop:50}}>Title: {product.title}</h5>
<div className='row' style={{backgroundColor:'#F8F8F8'}}>
  
<img src={product.image} style={{height:400,width:400,marginLeft:300,marginTop:150}} />
  
  <div style={{marginLeft:100,marginTop:50}} className='col-4'> 
  <text style={{marginRight:400}}>Product Info</text>
  <Table striped bordered hover>
  <thead>
    <tr>
     
      <th>Created By</th>
      <th>Price</th>
      <th>Description</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{width:120}}>{product.created_by}</td>
      <td style={{width:80}}>${product.start_price}</td>

      <td>{product.description}</td>
    </tr>
    </tbody>
     </Table>
  <Timer id={id}/>
  
  <div className="form-group">
{/* 
<button type="submit" className="btn btn-primary btn-block"  onClick={e=>{
                
                    var listing = id
                    userServices.closeBid(listing).then((data)=>{
                        window.location.href="/"
                        alert("Bid has been closed");
                    }).catch(err=>{
                        console.log(err)
                    alert("closing failed")
                    })
                   
                }}>Close Bid</button> */}
 
 
            {localStorage.getItem("user_id")!=product.created_by &&   <form>
              <input type="number" className="form-control" style={{width:505,marginBottom:15,marginTop:30}} placeholder="PLACE BID" 
              value={bid_price} onChange={e=>{
                      setbid(e.target.value)
                  }}
                  />
                  <button  type="submit" className="btn btn-primary btn-block"  onClick={e=>{
                    if(bid_price>10000){
                      alert("Bid price should not be greater than 10000")
                    }
                 
                  else if(bid_price>product.start_price ){
                    var user = localStorage.getItem("user_id")
                    var listing = id
                  userServices.addBid(user,bid_price,listing).then((data)=>{
                    console.log(bid_price)
                    
                  })
                .catch(err=>{
                      console.log(err)
                  alert("adding failed")
                  } )
                }
                else{
                  alert("Bid must be greater than the Starting price of Product ")
                }
                  
              }}>Bid Now!</button>
              
              </form>}

                    
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
                       if(!comment.includes("@")){
                    var user = localStorage.getItem("user_id")
                    var listing = id
                    userServices.addComment(user,comment,listing).then((data)=>{
                        console.log(comment)
                        window.location.href="/"
                    }).catch(err=>{
                        console.log(err)
                    alert("adding failed")
                    })
                   
               }
                else{
                  toast.error("Special charaters cannot be included")
                } }}
                >SEND</button>
                <br/>
                <ToastContainer />

                 </form>
              <Comment id={id} />
            
              </div>
  </div>
            </div>
  
}
  return (
    <div className="App"  style={{backgroundColor:"#F8F8F8"}}>
      
     {content}
     
     <br/><br/><br/><br/><br/><br/>
     <br/><br/><br/><br/><br/><br/>
     
     
     <FOOTER />
  </div>
  )
}
export default Product;
