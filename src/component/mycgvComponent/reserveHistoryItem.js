import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import styles from './reserveHistoryItem.module.css';
import Modal from "react-modal";
import InputReview from './inputReview';

const ReserveHistoryItem = () => {

    const [modalOpen, setModalOpen] = useState(false);


    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.imgBox}>
                    <img src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85829/85829_320.jpg" alt="브로커 포스터"/>
                </div>
                <div className={styles.infoBox}>
                    <ul className={styles.list}>
                        <li className={styles.title}>영화제목</li>
                        <li>관람일시</li>
                        <li>관람극장</li>
                        <li>관람인원</li>
                        <li>결제금액</li>
                    </ul>
                </div>
            </div>
            <div className={styles.btnBox}>
                <Button>감상평남기기</Button>
                <Button>예매취소</Button>
            </div>
            <Modal
                isOpen={modalOpen}
                ariaHideApp={false}
                shouldFocusAfterRender={true}
                onRequestClose={() => setModalOpen(false)}
                style={{
                overlay: {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(126, 147, 149, 0.83)",
                },
                content: {
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    border: "1px solid #ccc",
                    background: "#fff",
                    overflow: "auto",
                    WebkitOverflowScrolling: "touch",
                    borderRadius: "4px",
                    outline: "none",
                    padding: "20px",
                    width: "800px",
                    height: "800px",
                },
                }}
            >
                <InputReview/>
                <Button onClick={() => setModalOpen(false)}>닫기</Button>
            </Modal>

        </div>
    );
};

export default ReserveHistoryItem;