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
    image: "https://svgshare.com/i/pVf.svg",
    path: "/documentacion/docs/desarrollos",
  },
  {
    name: "Procedimientos e infraestructura",
    desc: "Documentacion de procedimientos e infraestructura",
    image: "https://svgshare.com/i/pVK.svg",
    path: "/documentacion/blog",
  },
  {
    name: "Cursos",
    desc: "Cursos de programacion",
    image: "https://svgshare.com/i/pV9.svg",
    path: "/documentacion/docs/cursos/access",
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
