import React, { useState } from "react";
import Nav from "./Navigation/Nav";
import Product from "./Products/Product";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import {v4 as uuidv4 }from "uuid";
//Database
import products from "./db/data";
import Card from "./components/Card";
const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  // ------Input Filter -----------
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };
  const filteredItems = products.filter(
    (product) =>
      product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) 
      !==-1
  );

  // ------Radio Filter -----------
  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  // ------Buttons Filter -----------
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;
    //Filtering input items
    if (query) {
      filteredProducts = filteredItems;
    }
    //Selected Filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          newPrice === selected ||
         title===selected||
          company === selected
      );
    }
    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={uuidv4()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }
  
  console.log(selectedCategory);
  const result = filteredData(products, selectedCategory, query);
  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Nav query={query} handleInputChange={handleInputChange}/>
      <Recommended handleClick={handleClick} />
      <Product result={result} />
    </>
  );
};

export default App;
