let Service, Characteristic, Homebridge;

module.exports = (homebridge) => {
  Homebridge = homebridge;
  Service = homebridge.hap.Service;
  Characteristic = homebridge.hap.Characteristic;
  
  class OpenVPNSwitch {
    constructor(log, config) {
      this.log = log;
      this.name = config.name;
      this.configs = config.configs;
      this.activeSwitch = null;
  
      this.services = this.configs.map(({ name, config }) => {
        const service = new Service.Switch(name, Homebridge.hap.uuid.generate(config))
        service.getCharacteristic(Characteristic.On)
          .on('get', (callback) => callback(null, this.activeSwitch === service))
          .on('set', (on, callback) => {
            if (on) {
              if (this.activeSwitch) {
                this.activeSwitch.setCharacteristic(Characteristic.On, false);
              }
  
              this.activeSwitch = service;
            } else {
              this.activeSwitch = null;
            }
  
            callback();
          });
        return service;
      });
  
      this.log(this.services);
    }
  
    getServices() {
      return this.services;
    }
  }

  homebridge.registerAccessory('homebridge-openvpn-switch', 'VPN Switch', OpenVPNSwitch);
};
