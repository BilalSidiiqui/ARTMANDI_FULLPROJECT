import React, { Component } from 'react'
import './comments.css'
 class comment extends Component {
   
  constructor(props){
    super(props);
  
    this.state = {       
      comment:null,
     
     }
  }

componentDidMount(){
fetch(`http://127.0.0.1:8000/Comment/?listing=${this.props.id}`).then((resp)=> {
  resp.json().then((result) => {
    // console.warn (result.data)
    this.setState({comment:result}
        )
  })
})

     }  
    render() {
        return (
            <div className='App'>
            <div style={{fontWeight:'bold'}}>
                COMMENTS: </div>
            
{
this.state.comment ?
this.state.comment.map((item)=>
<div className='container' style={{backgroundColor:'#fff'}}>
  <div className='row'>
<div>
<text style={{paddingLeft:20, marginRight:40,fontWeight:'bold'}}>{item.username}...</text>
</div>
<div>
<text>{item.comment}</text>
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
export default comment;