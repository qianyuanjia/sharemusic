import styled from 'styled-components';

export const BodyWrapper=styled.div`
    max-width:980px;
    margin:0 auto;
    border:1px solid #D3D3D3;
    >header{
        padding:30px 0;
    }
`;
export const SearchInput=styled.section`
    width:420px;
    height:40px;
    margin:0 auto;
    display:flex;
    >input{
        width:370px;
        height:100%;
        border: 1px solid #DADADA;
        border-right:none;
        padding:0;
        border-top-left-radius:4px;
        border-bottom-left-radius:4px;
        padding-left:1em;
        outline:0 none;
        &::placeholder{
            color:#9b9b9b;
        }
    }
    >span{
        width:50px;
        height:100%;
        text-align:center;
        line-height:40px;
        background-color:#f1f1f1;
        border:1px solid #DADADA;
        border-top-right-radius:4px;
        border-bottom-right-radius:4px;
        cursor:pointer;
        user-select:none;
        &:active{
            background-color:#d1d1d1;
        }
    }
`;

