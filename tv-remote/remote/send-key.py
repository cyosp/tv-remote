import os, sys
import wakeonlan
from config import *
from samsungtv import SamsungTV


def is_not_alive():
    response = os.system("ping -c 1 -W 1 " + tvIpAddr + " 2>&1 >/dev/null")
    if response == 0:
        return False
    else:
        return True


key = ' '.join(sys.argv[1:])
if key == 'KEY_POWER_ON':
    wakeonlan.send_magic_packet(tvMacAddr)
else:
    SamsungTV(tvIpAddr, tvRemoteToken).send_key(key)
