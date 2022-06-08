import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../component/home/header';
import MovieCarousel from '../../component/home/movieCarousel';
import styles from './home.module.css';

const Home = () => {




    
    return (
        <div>
            <Header/>
            <div className={styles.container}>
                <div className={styles.trailler}>
                    <div className={styles.contents}>
                        <div className={styles.videoBox}>
                            <video src="https://adimg.cgv.co.kr/images/202205/Witch2/220527_Witch2_1080x608.mp4" type="video/mp4"></video>
                            <strong className={styles.traillerTitle}>마녀(魔女) Part2. The Other One</strong>
                            <span className={styles.traillerText}>
                                모든 것의 시작,
                                <br/>
                                또 다른 존재가 깨어난다!
                            </span>
                            <div className={styles.traillerControllerBox}>
                                <Link to="/" className={styles.detailViewLink}>상세보기</Link>
                                <button className={styles.videoStop}>Stop</button>
                                <button className={styles.videoSoundOnOff}>Sound On</button>
                            </div>
                        </div>
                    </div>
                </div>
                <MovieCarousel/>
            </div>
        </div>
    );
};

export default Home;