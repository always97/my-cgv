import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import Header from '../../component/homeComponent/header';
import MovieChart from '../../component/homeComponent/movieChart';

import styles from './home.module.css';

const Home = () => {

    const [playOn,setPlayOn] = useState(true);
    const [mute,setMute] = useState(true);
    const [chartMovies,setChartMovies] = useState([]);

    const getChartMovies = async() =>{
        try {
            const res = await (await axios.get("dsfsdf")).data;
            setChartMovies(res.data);
        } catch {
            console.log("GET차트무비 api 에러");
        }

    }

    useEffect(()=> {
        // getChartMovies();
    }, [])
    
    return (
        <div>
            <Header/>
            <div className={styles.container}>
                <div className={styles.trailler}>
                    <div className={styles.contents}>
                        <div className={styles.videoBox}>
                            <ReactPlayer 
                                className={styles.video}
                                url='https://adimg.cgv.co.kr/images/202205/Witch2/220527_Witch2_1080x608.mp4' 
                                playing={playOn}
                                muted={mute}
                                width={"100%"}
                                height={"100%"}
                            /> 
                            {/* <video src="https://adimg.cgv.co.kr/images/202205/Witch2/220527_Witch2_1080x608.mp4" type="video/mp4"></video> */}
                            <strong className={styles.traillerTitle}>마녀(魔女) Part2. The Other One</strong>
                            <span className={styles.traillerText}>
                                모든 것의 시작,
                                <br/>
                                또 다른 존재가 깨어난다!
                            </span>
                            <div className={styles.traillerControllerBox}>
                                <Link to="/" className={styles.detailViewLink}>상세보기</Link>
                                <button className={playOn ? styles.videoPlay : styles.videoStop} onClick={()=> setPlayOn(!playOn)}>Stop</button>
                                <button className={mute ? styles.videoSoundOff : styles.videoSoundOn} onClick={()=> setMute(!mute)} >SoundOnOff</button>
                            </div>
                        </div>
                    </div>
                </div>
                <MovieChart chartMovies={chartMovies}/>
            </div>
        </div>
    );
};

export default Home;