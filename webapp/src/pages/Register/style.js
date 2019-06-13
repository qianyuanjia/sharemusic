import styled from 'styled-components';
export const Wrapper = styled.div`
    border:1px solid #DDDDDD;
    margin:100px auto 0;
    max-width:840px;
    padding:40px;
`;
export const InputWrapper=styled.div`
    font-size:16px;
    margin:10px 0;
    >span:first-child{
        color:#99999F;
        margin:10px;
        display:inline-block;
        min-width:70px;
    }
    >span:last-child{
        color:#E13530;
        margin-left:10px;
        font-size:14px;
    }
    >input{
        width:314px;
        padding:15px 18px;
        &::placeholder{
            font-size:16px;
            color:#CBD2D9;
        }
    }
`;

export const SubmitButton=styled.div`
    background:#E13530;
    width:354px;
    margin-left:90px;
    color:#fff;
    font-size:18px;
    border-radius:4px;
    text-align:center;
    padding:15px 0;
    cursor:pointer;
    margin-top:20px;
    user-select:none;
    &:active{
        background:#c53934;
    }
`;