import React from 'react';
import { Button } from 'react-bootstrap';
import Header from '../../component/homeComponent/header';
import styles from './movieDetail.module.css';

const MovieDetail = () => {
    return (
        <>
            <Header/>
            <div className={styles.container}>
                <div className={styles.contents}>
                    <div className={styles.movieDetailBox}>
                        <div className={styles.movieHeader}>
                            <div className={styles.imgBox}>
                                <img src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85829/85829_320.jpg" alt="브로커 포스터"/>
                                <span>12세 이상</span>
                            </div>
                            <div className={styles.contentsBox}>
                                <div className={styles.title}>
                                    <strong>"브로커"</strong>
                                </div>
                                <div className={styles.score}>
                                    <strong className={styles.percent}>
                                        예매율<span>"26.2"%</span>
                                    </strong>
                                </div>
                                <div className={styles.spec}>
                                    <ul>
                                        <li>
                                            <span>감독 : "누구감독"</span>
                                            <span>배우 : <span>"1번배우"</span></span>     
                                        </li>
                                        <li>
                                            <span>장르 : "드라마"</span>
                                            <span>기본 : "12세 이상" , "129분", "한국"</span>
                                        </li>
                                        <li>
                                            <span>개봉 : "2022.06.08"</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className={styles.like}>
                                    <Button>예매하기</Button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.mainBox}>
                            <div className={styles.storyBox}>
                                <p>"줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리"</p>
                            </div>
                            <div className={styles.graphBox}>
                                <ul className={styles.graph}>
                                    <li>
                                        <strong>성별 예매 분포</strong>
                                        <div className={styles.chart}></div>
                                    </li>
                                    <li>
                                        <strong>연령별 예매 분포</strong>
                                        <div className={styles.chart}></div>
                                    </li>
                                </ul>
                            </div>
                        </div>   
                        <div className={styles.commentBox}>
                            <ul className={styles.commentList}>
                                {/* comment컴포넌트생성 */}
                                <li>댓글1</li>
                                <li>댓글1</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MovieDetail;