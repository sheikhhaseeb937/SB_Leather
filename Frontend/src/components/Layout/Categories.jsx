// import React from 'react';

// const categories = [
//   {
//     title: 'Wallets',
//     image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop',
//   },
//   {
//     title: 'Bags',
//     image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop',
//   },
//   {
//     title: 'Backpacks',
//     image: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=800&auto=format&fit=crop',
//   },
// ];

// const CategorySection = () => {
//   return (
//     <section className="bg-stone-50 py-16 px-6">
//       {/* Header Section */}
//       <div className="max-w-7xl mx-auto text-center mb-12">
//         <h2 className="text-4xl md:text-5xl font-semibold tracking-wide text-stone-900 mb-4">
//           Our Categories
//         </h2>
//         <p className="text-stone-600 max-w-2xl mx-auto  tracking-wide">
//           Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
//         </p>
//       </div>

//       {/* Grid Container */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
//         {categories.map((item, index) => (
//           <div
//             key={index}
//             className="relative h-[450px] rounded-3xl overflow-hidden group shadow-lg"
//           >
//             {/* Image */}
//             <img
//               src={item.image}
//               alt={item.title}
//               className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//             />

//             {/* Dark Overlay for readability */}
//             <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />

//             {/* Content */}
//             <div className="absolute top-8 left-8">
//               <span className="text-white/80 uppercase  text-xs font-semibold tracking-wide block mb-2">
//                 Categories
//               </span>
//               <h3 className="text-white text-3xl font-serif font-bold tracking-wide ">
//                 {item.title}
//               </h3>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default CategorySection;

import img1 from "../../assets/logoimg/Img1.webp";
import img2 from "../../assets/logoimg/Img2.webp";
import img3 from "../../assets/logoimg/Img3.webp";
import img4 from "../../assets/logoimg/Img4.webp";
import img5 from "../../assets/logoimg/Img5.webp";
import img6 from "../../assets/logoimg/Img6.webp";

const ZoomCard = () => {
  const imges = [
    {
      img: img1,
      TagName: "Men's bags",
    },
    {
      img: img2,
      TagName: "Men's Wallets",
    },
    {
      img: img3,
      TagName: "Ladies wallets",
    },
    {
      img: img4,
      TagName: "Ladies Bags",
    },
    {
      img: img5,
      TagName: "RFID wallets",
    },
    {
      img: img6,
      TagName: "Travel essentials",
    },
  ];
  return (
    <div>
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-12 mt-[100px]">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-wide text-stone-900 mb-4">
          Our Categories{" "}
        </h2>{" "}
        <p className="text-stone-600 max-w-2xl mx-auto  tracking-wide">
          {" "}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 p-4">
        {imges.map((item, index) => (
          <div
            key={index}
            className="relative group w-full overflow-hidden z-10 shadow-lg"
          >
            <div></div>
            <img
              src={item.img}
              alt="Men's Wallets"
              className="w-full h-auto transform transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute bottom-4 left-4 text-white">
              <h2 className="text-3xl font-bold uppercase tracking-wide">
                {item.TagName}
              </h2>
              <button className="relative mt-2 px-4 py-2 text-black text-sm font-medium overflow-hidden group border border-white bg-transparent">
                <span className="absolute inset-0 bg-white transform translate-x-0 group-hover:translate-x-full transition-transform duration-500 ease-in-out z-0"></span>
                <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                  VIEW PRODUCTS
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ZoomCard;
