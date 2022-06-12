import React, { useState } from 'react';
import Header from '../../component/homeComponent/header';
import styles from './reserve.module.css';
import { BsFillSunriseFill,BsFillMoonStarsFill } from 'react-icons/bs';
import TheaterInfo from '../../component/reserveComponent/theaterInfo';
import { Button } from 'react-bootstrap';

const Reserve = () => {

    const [selectMovie,setSelectMovie] = useState('브로커');
    const [onSeatBtn,setOnSeatBtn] = useState(false);
    const [seatSelect,setSeatSelect] = useState(false);
    const [peopleCount,setPeopleCount] = useState(1);

    return (
        <>
        <Header/>
        <div className={styles.container}>
            <div className={styles.ticket}>
                <div className={styles.step}>
                    <div className={styles.step1}>
                        {
                            seatSelect ? 
                                <>
                                    <div className={`${styles.section} ${styles.sectionSeat}`}>
                                        <div className={styles.head}>
                                            <h3 className={styles.sreader}>인원 / 좌석</h3>
                                        </div>
                                        <div className={styles.body}>
                                            <div className={styles.peopleBox}>
                                                <h2>인원</h2>
                                                <select onChange={(e)=> setPeopleCount(e.target.value)}>
                                                    <option title="현재 선택됨" selected="" value="1">1명</option>
                                                    <option title="현재 선택됨" selected="" value="2">2명</option>
                                                    <option title="현재 선택됨" selected="" value="3">3명</option>
                                                    <option title="현재 선택됨" selected="" value="4">4명</option>
                                                </select>
                                            </div>
                                            <div className={styles.seatBox}>

                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.section} ${styles.sectionBook}`}>
                                        <div className={styles.head}>
                                            <h3 className={styles.sreader}>최종 선택</h3>
                                        </div>
                                        <div className={styles.body}>
                                            <div className={styles.priceBox}>
                                                <h2>가격 : </h2>
                                            </div>
                                            <div className={styles.lastBtn}>
                                                <Button>예매하기</Button>
                                            </div>
                                        </div>
                                    </div>
                                </>
                                :
                                <>
                                    <div className={`${styles.section} ${styles.sectionMovie}`}>
                                        <div className={styles.head}>
                                            <h3 className={styles.sreader}>영화</h3>
                                        </div>
                                        <div className={styles.body}>
                                            <div className={styles.movieSelect}>
                                                <div className={styles.movieList}>
                                                    <ul className={styles.movieListBox}>
                                        {/* movies.map((item)=> <li key={item.id} 
                                                                    className={setSelectMovie === item.title ? styles.selected : styles.movieItem}
                                                                    onClick={()=> setSelectMovie(item.title)}
                                                                >
                                                                    {item.title}
                                                                </li>) */}
                                                        <li className={styles.movieItem}>브로커</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.section} ${styles.sectionTime}`}>
                                        <div className={styles.head}>
                                            <h3 className={styles.sreader}>시간</h3>
                                        </div>
                                        <div className={styles.body}>
                                            <div className={styles.timeOption}>
                                                <span class="morning"><BsFillSunriseFill/>조조</span>
                                                <span class="night"><BsFillMoonStarsFill/>심야</span>
                                            </div>
                                            <div className={styles.timeListBox}>
                                                <TheaterInfo/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.section} ${styles.sectionBtn}`}>
                                        <div className={styles.head}>
                                            <h3 className={styles.sreader}>최종</h3>
                                        </div>
                                        <div className={styles.body}>
                                            <div className={styles.seatBtnBox}>
                                                {
                                                    onSeatBtn ? 
                                                        <Button className={styles.seatBtnOn} onClick={()=> setSeatSelect(true)}>좌석선택</Button>
                                                        :
                                                        <Button className={styles.seatBtn} onClick={()=> setSeatSelect(true)}>좌석선택</Button>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </>
                        }
                        
                    </div>
                </div>

            </div>
        </div>
        </>
    );
};

export default Reserve;