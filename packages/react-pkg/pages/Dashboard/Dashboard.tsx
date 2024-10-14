import styles from './Dashboard.module.css'

// 面板首页
export default function Dashboard() {
    return (
        <div className={styles.layout}>
            <aside className={styles.aside}></aside>
            <nav className={styles.nav}></nav>
            <main className={styles.content}></main>
        </div>
    )
}