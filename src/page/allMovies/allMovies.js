import React from 'react';
import { Button } from 'react-bootstrap';
import Header from '../../component/homeComponent/header';
import styles from './allMovie.module.css';

const AllMovies = () => {
    return (
        <>
            <Header/>
            <div className={styles.container}>
                <div className={styles.contents}>
                    <div className={styles.movieChartBox}>
                        <div className={styles.headBox}>
                            <h3>무비차트</h3>
                        </div>
                    </div>
                    <div className={styles.sortBox}>
                        <select>
                            <option title="현재 선택됨" selected="" value="1">예매율순</option>
                            <option title="현재 선택됨" selected="" value="1">평점순</option>
                        </select>
                        <Button className={styles.btn}>Go</Button>
                    </div>
                    <div className={styles.movieListBox}>
                        
                    </div>
                </div>
            </div>
            
        </>
    );
};

export default AllMovies;