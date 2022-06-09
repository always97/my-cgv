import React from 'react';
import styles from './movieChartItem.module.css';

const MovieChartItem = (props) => {

    const {movie} = props;

    return (
        <div className={styles.itemBox}>
            <div className={styles.imgBox}>
                <img src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85829/85829_320.jpg" alt="브로커"/>
                <div className={styles.ageLimit}>
                    <img src="https://img.cgv.co.kr/R2014/images/common/flag/age/grade-12.png" alt="12세 이상"/>
                </div>
            </div>
            <div className={styles.movieInfo}></div>

        </div>
    );
};

export default MovieChartItem;