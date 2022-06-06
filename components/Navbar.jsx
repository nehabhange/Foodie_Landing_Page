import React from 'react'
import styles from "../styles/Navbar.module.css"
import Link from "next/Link"
function Navbar() {
  return (
    <div className={styles.container}>
        <Link href="/">AVOCADO</Link>
        <ul className={styles.list}>
            <li className={styles.listItems}>
            <Link href="/products/design">DESIGN</Link>
            </li>
            <li className={styles.listItems}>
            <Link href="/products/development">DEVELOPMENT</Link>
            </li>
            <li className={styles.listItems}>
            <Link href="/products/production">PRODUCTION</Link>
            </li>
            <li className={styles.listItems}>
            <Link href="/products/photography">PHOTOGRAPHY</Link>
            </li>
            <li className={styles.listItems}>
            <Link href="/products/contact">CONTACT</Link>
            </li>

        </ul>


    </div>
  )
}

export default Navbar