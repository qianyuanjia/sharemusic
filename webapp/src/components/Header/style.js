import styled,{keyframes} from 'styled-components';
const letterFly=keyframes`
    0%{
        letter-spacing:-2em; 
    }
    25%{
        letter-spacing:2px; 
    }
    50%{
        transform:rotateY(0);
    }
    100%{
        transform:rotateY(360deg);
    }
`;
export const Wrapper=styled.nav`
    transform-style:preserve-3d;
    perspective:1000px;
    border-bottom:1px solid #F0F0F0;
    padding:20px 100px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    >h1{
        font-size:25px;
        color:#EB715C;
        letter-spacing:2px; 
        animation:${letterFly} 4s ease-in;
        display:inline-block;
    }
    >div{
        >a{
            margin-left:20px;
        }
    }
`;
export const BackHome=styled.a.attrs({href:'/home'})`
    text-decoration:none;
    color:#EB715C;
    font-size:16px;
`;
export const BackLogin=styled(BackHome).attrs({href:'/login'})`
    color:#A0A0A0;
`;
export const BackRegister=styled.a.attrs({href:'/register'})`
    color:#EB715C;
    text-decoration:none;
    display:inline-block;
    border:1px solid;
    padding:6px 15px;
    border-radius:20% / 50%;
`;