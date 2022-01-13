import styles from '../../../../styles/Home.module.css';
import {useRouter} from 'next/router';

const Review = () => {
    const router = useRouter();
    // const reviewId = router.query.reviewId;
    // const productId = router.query.productId;
    const {reviewId, productId} = router.query;

    return (
        <div className={styles.title}>
            <h1>review {reviewId} for product {productId}</h1>
        </div>
    );
};

export default Review;