import { observable, action, computed } from 'mobx';

class MainStore {
  @observable isVisiblePreloader = true;

  @observable lastRoute = '';

  @action
  hidePreloader = () => {
    this.isVisiblePreloader = false;
  };

  @action
  changeRoute = (route) => {
    this.lastRoute = route;
  };

  @computed get getVisiblePreload() {
    return this.isVisiblePreloader;
  }

  @computed get getLastRoute() {
    return this.lastRoute;
  }
}

export default new MainStore();
