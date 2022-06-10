import React, { useState } from 'react';
import styles from './login.module.css';
import { TextField } from '@mui/material';

import { Button } from 'react-bootstrap';
import Header from '../../component/homeComponent/header';

const Login = () => {

    const [userId, setUserId] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const handleInputId = (e) => {
        console.log(e.target.value);
        setUserId(e.target.value);
    }
    const handleInputPassword = (e) => {
        console.log(e.target.value);
        setUserPassword(e.target.value);
    }

    return (
        <>
            <Header/>
            <div className={styles.container}>
                <div className={styles.contents}>
                    <div className={styles.loginWrap}>
                        <div className={styles.loginBox}>
                            <div className={styles.loginInput}>
                                <TextField
                                    className={styles.inputBox}
                                    value={userId}
                                    onChange={handleInputId}
                                    helperText="Please enter your id"
                                    id="demo-helper-text-misaligned"
                                    label="id"
                                />
                                <TextField
                                    className={styles.inputBox}
                                    value={userPassword}
                                    onChange={handleInputPassword}
                                    helperText="Please enter your password"
                                    id="demo-helper-text-misaligned"
                                    type="password"
                                    label="password"
                                />
                            </div>
                            <Button>로그인</Button>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    );
};

export default Login;