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

export const NetflixButton = styled.button`
    z-index: 15;
    background-color: #e50914;
    color: #FFF;
    border-radius: 5px;
    text-transform: inherit;
    padding: 15px;
    font-size: 1.1rem;
    border: none;
    outline: none;
    cursor: pointer;
`