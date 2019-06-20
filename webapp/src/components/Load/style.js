import styled from 'styled-components';
import loadImg from '@/assets/images/loading.gif';

export const Loading=styled.img.attrs({src:loadImg})`
    position:fixed;
    top:45%;
    left:50%;
    transform:translate(-50%,-50%);
`;