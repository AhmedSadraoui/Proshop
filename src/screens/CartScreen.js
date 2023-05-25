import React, { useState } from 'react';
import { Row, Col, Image, ListGroup, Card, Button, FormControl, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';

const CartScreen = () => {
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')) || []);
  const navigate = useNavigate();

  const handleRemoveItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item._id !== itemId);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const handleQtyChange = (itemId, newQty) => {
    const updatedCartItems = cartItems.map((item) =>
      item._id === itemId ? { ...item, qty: newQty } : item
    );
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const checkoutHandler = () => {
    navigate('/login');
  };

  const renderCartItems = () => {
    return cartItems.map((item) => (
      <ListGroup.Item key={item._id}>
        <Row>
          <Col md={2}>
            <Image src={item.image} alt={item.name} fluid rounded />
          </Col>
          <Col md={3}>
            <Link to={`/product/${item._id}`}>{item.name}</Link>
          </Col>
          <Col md={1}>${item.price}</Col>
          <Col md={2}>
            <FormControl
              as="select"
              value={item.qty}
              onChange={(e) => handleQtyChange(item._id, Number(e.target.value))}
            >
              {[...Array(item.countInStock).keys()].map((x) => (
                <option key={x + 1} value={x + 1}>
                  {x + 1}
                </option>
              ))}
            </FormControl>
          </Col>
          <Col md={1}>
            <Button type="button" variant="light" onClick={() => handleRemoveItem(item._id)}>
              <i className="fas fa-trash"></i>
            </Button>
          </Col>
        </Row>
      </ListGroup.Item>
    ));
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <Alert variant="info">
          Your cart is empty. <Link to="/">Go Back</Link>
        </Alert>
      ) : (
        <Row>
          <Col md={9}>{renderCartItems()}</Col>
          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h2>Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items</h2>
                  ${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    type="button"
                    className="btn-block"
                    disabled={cartItems.length === 0}
                    onClick={checkoutHandler}
                  >
                    Proceed to Checkout
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default CartScreen;
