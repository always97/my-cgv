import axios from 'axios';
import React, { useEffect } from 'react';
import Header from '../../component/homeComponent/header';
import UserInfo from '../../component/mycgvComponent/userInfo';
import styles from './mycgv.module.css';

const Mycgv = () => {

    const [ticketList,setTicketList] = useEffect([]);

    const memberId

    const getTicketList = async () => {
        const res = await (await axios.get(`sdf/id=${id}`)).data;

        setTicketList(res.data);
    }

    useEffect(()=> {
        // getTicketList();
    },[])

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