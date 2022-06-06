import React from 'react'
import styles from "../styles/Services.module.css"
import Image from"next/image";
import Link from "next/link";
const Services=({services})=> {
  return (
    <div className={styles.container}>
        
        <h1 className={styles.title}> What We Can Do?</h1>
        <h1 className={styles.subtitle}>Services we can help you with</h1>
        <div className={styles.service}>
          {services.map((service)=>(
            <Link key={service.id} href={`/products/${service.name}`}>
              {service.title}
            </Link>
          )
          )}
        </div>
    </div>
  )
}

export default Services