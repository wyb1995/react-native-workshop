import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import PhoneContactList from './components/PhoneContactList';
import PhoneContactDetail from './components/PhoneContactDetail';

const AppRouter = () => (
  <Router>
    <Stack key="root">
      <Scene
        key="phoneContactList"
        component={PhoneContactList}
        title="通讯录"
        initial
      />
      <Scene
        key="phoneContactDetail"
        component={PhoneContactDetail}
        title="详情"
      />
    </Stack>
  </Router>
);

export default AppRouter;