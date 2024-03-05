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

const HorizontalScrollbarPage = () => {
  return (
    <div className="bg-white rounded-lg mx-4 p-4">
      <h1>HorizontalScrollbarPage</h1>
      <br />
      <br />
      <HorizontalScrollbar>
        {
          categories.map((item, index) => (
            <div key={index} className="border-2 border-gray-200 p-1 shrink-0 rounded-lg hover:border-gray-400">
              <h1>{item}</h1>
            </div>
          ))
        }
      </HorizontalScrollbar>
    </div>
  );
};

export default HorizontalScrollbarPage;
