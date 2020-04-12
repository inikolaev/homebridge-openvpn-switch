# VPN Switch Accessory

Accessory that allows to switch between different VPN servers.

## Installation

```bash
npm i -g @inikolaev/homebridge-openvpn-switch
```

## Configuration

```json
"accessories": [{
    "accessory": "VPN Switch",
    "name": "VPN",
    "configs": [{
        "name": "VPN 1",
        "config": "/etc/openvpn/vpn1.ovpn"
    }, {
        "name": "VPN 2",
        "config": "/etc/openvpn/vpn2.ovpn"
    }]
}]
```