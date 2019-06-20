import Loadable from 'react-loadable';
import {Load} from '@/components';

function createLoadableComponent(name){
    return Loadable({
        loader: () => import('./'+name),
        loading: Load,
      });
}
export default {
    Home:createLoadableComponent('Home'),
    Register:createLoadableComponent('Register'),
    Login:createLoadableComponent('Login')
}