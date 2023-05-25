import React,{useState} from 'react';
import { Form, Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button,FormControl } from 'react-bootstrap';
import Rating from '../components/Rating';
import products from '../products';
import { useParams,useNavigate} from 'react-router-dom';




const ProductScreen = () => {
  const [qty, setQty] = useState(1);
  const { _id } = useParams();
  const navigate = useNavigate();
  console.log(_id);
  console.log(products); // Check the contents of the products array

  const product = products.find((p) => p._id === _id);
  console.log(product);
  const addToCartHandler = () => {
    const selectedProduct = {
      _id: product._id,
      name: product.name,
      price: product.price,
      image: product.image,
      countInStock:product.countInStock,
      qty: Number(qty),
    };

    // Update the cart state using local storage or a state management solution
    // For simplicity, let's assume we're using local storage
    const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const updatedCartItems = [...existingCartItems, selectedProduct];
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

    navigate(`/cart/${_id}?qty=${qty}`)  };
  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={product.rating} text={`${product.numReviews}`} />
            </ListGroup.Item>
            <ListGroup.Item>
              Price: ${product.price}
            </ListGroup.Item>
            <ListGroup.Item>
              Description: ${product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>
                    Price:
                  </Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item >
                <Row>
                  <Col>
                    Status:
                  </Col>
                  <Col>
                    {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                  </Col>
                </Row>
              </ListGroup.Item>
              {product.countInStock > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>Qty</Col>
                    <Col>
                      <FormControl as='select' value={qty} onChange={(e) => setQty(e.target.value)}>
                        {[...Array(product.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>{x + 1}</option>
                        ))}
                      </FormControl>
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}
              <ListGroup.Item>
                <Button className='btn-block' type='button' disabled={product.countInStock === 0} onClick={addToCartHandler} >Add To Cart</Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
