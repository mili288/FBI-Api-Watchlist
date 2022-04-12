import React, {useState, useEffect} from 'react'
import axios from 'axios';
import '../styles/Products.css';
import {useNavigate} from 'react-router-dom';

function Product2() {
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const url = 'https://api.fbi.gov/wanted/v1';


    
      useEffect(() => {
        axios.get(url)
        .then(response => {
            setProduct(response.data)
        })
      },[url])


  if (product) {
      console.log(product);
  return (
      <>
    <div className="box">
     <h1>{product.items[11].title}</h1>
     <p>{product.items[11].description}</p>
     <p>{product.items[11].details}</p>
     <img 
     src={product.items[11].images[0].thumb} 
     alt={product.name}
     />
    </div>
 
    <div className="box">
     <h1>{product.items[12].title}</h1>
     <p>{product.items[12].aliases}</p>
     <p>{product.items[12].nationality}</p>
     <p>{product.items[12].description}</p>
     <img 
     src={product.items[12].images[0].large} 
     alt={product.name}
     />
    </div>

    <div className="box">
     <h1>{product.items[13].title}</h1>
     <p>{product.items[13].aliases}</p>
     <p>{product.items[13].nationality}</p>
     <p>{product.items[13].description}</p>
     <p>{product.items[13].details}</p>
     <img 
     src={product.items[13].images[0].large} 
     alt={product.name}
     />
    </div>

    <div className="box">
    <h1>{product.items[14].title}</h1>
     <p>{product.items[14].aliases}</p>
     <p>{product.items[14].nationality}</p>
     <p>{product.items[14].description}</p>
     <p>{product.items[14].details}</p>
     <img 
     src={product.items[14].images[0].large} 
     alt={product.name}
     />
    </div>

    <div className="box">
     <h1>{product.items[16].title}</h1>
     <p>{product.items[16].description}</p>
     <p>{product.items[16].details}</p>
     <img 
     src={product.items[16].images[0].large} 
     alt={product.name}
     />
    </div>

    
    <div className="box">
     <h1>{product.items[17].title}</h1>
     <p> Alias: {product.items[17].aliases[0]}</p>
     <p>{product.items[17].description}</p>
     <p>{product.items[17].caution}</p>
     <p>{product.items[17].warning_message}</p>
     <img 
     src={product.items[17].images[0].large} 
     alt={product.name}
     />
    </div>

    <div className="box">
    <h1>{product.items[18].title}</h1>
     <p> Alias: {product.items[18].aliases[0]}</p>
     <p>{product.items[18].description}</p>
     <p>{product.items[18].caution}</p>
     <p>{product.items[18].warning_message}</p>
     <img 
     src={product.items[18].images[0].large} 
     alt={product.name}
     />
    </div>

    <div className="box">
     <h1>{product.items[19].title}</h1>
     <p>{product.items[19].description}</p>
     <p>{product.items[19].details}</p>
     <p>{product.items[19].reward_text}</p>
     <img 
     src={product.items[19].images[0].large} 
     alt={product.name}
     />
    </div>
    

    <button className="btn1" onClick={() => navigate('/page') }>1</button>
    of
    <button className="btn1">2</button>
    </>
  )
  }

  return (
      <div>

      </div>
  )
}



export default Product2