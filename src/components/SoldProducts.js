import React ,{ useState, useEffect} from 'react'
import axios from 'axios';
import FOOTER from './footer'
import { Form,FormControl,Button,Card,} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function SoldProducts() {

    const[soldproduct,setsoldproduct]=useState([]);

    const url='http://127.0.0.1:8000/Listing/'

    useEffect(()=>{
        axios.get(url)
        .then(response => {
          setsoldproduct(response.data)
       
        })
      }, [])

     
      let array=soldproduct.filter(e => e.completed===true && e.winner_username===localStorage.getItem('username'))
console.log(array);


    return (
        <div className="App" style={{backgroundColor:"#D3D3D3"}}>
        <div className="container">

        <div className="row"style={{marginBottom:30,paddingTop:50}}>
        {
            array?
            array.map((item)=>
            <div className="col-sm-4">
            <Card style={{ width:320, margin:10, backgroundColor:'grey',borderRadius:22}}>
            <Link to={`/AFTERSOLD/${item.id}`}> 
           <Card.Img variant="top" src={item.image} style={{height:200}} /></Link>
             <Card.Body>
             <Card.Title > Title : {item.title}</Card.Title>
             <Card.Text ><text style={{fontWeight:'bold'}}>Description :</text> {item.description}</Card.Text>
               <Card.Text><text style={{fontWeight:'bold'}}>STARTING PRICE : </text>${item.start_price}</Card.Text>
             <Card.Text><text style={{fontWeight:'bolder',fontSize:30}}>PRODUCT SOLD </text></Card.Text>

               
                      </Card.Body>
   </Card>
   
    </div>
    
   )
   :
   <h1>api data no found</h1>
   
   }
   </div>
       
            
        
       
        </div>
        <FOOTER/>
        </div>
    )
}
export default SoldProducts;