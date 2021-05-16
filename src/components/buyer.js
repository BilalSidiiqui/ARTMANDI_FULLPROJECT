import React from 'react'
import { Form,FormControl,Button,Card,} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
 class buyer extends React.Component {


  constructor(){
    super();
  
    this.state = {
      products:[],
      visible:3, }
      
      this.loadmore= this.loadmore.bind(this);
  }

componentDidMount(){
fetch('http://127.0.0.1:8000/Listing/').then((resp)=> {
  resp.json().then((result) => {
    let array=result.filter(e => e.completed===false)

    this.setState({products:array})
    
  })
})

     }  
      
     loadmore(){
       this.setState((previous)=>{
         return {visible: previous.visible + 9}
       })
     }

     

  render() {
    console.log(this.state.products)
    return (

        <div className="App"  style={{backgroundColor:"#D3D3D3", paddingTop:50}}>
   <div className="container"  >
      
              <div className='row' >
             <h1 style={{textAlign:'center',marginLeft:320, marginRight:80, color:'	#696969'}}>PRODUCTS</h1>
       <Form inline >
      <FormControl type="text" placeholder="Search Products" className="mr-sm-2"  />
      <Button variant="outline-info">Search </Button>
      <br/>
      <br/><br/>    </Form>
       </div>
      

       <div className="container">
<div className="row"style={{margin:30}}>

{
this.state.products ?
this.state.products.slice(0,this.state.visible).map((item)=>

 <div className="col-sm-4">
 <Card style={{ width:320, margin:10, backgroundColor:'grey',borderRadius:22}}>
 <Link to={`/PRODUCT/${item.id}`}> <Card.Img variant="top" src={item.image} style={{height:200}} /></Link>
  <Card.Body>
  <Card.Title > Title : {item.title}</Card.Title>
  <Card.Text ><text style={{fontWeight:'bold'}}>Description :</text> {item.description}</Card.Text>
    <Card.Text><text style={{fontWeight:'bold'}}>STARTING PRICE : </text>${item.start_price}</Card.Text>

    <Link to={`/PRODUCT/${item.id}`}>   <Button variant="primary" type="submit" className="btn btn-primary btn-block">BUY NOW</Button>
 </Link> </Card.Body>
</Card>

 </div>
 
)
:
<h1>api data no found</h1>

}
</div>


<div className='col-md-12'>
  {this.state.visible < this.state.products.length &&
  <button type="button"  className="btn btn-sm btn-primary" onClick={this.loadmore}>SHOW MORE</button>
  }
</div>

 
     </div>
  
     

     </div>
  
     </div>
    );
    }
}
export default buyer;