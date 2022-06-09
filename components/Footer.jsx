import React from "react";
import styles from "../styles/Footer.module.css";
import Image from "next/image";

function Footer() {
    return ( <
        div className = { styles.container } >
        <
        div className = { styles.card } >
        <
        h1 className = { styles.title } > AGENCYOPS CREATIVES < /h1>{" "} <
        h1 className = { styles.linkTitle } >
        <
        a href = "/"
        passHref >
        <
        span > WORK WITH US < /span>{" "} <
        Image src = "/img/link.png"
        width = "40px"
        height = "40px"
        alt = "" / >
        <
        /a>{" "} <
        /h1>{" "} <
        /div>{" "} <
        div className = { styles.cardL } >
        <
        div className = { styles.cardItem } >
        45 ADAM STREET, < br / > INDIA { " " } <
        /div>{" "} <
        div className = { styles.cardItem } >
        CONTACT @AGENCYOPS.DEV < br / > 111 _438_5244 { " " } <
        /div>{" "} <
        /div>{" "} <
        div className = { styles.cardS } >
        <
        div className = { styles.cardItem } >
        FOLLOW US:
        <
        br / > __FB __IN __BE __TW { " " } <
        /div>{" "} <
        div className = { styles.cardItem } > { " " }©
        2022 AGENCYOPS, < br / >
        ALL RIGHTS RESERVED { " " } <
        /div>{" "} <
        /div>{" "} <
        /div>
    );
}

export default Footer;