import React from 'react'
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
 <div className={style.hamburger} onClick={() => setOpen(!open)}>
        <div className={style.line} />
        <div className={style.line} />
        <div className={style.line} />
      </div>
      <ul onClick={()=>setOpen(false)} className={style.menu} style={{ right: open ? "0px" : "-50vw" }}>
        <li className={style.menuItem}>
         HOME
        </li>
        <li className={style.menuItem}>
         DESIGN
        </li>
        <li className={style.menuItem}>
         DEVELOPMENT
        </li>
        <li className={style.menuItem}>
          PRODUCTION
        </li>
        <li className={style.menuItem}>
          PHOTOGRAPHY
        </li>
        <li className={style.menuItem}>
          CONTACT
        </li>
      </ul>
    </div>


    </div>
  )
}

export default Navbar
