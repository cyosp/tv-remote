# tv-remote

![Stable version](https://img.shields.io/badge/stable-1.0.0-blue.svg)
[![BSD-3 license](https://img.shields.io/badge/license-BSD--3--Clause-428F7E.svg)](https://tldrlegal.com/license/bsd-3-clause-license-%28revised%29)

Remote for Samsung TV

## Prerequisites

Serveur side:
* PHP
* Python 3 with packages:
  * wakeonlan
  * websocket-client

## Configuration

It's the Python file `tv-remote/remote/config.py` which contains variables:
 * tvIpAddr : TV IP address
 * tvMacAddr : TV MAC address
 * tvRemoteToken : TV remote token

### Create a token

First you must configure TV IP address and then run:

```
cd tv-remote/remote
python3 send-key.py
```

You must use original Samsung TV remote to allow the created token to be validated.</br>
Token is then displayed on standard output and must be stored in configuration file.

## License

**tv-remote** is released under the BSD 3-Clause License.<br/>
See the bundled file `LICENSE` for details.
