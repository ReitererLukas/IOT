# IOT

## Webservice for Raspberry IOT
Written in typescript (nodejs)
Database is mongoose

### What can it do?
* IOT Device Management
  * Device gets unique name (==> token)
* IOT State Management
  * should it be on or off
* User Management for access
  * login
  * register
  * User token system
* Add a new device (also to user account)
  * User sets a name (webservice generates token)
  * name has to be set on the IOT device
  * device gets active by the first get msg

### Communication with the IOT device
Device sends get message every second (maybe every 0.5 seconds)
* Device sends get message with json file (includes token)
* Webservice checks state of the IOT device in the db 
* Webservice returns state of the of IOT device

### Communication with the UserInterface
User sends all messages with his user token

## Raspberry (IOT Device) Web Client
Tjango (python) web client
Device sends get message every second (maybe every 0.5 seconds) to retrieve his state
Includes his name token in every get

## User Interface
User Interface via Website (Angular, Vue, React???) or Mobile App