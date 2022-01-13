// dynamic routing

import styles from '../../../styles/Home.module.css';
import {useRouter} from 'next/router';

const ProductDetails = () => {
    const router = useRouter();
    const product = router.query.productId;

    return (
        <div className={styles.title}>
            <h1>Details about product {product}</h1>
        </div>
    );
};

export default ProductDetails;