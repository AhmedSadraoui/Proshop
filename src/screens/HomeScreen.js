import React from 'react'
import {Row,Col} from 'react-bootstrap'
import products from '../products'
import Product from '../components/Product'
export const HomeScreen = () => {
  const gamingProducts = products.filter(product => product.category === "Gaming");
  console.log(gamingProducts);
  const latestProducts=products.filter(product => product.category==="Electronics")
  const phoneProducts=products.filter(product => product.category === "Phones");
  const headPhoneProducts=products.filter(product => product.category === "Headphones");

  
  return (
    <>
    <h1>Latest Products</h1>
    <Row>
        {latestProducts.map((product)=>(

                       <Col key={product._id} sm={12} md={6} lg={4} xl={3}><Product product={product}/></Col>
        ))}
    </Row>
    <h1>Gaming Products</h1>
    <Row>
        {gamingProducts.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product}/>
          </Col>
        ))}
      </Row>
      <h1>Phones & Accessories</h1>
    <Row>
        {phoneProducts.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product}/>
          </Col>
        ))}
      </Row>
      <h1>HEADPHONES</h1>
    <Row>
        {headPhoneProducts.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product}/>
          </Col>
        ))}
      </Row>
      
    </>
  )
}
