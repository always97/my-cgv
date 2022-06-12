import React from 'react';
import styles from './comment.module.css';
import { AiOutlineLike } from 'react-icons/ai';

const Comment = (props) => {

    const {info} = props;

    

    return (
        <div className={styles.itemBox}>
            <div>
                아이디 : {info.memberId}
            </div>
            <div>
                내용 : {info.contents}
            </div>
            <div>
                평점 : {info.ratingPoint}
            </div>
            <div className={styles.bottom}>
                <span>등록일 : {info.registerDatetime} </span>
                <span className={styles.likeBtn}><AiOutlineLike/> <span>{info.likesNumber}</span></span>
            </div>
        </div>
    );
};

export default Comment;