const news = [
  "Flat shipping rate of PKR 299 on all orders within Pakistan.",
  "For shipping across Gulf countries, please",
   "Flat shipping rate of PKR 299 on all orders within Pakistan.",
   

];

function NewsTicker() {
  return (
    <div className="bg-red-900 w-[100%]  text-white h-10 flex justify-center items-center  overflow-hidden whitespace-nowrap">
      <div className="flex animate-ticker  hover:[animation-play-state:paused]">
        

        {news.map((item, i) => (
          <span key={i} className="mx-8 text-[15.6px]  ">
         {item}
          </span>
        ))}

     

      </div>
    </div>
  );
}

export default NewsTicker;
