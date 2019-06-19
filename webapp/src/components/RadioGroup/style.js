import styled from 'styled-components';

export const Wrapper =styled.div`
    margin:0 auto;
    text-align:center;
`;
export const RadioItem=styled.div`
    display:inline-flex;
    align-items:center;
    cursor:pointer;
    margin:0 10px;
    >i{
        width:.8em;
        height:.8em;
        border-radius:50%;
        border:2px solid #0E90D2;
        &.active{
            &:after{
                content:'';
                width:50%;
                height:50%;
                margin:25%;
                border-radius:50%;
                background:#0E90D2;
                display:block;
            }
        }
    }
    >span{
        margin-left:5px;
    }
`;