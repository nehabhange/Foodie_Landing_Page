import React from 'react'
import styles from "../styles/Navbar.module.css"
import Link from "next/Link"
function Navbar() {
  return (
    <div className={styles.container}>
       <Link href="/">AGENCYOPS</Link>
        <ul className={styles.list}>
            <li className={styles.listItems}>
            <Link href="/">DESIGN</Link>
            </li>
            <li className={styles.listItems}>
            <Link href="/">DEVELOPMENT</Link>
            </li>
            <li className={styles.listItems}>
            <Link href="/">PRODUCTION</Link>
            </li>
            <li className={styles.listItems}>
            <Link href="/">PHOTOGRAPHY</Link>
            </li>
            <li className={styles.listItems}>
            <Link href="/">CONTACT</Link>
            </li>

        </ul>


    </div>
  )
}

export default Navbar