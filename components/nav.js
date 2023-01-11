import Link from 'next/link'
import styles from 'styles/nav.module.css'

export default function Nav() {
    return (
        <nav>
            <ul className={styles.list}>
                <li>
                    <Link href="/">
                        <p>Home</p>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <p>About</p>
                    </Link>
                </li>
                <li>
                    <Link href="/blog">
                        <p>Blog</p>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
