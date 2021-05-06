import React, { Component } from 'react'
import './bids.css'
 class bids extends Component {
   
  constructor(props){
    super(props);
  
    this.state = {       
        bid_price:[],
        FilterUsername:[],
     }
  }

  componentDidMount(){
    fetch(`http://127.0.0.1:8000/Bid/?listing=${this.props.id}`).then((resp)=> {
      resp.json().then((result) => {
        this.setState({bid_price:result})
     
  }
  
      )
    })
  
  }

   render() {

      return (
            <div >
                <div>
                    <text style={{fontWeight:'bold'}}>BIDS :</text>
                </div>
            
           
{
this.state.bid_price ?
this.state.bid_price.map((item)=>
<div className='container' style={{backgroundColor:'#fff'}}>
  <div className='row'>
<div>
<text style={{paddingLeft:20, marginRight:200, fontWeight:'bold'}}> BID BY : {item.username}</text>
</div>
<div>
<text>BID: ${item.bid_price}</text>
</div>
<hr style={{
    color: '#7a7d85', 
    height: 0.1,
    width:'100%'
}}/>
</div>
</div>
 
  )
   :
   <h1>api data no found</h1>
   
   }
   </div>
        )
    }
}
export default bids;