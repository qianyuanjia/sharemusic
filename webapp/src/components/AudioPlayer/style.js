import styled from 'styled-components';
import HeadImg from '@/assets/images/head.jpg';

const getPx=(scale,toSize)=>{
    return scale*toSize/100+'px';
}
export const Wrapper=styled.div`
    width:${props=>getPx(props.scale,500)};
    margin:0 auto;
    padding:${props=>getPx(props.scale,35)} ${props=>getPx(props.scale,25)} ${props=>getPx(props.scale,15)};
    border-radius:${props=>getPx(props.scale,20)};
    box-shadow:0 0 20px 2px #ccc;
    background:#8FAACA;
    >header{
        display:flex;
        justify-content:space-beween;
        align-items:center;
        height:${props=>getPx(props.scale,130)}
    }
`;
export const HeadPic=styled.div`
    width:${props=>getPx(props.scale,130)};
    height:100%;
    border-radius:${props=>getPx(props.scale,10)};
    box-shadow:0 0 10px 1px #666;
    background:#20304A url(${props=>props.src || HeadImg}) center no-repeat;
    background-size:100% 100%;
    margin-right:${props=>getPx(props.scale,20)};
`;
export const PlayControls=styled.div`
    flex:1;
    height:100%;
    >h2{
        color:#fff;
        font-weight:900;
        font-size:16px;
        margin-bottom:8px;
    }
    >h3{
        color:#CCCCC8;
        font-size:14px;
    }
    >section{
        margin-top:${props=>getPx(props.scale,20)};
        display:flex;
        justify-content:space-between;
        align-items:center;
        font-size:16px;

        >div:first-child{
            i{
                cursor:pointer;
            }
            i:nth-of-type(2){
                margin:0 10px;
            }
        }
        >div:last-child{
            display:flex;
            align-items:center;
            >i{
                margin-right:5px;
            }
        }
    }
    >footer{
        margin-top:${props=>getPx(props.scale,10)};
        display:flex;
        justify-content:space-between;
        align-items:center;
        >p{
            i{
                margin-left:15px;
                font-size:16px;
            }
        }
    }
`;

export const SongList=styled.ul`
    margin-top:20px;
    padding:10px 25px;
    background:rgba(0,0,0,0.2);
    border-radius:10px;
    box-shadow:0 0 3px #444;
    max-height:350px;
    overflow-y:auto;   
`;
export const ListItem=styled.li`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:7px 0;
    border-bottom:1px solid;
    color:#ddd;
    font-size:14px;
    cursor:pointer;
    >div{
        >span:first-child{
            display:inline-block;
            min-width:2em;
            + span{
                margin:0 10px;
            }
        }
    }
`;
export const LoadMore=styled.li`
    color:#fff;
    text-align:center;
    margin-top:15px;
    cursor:pointer;
    &:active{
        color:#ccc;
    }
`;