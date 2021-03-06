import React from 'react';
import { Link } from 'react-router-dom';

import styles from './header.module.css';

const Header = () => {

    

    return (
        <div className={styles.header}>
            <div className={styles.headerContent}>
                <div className={styles.contents}>
                    <h1>
                        <Link to="/" className={styles.link}>
                            <img src="https://img.cgv.co.kr/R2014/images/common/logo/logoRed.png" alt="CGV"/>
                        </Link>
                        <span>CULTUREPLEX</span>
                    </h1>
                    <ul className={styles.memberInfo}>
                        <li>
                            {/* 로그인 및 회원가입 링크주소 to="/" 설정 */}
                            <Link to="/" className={styles.link}>
                                <img src="https://img.cgv.co.kr/R2014/images/common/ico/loginPassword.png" alt="로그인"/>
                                <span>로그인</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className={styles.link}>
                                <img src="https://img.cgv.co.kr/R2014/images/common/ico/loginJoin.png" alt="회원가입"/>
                                <span>회원가입</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <nav className={styles.nav}>
                <div className={styles.contents}>
                    <ul className={styles.navMenu}>
                        <li>
                            <h2>
                                <Link to="/" className={styles.link}>영화</Link>
                            </h2>
                        </li>
                        <li>
                            <h2>
                                <Link to="/" className={styles.link}>극장</Link>
                            </h2>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;