import TabsComponent from "@/components/tabs/TabsComponent";
import React from "react";

const TabsPage = () => {
  return (
    <div className="bg-white rounded-lg mx-4 p-4">
      <h1>TabPage</h1>
      <br />
      <br />

      {/** Tabs Components */}
      <TabsComponent items={items}/>
    </div>
  );
};

export default TabsPage;

const items = [
  {
    title: "Tab 1",
    content: (
      <div className="border-2 border-blue-400 rounded-lg p-4">
        <h1 className="text-3xl text-blue-600">Title Test 1</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          ducimus cupiditate repellendus voluptatibus porro commodi, consequatur
          amet nam dolorem esse culpa modi ad cum quod ipsam, cumque asperiores
          placeat obcaecati autem!
        </p>
      </div>
    ),
  },
  {
    title: "Tab 2",
    content: (
      <div className="border-2 border-blue-400 rounded-lg p-4">
        <h1 className="text-3xl text-blue-600">Title Test 2</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          ducimus cupiditate repellendus voluptatibus porro commodi, consequatur
          amet nam dolorem esse culpa modi ad cum quod ipsam, cumque asperiores
          placeat obcaecati autem!
        </p>
      </div>
    ),
  },
  {
    title: "Tab 3",
    content: (
      <div className="border-2 border-blue-400 rounded-lg p-4">
        <h1 className="text-3xl text-blue-600">Title Test 3</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          ducimus cupiditate repellendus voluptatibus porro commodi, consequatur
          amet nam dolorem esse culpa modi ad cum quod ipsam, cumque asperiores
          placeat obcaecati autem!
        </p>
      </div>
    ),
  },
];
