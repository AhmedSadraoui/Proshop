import React from 'react'
import {Row,Col} from 'react-bootstrap'
import products from '../products'
import Product from '../components/Product'
export const HomeScreen = () => {
  const gamingProducts = products.filter(product => product.category === "Gaming");
  console.log(gamingProducts);
  const latestProducts=products.filter(product => product.category==="Electronics")
  
  return (
    <>
    <h1>Latest Products</h1>
    <Row>
        {latestProducts.map((product)=>(

                       <Col key={product._id} sm={12} md={6} lg={4} xl={3}><Product product={product}/></Col>
                       
        ))}
    <h1>Gaming Products</h1>
    <Row>
        {gamingProducts.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product}/>
          </Col>
        ))}
      </Row>
    



    </Row>
    </>
  )
}
