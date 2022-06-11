import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";
import styled from "styled-components";

const InputReview = () => {

    const ARRAY = [0, 1, 2, 3, 4];
    
    const [point, setPoint] = useState([false, false, false, false, false]);

    const handlePoint = (index) => {
        let pointStates = [...point];
        for (let i = 0; i < 5; i++) {
        pointStates[i] = i <= index ? true : false;
        }
        setPoint(point)
    };

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