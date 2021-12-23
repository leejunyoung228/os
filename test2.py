from picamera import PiCamera
import time
import RPi.GPIO as GPIO
from db import Database
picdb=Database.Database()

GPIO.setmode(GPIO.BCM)

pirPin = 7
GPIO.setup(pirPin, GPIO.IN, GPIO.PUD_UP)
camera = PiCamera()
while True:
    if GPIO.input(pirPin) == GPIO.HIGH:
        try:
            now = time.ctime()
            name = '/home/pi/web/static/{}.jpg'.formet(now)
            camera.start_preview()
            time.sleep(1)
            camera.capture('/home/pi/web/static/{}.jpg'.formet(now))
            camera.stop_preview()
            picdb.insert(name)
        except:
            camera.stop_preview()
        time.sleep(5)