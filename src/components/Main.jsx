import React from "react";
import styles from "./Main.module.css";

const Main = ({children}) =>
<div className={styles.container}>
    <div className={styles.content}>
        {children}
    </div>
</div>


export default Main;
