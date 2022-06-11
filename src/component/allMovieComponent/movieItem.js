import React from 'react';
import styles from './movieItem.module.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const MovieItem = () => {
    return (
        <div className={styles.itemBox}>
            <div className={styles.imgBox}>
                <strong className={styles.rank}>No.'1'</strong>
                <Link to='/'>
                    <span className={styles.thumbImg}>
                        <img src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85829/85829_320.jpg" alt="브로커 포스터" />
                        <span>12세등급?</span>
                    </span>
                </Link>
            </div>
            <div className={styles.contentsBox}>
                <Link to='/'><strong>브로커</strong></Link>
                <div className={styles.score}>
                    <strong className={styles.percent}>
                        예매율
                        <span>"29.0%"</span>
                    </strong>
                </div>
                <div className={styles.openDateBox}>
                    <strong>"2022.06.20" 개봉</strong>
                </div>
                <div className={styles.reserveLink}>
                    <Link to='/'>
                        <Button>예매하기</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MovieItem;