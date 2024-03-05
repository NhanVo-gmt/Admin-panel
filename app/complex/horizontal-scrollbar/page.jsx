import HorizontalScrollbar from "@/components/horizontal-scrollbar/HorizontalScrollbar";
import React from "react";

const categories = [
  "Gaming",
  "Beauty and Makeup",
  "Technology and Gadgets",
  "Food and Cooking",
  "Travel and Adventure",
  "Fitness and Wellness",
  "Fashion and Style",
  "DIY and Crafts",
  "Music and Music Videos",
  "Comedy and Humor",
  "Education and Learning",
  "Health and Nutrition",
  "Home Decor and Interior Design",
  "Parenting and Family",
  "Science and Technology",
  "Art and Creativity",
  "News and Current Affairs",
  "Sports and Athletics",
  "Pets and Animals",
  "Lifestyle and Vlogs",
];

const users = new Array(20).fill(0).map((item, index) => {
  return {
    id: index,
    username: `U#${index}`,
    image: `https://i.pravatar.cc/150?img=${Math.random() * 50}`,
  }
})

const HorizontalScrollbarPage = () => {
  return (
    <div className="bg-white rounded-lg mx-4 p-4">
      <h1>HorizontalScrollbarPage</h1>
      <br />
      <br />
      <h1 className="text-blue-800 text-2xl">Youtube categories</h1>
      <HorizontalScrollbar scrollbar={false}>
        {
          categories.map((item, index) => (
            <div key={index} className="border-2 border-gray-200 p-1 shrink-0 rounded-lg hover:border-gray-400">
              <h1>{item}</h1>
            </div>
          ))
        }
      </HorizontalScrollbar>
      <br />
      <br />
      <h1 className="text-pink-800 text-2xl">Instagram categories</h1>
      <HorizontalScrollbar>
        {
          users.map((item, index) => (
            <div key={index} className="shrink-0">
              <img src={item.image} alt={item.username} className="w-14 h-14 rounded-full cursor-pointer hover:scale-125 transition-all duration-200"/>
            </div>
          ))
        }
      </HorizontalScrollbar>
    </div>
  );
};

export default HorizontalScrollbarPage;
