import React, { useState } from "react";
import {
  Checkbox,
  FormControlLabel,
  Slider,
  IconButton,
} from "@mui/material";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewComfyIcon from "@mui/icons-material/ViewComfy";
import ViewListIcon from "@mui/icons-material/ViewList";

import cardimg1 from "../../assets/logoimg/wallet3.webp";
import cardimghover1 from "../../assets/logoimg/hovercard1.webp";
import cardimg3 from "../../assets/logoimg/Img4.webp";
import cardimghover3 from "../../assets/logoimg/wallethover4.webp";
import cardimg4 from "../../assets/logoimg/Img5.webp";
import cardimghover4 from "../../assets/logoimg/wallethover4.webp";
import cardimg5 from "../../assets/logoimg/wallet6.webp";
import cardimghover5 from "../../assets/logoimg/wallethover6.webp";

const products = [
  {
    id: 1,
    text: "Timeless - Black",
    price: 5000,
    discount: 2500,
    img: cardimg1,
    hover: cardimghover1,
    stock: true,
    colors: ["#000000", "#654321", "#5C0120"],
  },
  {
    id: 2,
    text: "Hunt - Black",
    price: 2990,
    discount: 1390,
    img: cardimg3,
    hover: cardimghover3,
    stock: false,
    colors: ["#000000", "#654321", "#D2B48C"],
  },
  {
    id: 3,
    text: "Triune - Black",
    price: 5899,
    discount: 1500,
    img: cardimg4,
    hover: cardimghover4,
    stock: true,
    colors: ["#000000", "#A0522D", "#5C0120"],
  },
  {
    id: 4,
    text: "Grade - Black",
    price: 8130,
    discount: 1500,
    img: cardimg5,
    hover: cardimghover5,
    stock: true,
    colors: ["#000000", "#3e3e3e"],
  },
];

const Cards = () => {
  const [grid, setGrid] = useState(4);
  const [price, setPrice] = useState([0, 38000]);
  const [inStock, setInStock] = useState(false);
  const [outStock, setOutStock] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div className="px-4 md:px-10 py-10">
      <div className="flex flex-col md:flex-row gap-8 mt-10">
        
        {/* Sidebar */}
        <div className="w-full md:w-[250px]">
          <h2 className="font-semibold text-lg mb-4">Filters</h2>

          <div className="mb-6">
            <h3 className="font-medium mb-2">Availability</h3>

            <FormControlLabel
              control={
                <Checkbox
                  checked={inStock}
                  onChange={() => setInStock(!inStock)}
                />
              }
              label="In Stock"
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={outStock}
                  onChange={() => setOutStock(!outStock)}
                />
              }
              label="Out of Stock"
            />
          </div>

          <div>
            <h3 className="font-medium mb-2">Price</h3>

            <Slider
              value={price}
              onChange={(e, newVal) => setPrice(newVal)}
              max={38000}
            />

            <div className="flex justify-between text-sm mt-2">
              <span>Rs {price[0]}</span>
              <span>Rs {price[1]}</span>
            </div>
          </div>
        </div>

        {/* Products Side */}
        <div className="flex-1">

          {/* Top Bar */}
          <div className="flex justify-between items-center mb-6">
            <p className="text-sm text-gray-500">Featured</p>

            <div className="flex gap-2">
              <IconButton onClick={() => setGrid(2)}>
                <ViewListIcon />
              </IconButton>
              <IconButton onClick={() => setGrid(3)}>
                <ViewComfyIcon />
              </IconButton>
              <IconButton onClick={() => setGrid(4)}>
                <ViewModuleIcon />
              </IconButton>
            </div>
          </div>

          {/* GRID */}
          <div
            className={`grid gap-6 ${
              grid === 4
                ? "grid-cols-2 md:grid-cols-4"
                : grid === 3
                ? "grid-cols-2 md:grid-cols-3"
                : "grid-cols-1 md:grid-cols-2"
            }`}
          >
            {products
              .filter((p) => p.price >= price[0] && p.price <= price[1])
              .filter((p) => {
                if (inStock && !p.stock) return false;
                if (outStock && p.stock) return false;
                return true;
              })
              .map((item, index) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition"
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                >
                  {/* IMAGE */}
                  <div className="relative">
                    <img
                      src={hoverIndex === index ? item.hover : item.img}
                      alt={item.text}
                      className="w-full h-[260px] object-cover"
                    />

                    {/* Discount */}
                    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                      {Math.round(
                        ((item.price - item.discount) / item.price) * 100
                      )}
                      % OFF
                    </div>

                    {/* OUT OF STOCK */}
                    {!item.stock && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                        <span className="text-white font-bold">
                          OUT OF STOCK
                        </span>
                      </div>
                    )}
                  </div>

                  {/* CONTENT */}
                  <div className="p-4 text-center">
                    <h3 className="text-sm font-semibold uppercase">
                      {item.text}
                    </h3>

                    <div className="mt-1">
                      <p className="font-semibold">
                        Rs. {item.discount}
                      </p>
                      <p className="text-gray-400 line-through text-sm">
                        Rs. {item.price}
                      </p>
                    </div>

                    {/* COLORS */}
                    <div className="flex justify-center gap-2 mt-3">
                      {item.colors.map((color, i) => (
                        <span
                          key={i}
                          className="w-4 h-4 rounded-full border"
                          style={{ backgroundColor: color }}
                        ></span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;