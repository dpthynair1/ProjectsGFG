import { Navbar } from "../Navbar/index";
import dishes from "../../api/dishes.json";
import { DishCard } from "../ProductCard/index";
import { useEffect, useState } from "react";
import { useCart } from "../../context/cart-context";

import React from "react";

export const Foods = () => {
  const [menu, setMenu] = useState(dishes);
  const [categories, setCategories] = useState([]);
  const [prices, setPrices] = useState(0);
  const [filteredItems, setFilteredItems] = useState(dishes);
  const [minPrice, setMinPrice] = useState();
  const [maxPrice, setMaxPrice] = useState();
  //const { cart } = useCart([]);

  useEffect(() => {
    const category = menu.reduce((acc, dish) => {
      if (!acc.includes(dish.category)) {
        acc.push(dish.category);
      }
      return acc;
    }, []);
    console.log(category);
    if (!category.includes("All")) {
      category.unshift("All"); // Add "All" at the beginning
    }
    setCategories(category);
    console.log("Categories", category);
    const prices = menu
      .reduce((acc, dish) => {
        if (!acc.includes(dish.price)) {
          acc.push(dish.price);
        }
        return acc;
      }, [])
      .sort((a, b) => a - b);
    setPrices(prices);
    console.log("prices", prices);
  }, []);

  const onCategoryClick = (category) => {
    if (category === "All") {
      setFilteredItems(menu);
    } else {
      const filterByCategory = menu.filter(
        (dish) => dish.category.toLowerCase() === category.toLowerCase()
      );

      setFilteredItems(filterByCategory);
    }
  };
  const filterItems = (min, max, items) => {
    const filtered = items.filter(
      (dish) => dish.price >= min && dish.price <= max
    );
    setFilteredItems(filtered);
  };
  const onPriceChange = () => {
    filterItems(minPrice, maxPrice, menu);
  };

  return (
    <>
      <Navbar />

      <main className="pt-8 ">
        <div className="flex gap-4 p-8 justify-center mb-4">
          {categories?.length > 0 &&
            categories?.map((category) => (
              <div
                onClick={() => onCategoryClick(category)}
                className="bg-red-400 p-4 justify-items-center font-medium  rounded-full justify-center
                 hover:cursor-pointer "
              >
                {category}
              </div>
            ))}
        </div>
        <div className="flex gap-4 p-8 justify-center mb-4">
          <div>
            <label>Min Price:</label>
            <input
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(Number(e.target.value))}
              onBlur={onPriceChange}
            />
          </div>
          <div>
            <label>Max Price:</label>
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              onBlur={onPriceChange}
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-8 p-8  justify-center">
          {filteredItems?.length > 0 &&
            filteredItems.map((item) => (
              <DishCard
                key={item.id}
                dish={item}
              />
            ))}
        </div>
      </main>
    </>
  );
};
