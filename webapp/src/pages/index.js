import Loadable from 'react-loadable';
import Loading from './Load';

function createLoadableComponent(name){
    return Loadable({
        loader: () => import('./'+name),
        loading: Loading,
      });
}
export default {
    Home:createLoadableComponent('Home'),
    Register:createLoadableComponent('Register'),
}