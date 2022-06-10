import React from 'react';
import { Link } from 'react-router-dom';
import styles from './userInfo.module.css';
import { BsPlusSquare } from 'react-icons/bs';

const UserInfo = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoBox}>
                <div className={styles.userInfo}>
                    <div className={styles.imgBox}>
                        <span className={styles.thumbImg}>
                            <img src="http://img.cgv.co.kr/R2014/images/common/default_profile.gif" alt="프로필 사진"/>
                            <span className={styles.profileMask}></span>
                        </span>
                    </div>
                    <div className={styles.contentsBox}>
                        <div className={styles.nameBox}>
                            <strong>'회원'님</strong>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.reserveBox}>
                <div className={styles.myReserveHead}>
                    <h3>MY 예매내역</h3>
                    <p>
                        <em>'0'건</em>
                        <Link to='/' className={styles.link}>
                            <BsPlusSquare/>
                        </Link>
                    </p>
                </div>
                <div className={styles.reservedListBox}>
                    고객님의 최근 예매 내역이 없습니다.
                </div>
            </div>
        </div>
    );
};

export default UserInfo;