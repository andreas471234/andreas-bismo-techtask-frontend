import { store } from './store';
// import appActions from './app/action';

export default () =>
  new Promise(() => {
    store.dispatch();
  });
