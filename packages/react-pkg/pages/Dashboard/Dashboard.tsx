import styles from './Dashboard.module.css'

// 面板首页
export default function Dashboard() {
    return (
        <div className={styles.layout}>
            <nav className={styles.nav}></nav>
            <aside className={styles.aside}></aside>
            <div className={styles['action-bar']}></div>
            <main className={styles.content}></main>
        </div>
    )
}