import React from "react";
import Header from './components/Header'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Container } from "react-bootstrap"
import Footer from './components/Footer'
import ProductScreen from "./screens/ProductScreen";
import { HomeScreen } from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen"
import LoginScreen from "./screens/LoginScreen";
function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} exact />
            <Route path='/product/:_id' element={<ProductScreen />} />
            <Route path="/cart/:id?" element={<CartScreen />} />
            <Route path="/login" element={<LoginScreen />} />

          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>

  );
}

export default App;
