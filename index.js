"use strict";

var Service, Characteristic, HomebridgeAPI;

module.exports = function(homebridge) {

  Service = homebridge.hap.Service;
  Characteristic = homebridge.hap.Characteristic;
  HomebridgeAPI = homebridge;
  homebridge.registerAccessory("homebridge-openvpn-switch", "VPN Switch", OpenVPNSwitch);
}

function OpenVPNSwitch(log, config) {
  this.log = log;
  this.services = [1,2,3,4,5,6,7,8,9].map((i) => new Service.Switch(`Switch ${i}`));
}  

OpenVPNSwitch.prototype.getServices = function() {
  return this.services;
}

