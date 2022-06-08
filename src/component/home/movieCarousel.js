import React from 'react';
import { Link } from 'react-router-dom';
import styles from './movieCarousel.module.css';

const MovieCarousel = () => {
    return (
        <div className={styles.movieChartBox}>
            <div className={styles.contents}>
                <div className={styles.tabBox}>
                    <div className={styles.tab}>
                        <h3>
                            <Link to="/" className={styles.active}>무비차트</Link>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieCarousel;