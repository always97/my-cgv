import { TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import MovieItem from '../../component/allMovieComponent/movieItem';
import Header from '../../component/homeComponent/header';
import styles from './allMovie.module.css';

const AllMovies = () => {

    const [movies,setMovies] = useState([]);

    const [sortKind, setSortKind] = useState(1);
    const [serchKind,setSerchKind]  = useState('title')
    const [serch,setSerch] = useState('');
    
    const handleSerch = async () => {
        const res = await (await axios.get(`/movies/serch`, {
            params: {
                [serchKind] : serch
            }
        })).data;

        setMovies(res.data);
        setSerch('');
    }
    
    const getMovies = async () => {
        const res = await (await axios.get('')).data;

        setMovies(res.data);
    }

    useEffect(()=> {

    },[])

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
                        <div className={styles.serchBox}>
                            <select onChange={(e)=> setSerchKind(e.target.value)}>
                                <option title="현재 선택됨" selected="" value="1">영화제목</option>
                                <option title="현재 선택됨" selected="" value="2">영화배우</option>
                            </select>
                            <TextField className={styles.inputSerch} label="영화제목, 배우등을 검색하세요" variant="outlined"
                                onChange={(e)=> setSerch(e.target.value)}
                            />
                            <Button className={styles.btn} onClick={()=>handleSerch()}>검색하기</Button>
                        </div>
                        <div>
                            <select onChange={(e)=> setSortKind(e.target.value)}>
                                <option title="현재 선택됨" selected="" value="1">예매율순</option>
                                <option title="현재 선택됨" selected="" value="2">평점순</option>
                            </select>
                            <Button className={styles.btn}>Go</Button>
                        </div>

                    </div>
                    <div className={styles.movieListBox}>
                        <MovieItem/>
                        <MovieItem/>
                        <MovieItem/>
                        <MovieItem/>
                        <MovieItem/>
                    </div>
                </div>
            </div>
            
        </>
    );
};

export default AllMovies;