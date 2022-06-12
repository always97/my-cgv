import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Header from '../../component/homeComponent/header';
import Comment from '../../component/movieDetailComponent/comment';
import styles from './movieDetail.module.css';

const MovieDetail = () => {

    const { id } = useParams();
    const [movie,setMovie] = useState('');

    const getMovie = async () => {
        const res = await (await axios.get(`http://localhost:8050/movie/detail/${id}`)).data;

        setMovie(res.data);
    }

    useEffect(()=> {
        getMovie();
    },[])

    return (
        <>
            <Header/>
            <div className={styles.container}>
                <div className={styles.contents}>
                    <div className={styles.movieDetailBox}>
                        <div className={styles.movieHeader}>
                            <div className={styles.imgBox}>
                                <img src={movie.image} alt="브로커 포스터"/>
                                
                            </div>
                            <div className={styles.contentsBox}>
                                <div className={styles.title}>
                                    <strong>{movie.title}</strong>
                                </div>
                                <div className={styles.score}>
                                    <strong className={styles.percent}>
                                        예매율<span>{movie.ticketingRate}%</span>
                                    </strong>
                                </div>
                                <div className={styles.spec}>
                                    <ul>
                                        <li>
                                            <span>배우 : 
                                                {   movie.actorList &&
                                                    movie.actorList.map((actor)=> <span className={styles.actorName}>{actor.name}</span>)}
                                            </span>     
                                        </li>
                                        <li>
                                            <span>장르 : {movie.genre}</span>
                                            <span>기본 : {movie.ageLimit}세 이상 , {movie.runtime}분 </span>
                                        </li>
                                        <li>
                                            <span>개봉 : {movie.openingTime}</span>
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
                                { 
                                    movie.readRatingDTOList &&
                                        movie.readRatingDTOList.map((item) => <Comment key={item.id} info={item}/>)  
                                }
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MovieDetail;