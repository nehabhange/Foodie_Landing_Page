import React from 'react'
import { useState } from "react";
import styles from "../styles/Navbar.module.css"
import Link from "next/link";
function Navbar() {
  const [open,setOpen]=useState(false);
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
 <div className={styles.hamburger} onClick={() => setOpen(!open)}>
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
      </div>
      <ul onClick={()=>setOpen(false)} className={styles.menu} style={{ right: open ? "0px" : "-50vw" }}>
        <li className={styles.menuItem}>
         HOME
        </li>
        <li className={styles.menuItem}>
         DESIGN
        </li>
        <li className={styles.menuItem}>
         DEVELOPMENT
        </li>
        <li className={styles.menuItem}>
          PRODUCTION
        </li>
        <li className={styles.menuItem}>
          PHOTOGRAPHY
        </li>
        <li className={styles.menuItem}>
          CONTACT
        </li>
      </ul>
    </div>


    
  )
}

export default Navbar
