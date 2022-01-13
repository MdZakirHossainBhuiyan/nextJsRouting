import styles from '../styles/Home.module.css';
import Link from 'next/link';

function HomePage(){
    return (
        <div>
            <h1 className={styles.title}>Home Page</h1>
            <Link href='/about'>
                <a>About</a>
            </Link><br />
            <Link href='/profile'>
                <a>Profile</a>
            </Link><br />
            <Link href='/product'>
                <a>Product</a>
            </Link>
            
        </div>
    )
}

export default HomePage