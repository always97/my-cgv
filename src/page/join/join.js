import React, { useState } from 'react';
import styles from './join.module.css';
import { Box, FormControlLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material';
import Header from '../../component/homeComponent/header';
import { Button, FormControl } from 'react-bootstrap';

const Join = () => {

    const [userInfo,setUserInfo] = useState({
        id: '',
        password : '',
        gender : '',
        age : '',
        phone: ''
    })


    const handleChange = (e) => {
        e.preventDefault();
        console.log("e.타겟:", e.target);
    
        const { value, name } = e.target;
        setUserInfo({
            ...userInfo,
            [name]: value,
        });
    };

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
                                    value={userInfo.id}
                                    onChange={handleChange}
                                    helperText="Please enter your id"
                                    id="demo-helper-text-misaligned"
                                    label="id"
                                />
                                <TextField
                                    className={styles.inputBox}
                                    value={userInfo.password}
                                    onChange={handleChange}
                                    helperText="Please enter your password"
                                    id="helper-text-misaligned"
                                    type="password"
                                    label="password"
                                />
                                
                                <RadioGroup
                                    aria-labelledby="radio-buttons-group"
                                    name="controlled-radio-buttons-group"
                                    className={styles.inputBox}
                                    value={userInfo.gender}
                                    onChange={handleChange}
                                >
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                </RadioGroup>
                                <div className={styles.selectBox}>
                                    <label id='select-age'>Age</label>  
                                    <Select
                                        className={styles.inputBox}
                                        labelId="select-age"
                                        id="select"
                                        value={userInfo.age}
                                        label="Age"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={10}>10대</MenuItem>
                                        <MenuItem value={20}>20대</MenuItem>
                                        <MenuItem value={30}>30대</MenuItem>
                                        <MenuItem value={40}>40대</MenuItem>
                                        <MenuItem value={50}>50대</MenuItem>
                                        <MenuItem value={60}>60대</MenuItem>
                                        <MenuItem value={70}>70대</MenuItem>
                                        <MenuItem value={80}>80대</MenuItem>
                                        <MenuItem value={90}>90대</MenuItem>
                                    </Select>   
                                </div>
                                <TextField
                                    className={styles.inputBox}
                                    helperText=" "
                                    id="helper-text-aligned-no-helper"
                                    label="Phone"
                                    value={userInfo.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            <Button>가입하기</Button>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    );
};

export default Join;