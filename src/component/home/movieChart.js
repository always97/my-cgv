import React from 'react';
import { Link } from 'react-router-dom';
import styles from './movieChart.module.css';

const MovieChart = () => {
    return (
        <div className={styles.movieChartBox}>
            <div className={styles.contents}>
                <div className={styles.tabBox}>
                    <div className={styles.tab}>
                        <h3>
                            <span className={styles.tabTitle}>무비차트</span>
                        </h3>
                    </div>
                    <Link to="/" className={styles.viewAll}>전체보기</Link>
                </div>
            </div>
        </div>
    );
};

export default MovieChart;