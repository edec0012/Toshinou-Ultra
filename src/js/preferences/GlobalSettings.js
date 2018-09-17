class GlobalSettings {
  constructor() {
    let self = this;
    chrome.storage.local.get({
      headerColor: "#191919",
      headerOpacity: "0.9",
      windowColor: "#191919",
      windowOpacity: "0.8",
      timerTick: 300,
      enableRefresh: false,
      refreshToReconnect: false,
      refreshTime: 60,
      speedFormat: 'hour',
      windowsToTabs: false,
    }, items => {
      self._settings = items;
    });
  }

  get headerColor() {
    return this._settings.headerColor;
  }

  get headerOpacity() {
    return this._settings.headerOpacity;
  }

  get windowColor() {
    return this._settings.windowColor;
  }

  get windowOpacity() {
    return this._settings.windowOpacity;
  }

  get timerTick() {
    return this._settings.timerTick;
  }

  get speedFormat() {
    return this._settings.speedFormat;
  }

  get enableRefresh() {
    return this._settings.enableRefresh;
  }
  get refreshToReconnect(){
    return this._settings.refreshToReconnect;
  }

  get refreshTime() {
    return this._settings.refreshTime;
  }

  get windowsToTabs() {
    return this._settings.windowsToTabs;
  }

  get reviveType() {
    return this._settings.reviveType;
  }

  get reviveLimit() {
    return this._settings.reviveLimit;
  }
}
