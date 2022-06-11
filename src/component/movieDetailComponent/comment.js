import React from 'react';
import styles from './comment.module.css';

const Comment = () => {

    const {name,contents,date,like}

    

    return (
        <div className={styles.itemBox}>
            <div>
                name
            </div>
            <div>
                contents
            </div>
            <div>
                <span>"날짜"</span>
                <span>"좋아요"</span>
            </div>
        </div>
    );
};

export default Comment;