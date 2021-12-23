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
    if GPIO.input(pirPin) == 1:
        now = time.ctime()
        name = '{}.jpg'.format(now)
        camera.start_preview()
        time.sleep(1)
        camera.capture('/home/pi/web1/static/{}'.format(name))
        camera.stop_preview()
        picdb.insert(name)
        time.sleep(5)
