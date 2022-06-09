import React from 'react'
import styles from "../styles/Navbar.module.css"
import Link from "next/link";
function Navbar() {
  return (
    <div className={styles.container}>
       <Link href="/">AGENCYOPS</Link>
        <ul className={styles.list}>
            <li className={styles.listItems}>
            DESIGN
            </li>
            <li className={styles.listItems}>
           DEVELOPMENT
            </li>
            <li className={styles.listItems}>
            PRODUCTION
            </li>
            <li className={styles.listItems}>
           PHOTOGRAPHY
            </li>
            <li className={styles.listItems}>
CONTACT
            </li>

        </ul>


    </div>
  )
}

export default Navbar
