import styled from 'styled-components';
import { InputBase } from '@material-ui/core';

export const NetflixInput = styled(InputBase)`
    z-index: 30;
    background: #FFF;
    padding: 25.5px;
    height: 30px;
    border-radius: 5px;
    border: none;
`

const handleWidth = wide => {
    switch(wide){
        case "fullwidth": return "100%";
        case "medium" : return "260px";
        case "small": return    "165px";
        default: return "160px"
    }
};

export const NetflixButton = styled.button`
    z-index: 15;
    background-color: ${({color}) => color === "gray" ? "lightgray" : "#e50914"};
    color: #FFF;
    border-radius: ${({radius}) => radius ? "5px" : null};
    text-transform: inherit;
    padding: 15px;
    font-size: 1.1rem;
    border: none;
    outline: none;
    cursor: pointer;
    width: ${({wide}) => handleWidth(wide)};
`