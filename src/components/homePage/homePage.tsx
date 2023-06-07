import React, { useState } from "react";
import "./homePage.css";
import { AppsJson } from "../../data/util/homePageApps";
import { Route, Link, Routes } from "react-router-dom";

export default function HomePage() {
  const [apps, setApps] = useState(0);
  return (
      <div className="cards-list">
      {AppsJson.map((obj) => (  (obj.id != "card") ?      
          <Link to={obj.path}><Card key={obj.id} details={obj} /></Link>:null
      ))}
      </div>
  );
}
function Card(obj: any) {
  return (
      <div className={obj.details.id}>
       {obj.details.image != null?  
       <div className="card_image"><img src={obj.details.image} alt="" /></div>:null}
      <div className="card_title title-white">
          <p>{obj.details.title}</p>
      </div>
      </div>
  );
}
