from gpiozero import LED

# on aktiviert das Relay und es gibt keinen Strom mehr weiter ==> Lampe aus
# off deaktiviert das Relay und es gibt Strom weiter ==> Lampe an

led:LED = LED(15)
led.on()

def switchDevice(state: int):
    led.off() if state == 1 else led.on()
    pass