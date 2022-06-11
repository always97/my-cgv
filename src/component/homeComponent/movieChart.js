import React from 'react';
import { Link } from 'react-router-dom';
import styles from './movieChart.module.css';
import MovieChartItem from './movieChartItem';

const MovieChart = () => {

    // const {chartMovies} = props;
    
    return (
        <div className={styles.movieChartBox}>
            <div className={styles.contents}>
                <div className={styles.tabBox}>
                    <div className={styles.tab}>
                        <h3>
                            <span className={styles.tabTitle}>무비차트</span>
                        </h3>
                    </div>
                    <Link to="/movies" className={styles.viewAll}>전체보기</Link>
                </div>
                <div className={styles.movieCharBox}>
                    <div className={styles.swipBox}>
                        {/* {
                            chartMovies.map((item) => (
                                <MovieChartItem key={item.id} movie={item} />
                            ));
                        } */}
                        <MovieChartItem/>
                        <MovieChartItem/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieChart;