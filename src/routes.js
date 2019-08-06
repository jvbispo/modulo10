import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import signIn from './pages/singIn';
import signUp from './pages/singUp';

export default createAppContainer(createSwitchNavigator({ signIn, signUp }));
