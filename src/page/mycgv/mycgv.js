import React from 'react';
import Header from '../../component/homeComponent/header';
import UserInfo from '../../component/mycgvComponent/userInfo';
import styles from './mycgv.module.css';

const Mycgv = () => {
    return (
        <>
            <Header/>
            <div className={styles.container}>
                <div className={styles.contents}>
                    <UserInfo/>
                </div> 
            </div>
        </>
    );
};

export default Mycgv;