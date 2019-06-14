import styled,{keyframes} from 'styled-components';
const colors={
    success:'#87d068',
    error:'#E13530'
};
const show=(topProp)=>keyframes`
    from{
        top:-40px;
    }
    to{
        top:${topProp};
    }
`;
const quit=(topProp)=>keyframes`
    from{
        top:${topProp};
    }
    to{
        top:-40px;
    }
`;
export const Wrapper = styled.div`
    position:fixed;
    left:50%;
    transform:translateX(-50%);
    background:#fff;
    border-radius:2px;
    box-shadow:0 0 5px 1px #ccc;
    padding:6px 10px;
    font-size:14px;
    display:flex;
    justify-content:center;
    animation:${props=>show(props.top || '100px')} .5s ease-in-out forwards,
   ${props=>quit(props.top || '100px')} .3s ease-in-out  ${props=>props.duration || '2s'} forwards;
    >i{
        margin-right:3px;
        color:${props=>colors[props.type || 'success']};
    }
`;