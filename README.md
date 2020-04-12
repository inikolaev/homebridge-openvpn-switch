Accessory configuration example:

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