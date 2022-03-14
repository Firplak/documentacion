import React from 'react'
import styles from './Categories.module.css'

type Category = {
    name: string,
    desc: string,
    image: string,
    path: string
}

const CategoriesList: Category[] = [
    {
        name: 'Power Apps',
        desc: 'Documentacion de las Power Apps y de la Power Platform en General',
        image: 'https://summitbajracharya.com.np/wp-content/uploads/2020/10/powerapp-2020-icon-1024x1024.png',
        path: '/power-apps'
    },
    {
        name: 'Infraestructura',
        desc: 'Documentacion de la infraestructura en la nube y la infraestructura fisica',
        image: 'https://datawolke.com/wp-content/uploads/2020/02/gestion-de-infraestructura.png',
        path: '/infraestructure'
    },
    {
        name: 'Desarrollos',
        desc: 'Desarrollos ajenos al entorno Power',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png',
        path: '/dev'
    }
]

export default function Categories() {
    return (
    <div className={styles.mainContainer}>
        <div className={styles.categoryContainer}>
            {CategoriesList.map(el => (
                <a href={el.path}>
                <div className={styles.category}>
                    <img className={styles.image} src={el.image}/>
                    <h1>{el.name}</h1>
                    <p>{el.desc}</p>
                </div>
                </a>
            ))}
        </div>
    </div>
    )
}