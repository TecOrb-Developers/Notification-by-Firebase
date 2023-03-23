## Send and Receive Notification using Firebase in node js (Send Notification code  src/helper/send_notification) and (Receive Notification code  src/pu blic/firebase-messaging-sw)
## Introduction
`We can send and receive notification using firebase in node js`
### create firebase account
### declare project name in firebase 
### use firebase server key

## Send notification setup
`var FCM = require('fcm-node');`
    `var serverKey = "gfrjdikcxvfkmc9eew9003w0909ewokfd,"; //server key`
    `var fcm = new FCM(serverKey);`
    `let notification:any = {title: title,body: body,sound: 'https://res.cloudinary.com/tecorbssvan/video/upload/v1650879605/sounds/mixkit-happy-bells-notification-937_hghli0.wav'}`
    
`var message:any = {to: tokens };`
`message.notification = notification`
        `message.data = data  `  
`    fcm.send(message, function (err:any, response:any) {if (err) {console.log("Something has gone wrong in sending push!", err);} else {console.log("Successfully sent with response: ", response);}});`


## Setup Steps:
`npm install`
### install fcm-node
`npm install fcm-node`
### local server
`npm run start:dev`
### prod build
`npm run build`
### prod build run
`node dist/index.js`




