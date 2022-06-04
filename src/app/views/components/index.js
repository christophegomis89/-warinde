import { Navbar } from "../..";
import { list } from "../../data/data";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartPage } from "./CartPage";
import Home from "./Home";
const App = (props) => {
  const { items, saveLocalStorage } = props;
  const [category, setCategory] = useState(0);
  const [isFiltering, setIsFiltering] = useState(false); //Filtre de base

  const [filtered, setFiltered] = useState(false); //Produits filtrés

  //  Fonction pour charger les catégories par l'index au click
  const loadCategory = (i) => {
    setCategory(i);
  };
  // Fonction de recherche des produits
  const search = (input) => {
    const fullList = list.flat();
    let result = fullList.filter((item) => {
      const name = item.name.toLocaleLowerCase();
      const term = input.toLocaleLowerCase();

      return name.indexOf(term) > -1;
    });
    setFiltered(result);
  };
  useEffect(() => {
    saveLocalStorage(items);
  }, [items]);

  return (
    <>
      <BrowserRouter>
        <Navbar filter={search} setIsFiltering={setIsFiltering} />
        <div className="container">
          <Routes>
            <Route exact path="/panier" element={<CartPage />} />
            <Route
              exact
              path="/"
              element={
                <Home
                  loadCategory={loadCategory}
                  category={category}
                  data={list}
                  setIsFiltering={setIsFiltering}
                  filter={search}
                  isFiltering={isFiltering}
                  filtered={filtered}
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
