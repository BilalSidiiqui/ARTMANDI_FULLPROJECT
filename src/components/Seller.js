import React,{useState} from 'react'
import FOOTER from './footer';
import DatePicker from 'react-date-picker';
import Calendar from 'react-calendar'
import userServices from "../Services/UserServices";
import 'react-datepicker/dist/react-datepicker-cssmodules.min.css'
import moment from 'moment';

function Seller() {
    console.log(localStorage.getItem("user_id"))

    const [title,settitle]=React.useState();
    const [description,setdescription]=React.useState();
   const[image,setimage]=React.useState();
   const [category,setcategory]=useState("T");
  const[startPrice,setstartPrice]=React.useState();
  const [end_date, setend_date] = useState(new Date());
  
console.log(end_date)

    return (
        <div className="App" style={{backgroundColor:"#fff"}}>
        <div className="Main" style={{height:'700'}}>
   <div className='Outer' style={{backgroundImage: `url("https://images.unsplash.com/photo-1562619425-c307bb83bc42?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGRhcmslMjBibHVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80")` }}>
   <div className='inner-container'
   style={{display:"flex",
   justifyContent: "center",
   alignItems: "center",
    maxWidth:'45%'
   }}>
   <div className="col">
  <div>
   <h1 style={{textAlign:'center', color:'	#000'}}>ADD NEW ARTWORK</h1>
        <hr  style={{
color: '#7a7d85',
height: 0.5,
borderColor : '#000',
width:'78%',

}}/>
<p style={{marginBottom:60}}>As an artist seller, you can post your artwork on sale by adding your artwork details and also set the bid closing time.</p>
</div>
        <form>
            <h3>ADD PRODUCTS</h3>

            <div className="form-group">
               <input type="text" className="form-control" placeholder="PRODUCT TITLE" value={title} onChange={e=>{
                        settitle(e.target.value)
                    }}/>
            </div>

            <div className="form-group">
            <textarea class="form-control" rows="5" placeholder="PRODUCT DESCRIPTION" id="ProductDescription" value={description} onChange={e=>{
                        setdescription(e.target.value)
                    }}></textarea>
            </div>

        
            <div className="form-group">
            <input type="number" name="Productbid" className="form-control" placeholder="STARTING PRICE" value={startPrice} onChange={e=>{
                        setstartPrice(e.target.value)
                    }} />
            </div>

            <div className="form-group">
               <select className="custom-select" 
               value={category} onChange={(e) =>{
                  const selectedCategory=e.target.value;
                  setcategory(selectedCategory)
               }}>
                   
                  <option value="E">Landscapes</option>
                  <option value="H">Surrealism</option>
                  <option value="T">Abstract Art</option>  
            
               </select>
               </div>



         
            <input type="url" id="productimg" className="form-control" placeholder="ENTER IMAGE URL" name="img" style={{border:0}} value={image} onChange={e=>{
                        setimage(e.target.value)
                    }}/> <br/> <br/>

            <Calendar
                    selected={end_date}               
                    onChange={date=> setend_date(date)}
                   
                    
                />    

            <button style={{marginTop:30}} type="submit" className="btn btn-primary btn-block" onClick={e=>{
                    var created_by = localStorage.getItem("user_id")
                    var start_price= parseInt(startPrice)
                    userServices.addProduct(title,description,image,category,start_price,created_by,end_date).then((data)=>{
                        console.log(data)
                        alert("product has been added successfully!")
                        window.location.href="/BUYER"
                    }).catch(err=>{
                        console.log(err)
                    alert("Login First!")
                    window.location.href='/login'
                    })
                   
                }}>ADD PRODUCT</button>
           
             
        </form>
       
        </div>
        <br/>
        
</div>
</div>
</div>
<FOOTER/>

        </div>
    )
}
export default Seller;