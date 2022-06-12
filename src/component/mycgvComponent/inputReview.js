import { TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaStar } from "react-icons/fa";
import styled from "styled-components";
import styles from './inputReview.module.css';

const InputReview = (props) => {

    const {setModalOpen} = props;

    const ARRAY = [0, 1, 2, 3, 4];
    
    const [point, setPoint] = useState([false, false, false, false, false]);
    const [contents,setContents] = useState('');

    const handlePoint = (index) => {
        let pointStates = [...point];
        for (let i = 0; i < 5; i++) {
        pointStates[i] = i <= index ? true : false;
        }
        setPoint(point)
    };

    const handleRegister = () => {
      const commentInfo = {
        ticketingId:1 ,
        ratingPoint:1 ,
        contents
      }
      axios.post("http://localhost:8050/rating/create", commentInfo,);
      setModalOpen(false);
    }

    return (
        <Wrap>
            <p className="text-raiting">평점</p>
            <Stars>
            {ARRAY.map((el, idx) => {
                return (
                <FaStar
                    key={idx}
                    size="50"
                    onClick={() => handlePoint(el)}
                    className={point[el] && "yellowStar"}
                />
                );
            })}
            </Stars>
            <br/><br/><br/>
            <TextField
                id="outlined-basic"
                label="내용"
                variant="outlined"
                value={contents}
                name="postContents"
                onChange={(e)=> setContents(e.target.value)}
                multiline
                rows={10}
                maxRows={15}
              />
              <Button className={styles.btn} onClick={()=>handleRegister()}>등록하기</Button>
        </Wrap>
    );
};

export default InputReview;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15px;
`;

const Stars = styled.div`
  display: flex;
  padding-top: 5px;

  & svg {
    color: gray;
    cursor: pointer;
  }

  :hover svg {
    color: #fcc419;
  }

  & svg:hover ~ svg {
    color: gray;
  }

  .yellowStar {
    color: #fcc419;
  }
`;