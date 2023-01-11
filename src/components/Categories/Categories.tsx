import React from "react";
import styles from "./Categories.module.css";

type Category = {
  name: string;
  desc: string;
  image: string;
  path: string;
};

const CategoriesList: Category[] = [
  {
    name: "Desarrollos",
    desc: "Documentacion de codigo",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png",
    path: "/docs/desarrollos",
  },
];

export default function Categories() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.categoryContainer}>
        {CategoriesList.map((el) => (
          <a href={el.path}>
            <div className={styles.category}>
              <img className={styles.image} src={el.image} />
              <h1>{el.name}</h1>
              <p>{el.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
