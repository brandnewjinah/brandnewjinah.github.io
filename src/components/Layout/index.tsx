import { Outlet } from "react-router-dom";

import styles from "./index.module.scss";

const Layout = () => {
    return (
        <div className={styles.layout}>
            <main className={styles.main}>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
