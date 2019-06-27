import styled from 'styled-components';

export const Wrapper =styled.div`
    background:#445571;
    border-radius:${props=>parseInt(props.style.height)/2+'px'};
    overflow:hidden;
    cursor:pointer;
    >div{
        background:#3585a8;
        width:${props=>props.percent+'%'};
        height:100%;
        border-radius:inherit;
    }
`;