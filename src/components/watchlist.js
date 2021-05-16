import { Form,FormControl,Button,Card,} from 'react-bootstrap';
import React  from 'react'
import { Link } from 'react-router-dom';
import Footer from './footer'

class watchlist extends React.Component {


    constructor(props){
      super(props);
    
      this.state = {
        products:[],
        Filterproducts:[],
         }
            }

Loginid=localStorage.getItem("user_id");

  componentDidMount(){
  fetch(`http://127.0.0.1:8000/Watchlist/?user=${this.Loginid}`).then((resp)=> {
    resp.json().then((result) => {
      this.setState({products:result})
   let array=  result.map( e => e.listing)
   console.log(array)
fetch("http://127.0.0.1:8000/Listing/").then((response)=>{
  response.json().then((listing)=>{
    let array2= listing.filter( e => array.includes(e.id))
    this.setState({Filterproducts:array2})
    console.log(array2)
  })
})    
}

    )
  })

}
  

  render() {
    return (
      <div className="App" style={{backgroundColor:"#D3D3D3"}}>
        <div className="container">
        <text style={{marginBottom:30, fontSize:50, fontWeight:'bolder'}}> WATCHLIST PRODUCTS</text>

        <div className="row"style={{marginBottom:30}}>
        
        {
        this.state.Filterproducts ?
        this.state.Filterproducts.map((item)=>
        
         <div className="col-sm-4">
         <Card style={{ width:320, margin:10, backgroundColor:'grey',borderRadius:22}}>
         <Link to={`/PRODUCT/${item.id}`}> 
        <Card.Img variant="top" src={item.image} style={{height:200}} /></Link>
          <Card.Body>
          <Card.Title > Title : {item.title}</Card.Title>
          <Card.Text ><text style={{fontWeight:'bold'}}>Description :</text> {item.description}</Card.Text>
            <Card.Text><text style={{fontWeight:'bold'}}>STARTING PRICE : </text>${item.start_price}</Card.Text>
            <Link to={`/PRODUCT/${item.id}`}>  <Button variant="primary" type="submit" className="btn btn-primary btn-block">BUY NOW</Button>
</Link>            </Card.Body>
</Card>

 </div>
 
)
:
<h1>api data no found</h1>

}
</div>

</div>

<Footer/>
</div>

    )};
}
export default watchlist;