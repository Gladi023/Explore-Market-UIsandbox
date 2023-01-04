//import logo from './logo.svg';
// import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo'
import SearchForm from './Components/SearchForm/SearchForm';
import UserDash from './Components/UserDash/UserDash';
import ProductCard from './Components/ProductCard/ProductCard';
import ParticlesBg from 'particles-bg'


import './App.css';


function App() {
  return (
    <div className="App">
   <ParticlesBg type="cobweb" bg={true} />
      <Navigation />
      <Logo />
       <SearchForm />
       <UserDash />
       <ProductCard />
     {/*  <Home />
      <Travel />
      <Product />
      <UserSearchHistory />
  <Footer />*/}



    </div>
  );
}

export default App;
