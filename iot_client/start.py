import requests as req
from device import Device
from gpio import switchDevice
import time
import sys


ip = sys.argv[1]

def main():
    credentials:map = getCredentials()
    token: str = setup(credentials)
    device = Device(credentials["name"],credentials["password"],token)
    getStateLoop(device)
    pass

def getStateLoop(device:Device):
    while(True):
        res = req.get(f"http://{ip}:5000/api/device/state",headers={'Authorization':'Bearer '+device.token}).json()
        if device.state != int(res["state"]):
            device.state = int(res["state"])
            print(device.state)
            switchDevice(device.state)
        time.sleep(1)
        pass
    pass

def setup(credentials:map):
    res = req.get(f"http://{ip}:5000/api/device/token",json={"name":credentials["name"],"password":credentials["password"]}).json()
    return res["token"]
    pass

def getCredentials() -> map:
    name:str = input("device name: ")
    password:str = input("password: ")
    return {"name":name,"password":password}
    pass

if __name__ == "__main__":
    main()