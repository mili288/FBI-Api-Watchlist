import React, {useState, useEffect} from 'react'
import axios from 'axios';
import '../styles/Products.css';
import {useNavigate} from 'react-router-dom';

function Product() {
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
     <h1>{product.items[0].title}</h1>
     <p>{product.items[0].subjects[0]}</p>
     <p>{product.items[0].description}</p>
     <img 
     src={product.items[0].images[0].large} 
     alt={product.name}
     />
    </div>

    <div className="box">
     <h1>{product.items[2].title}</h1>
     <p>{product.items[2].description}</p>
     <p>{product.items[2].details}</p>
     <img 
     src={product.items[2].images[0].large} 
     alt={product.name}
     />
    </div>

    <div className="box">
     <h1>{product.items[3].title}</h1>
     <p>{product.items[3].description}</p>
     <p>{product.items[3].details}</p>
     <img 
     src={product.items[3].images[0].large} 
     alt={product.name}
     />
    </div>

    <div className="box">
     <h1>{product.items[4].title}</h1>
     <p>{product.items[4].description}</p>
     <p>{product.items[4].details}</p>
     <img 
     src={product.items[4].images[0].large} 
     alt={product.name}
     />
    </div>

    <div className="box">
     <h1>{product.items[5].title}</h1>
     <p>{product.items[5].description}</p>
     <p>{product.items[5].details}</p>
     <img 
     src={product.items[5].images[0].large} 
     alt={product.name}
     />
    </div>

    <div className="box">
     <h1>{product.items[6].title}</h1>
     <p>{product.items[6].description}</p>
     <p>{product.items[6].details}</p>
     <img 
     src={product.items[6].images[0].large} 
     alt={product.name}
     />
    </div>

    <div className="box">
     <h1>{product.items[7].title}</h1>
     <p>{product.items[7].description}</p>
     <p>{product.items[7].details}</p>
     <img 
     src={product.items[7].images[0].large} 
     alt={product.name}
     />
    </div>

    <div className="box">
     <h1>{product.items[8].title}</h1>
     <p>{product.items[8].description}</p>
     <p>{product.items[8].details}</p>
     <img 
     src={product.items[8].images[0].large} 
     alt={product.name}
     />
    </div>

    <div className="box">
     <h1>{product.items[9].title}</h1>
     <p>{product.items[9].description}</p>
     <p>{product.items[9].details}</p>
     <img 
     src={product.items[9].images[0].large} 
     alt={product.name}
     />
    </div>

    <div className="box">
     <h1>{product.items[10].title}</h1>
     <p>{product.items[10].description}</p>
     <p>{product.items[10].details}</p>
     <img 
     src={product.items[10].images[0].large} 
     alt={product.name}
     />
    </div>

    <button className="btn1">1</button>
    of
    <button className="btn1" onClick={() => navigate('/page2')}>2</button>
    </>
  )
  }

  return (
      <div>

      </div>
  )
}



export default Product