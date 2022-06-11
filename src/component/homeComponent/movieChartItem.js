import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './movieChartItem.module.css';

const MovieChartItem = (props) => {

    const {movie} = props;

    const [btnVison,setBtnVison] = useState(false);

    return (
        <div className={styles.itemBox} 
            onMouseEnter={()=> setBtnVison(true)}
            onMouseLeave={()=> setBtnVison(false)}
        >
            <div className={styles.imgBox}>
                <img src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85829/85829_320.jpg" alt="브로커"/>
                <div className={styles.ageLimit}>
                    <img src="https://img.cgv.co.kr/R2014/images/common/flag/age/grade-12.png" alt="12세 이상"/>
                </div>
                <div className={`${styles.btnBox} ${btnVison ? styles.vision : styles.hide}`}>
                    <Link to="/movies/detail/1"><Button className={styles.btn}>상세보기</Button></Link>
                    <Link to="/reserve"><Button className={styles.btn}>예매하기</Button></Link>
                </div>
            </div>
            <div className={styles.movieInfo}>
                <strong className={styles.movieName}>브로커</strong>
                <span>예매율 77.7%</span>
            </div>

        </div>
    );
};

export default MovieChartItem;