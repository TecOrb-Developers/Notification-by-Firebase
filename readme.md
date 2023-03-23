## Send and Receive Notification using Firebase in node js (Send Notification code  src/helper/send_notification) and (Receive Notification code  src/pu blic/firebase-messaging-sw)
## Introduction
`We can send and receive notification using firebase in node js`
### create firebase account
### declare project name in firebase 
### use firebase server key

## Using  scripts
`importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js');`

`importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-messaging.js');`

## Push notification setup
var FCM = require('fcm-node');

    var serverKey = "gfrjdikcxvfkmc9eew9003w0909ewokfd,"; //server key

    var fcm = new FCM(serverKey);

    let notification:any = {

        title: title,

        body: body,

        sound: 'https://res.cloudinary.com/tecorbssvan/video/upload/v1650879605/sounds/mixkit-happy-bells-notification-937_hghli0.wav',

    }

    var message:any = {

        to: tokens  

    };

        message.notification = notification

        message.data = data    

    fcm.send(message, function (err:any, response:any) {

        if (err) {

            console.log("Something has gone wrong in sending push!", err);

        } else {

            console.log("Successfully sent with response: ", response);

        }
        
    });

##  Receive firbase notification setup
importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js');

importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-messaging.js');

// Your web app's Firebase configuration

var firebaseConfig = {

    apiKey: "AIzaSyBT_5IZX5AHInqPWzesg3e4_redf43erfr",  //Your firebase account api key

    authDomain: "your_project-304r4.firebaseapp.com", //your domain name

    projectId: "your_project-304r4", //your projectId

    storageBucket: "your_project-304r4.appspot.com", //your storage bucket

    messagingSenderId: "688808334343", //your message senderId

    appId: "1:688808837691:web:232302343e2345fe3c111e"  //your appId

};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.usePublicVapidKey('BNZbQoOrgpAMbyZBp-O3gsFipt0A4XkY0YDf6OcuRxDEPEKJfmHL1Xzzi2TNpW7-zaIeokcLBlXwe3eeer4fv33');

self.addEventListener('push', function (event) {

    if (event.data.json().data.title && event.data.json().data.body) {

        var body1 = event.data.json().data.body

        var notificationTitle1 = event.data.json().data.title;

    }

    else {

        var body1 = event.data.json().notification.body

        var notificationTitle1 = event.data.json().notification.title;

    }

    const notificationTitle = notificationTitle1;
    
    const notificationOptions = {

        body: body1,
        sound: 'https://res.cloudinary.com/tecorbssvan/video/upload/v1650879605/sounds/
        mixkit-happy-bells-notification-937_hghli0.wav',

        icon: 'https://res.cloudinary.com/tecorbssvan/image/upload/v1650629186/o4z852tkeyr5r7nasc3t.jpg',

        data: event.data.json().data,

        vibrate: [200, 100, 200, 100, 200, 100, 200],

        requireInteraction: true,

    };
    
    self.registration.showNotification(notificationTitle, notificationOptions);

    //TODO: this play event not working when app in background...

    const pevent = new Event('play-sound');


    self.dispatchEvent(pevent);

})

self.addEventListener('notificationclick', function (event) {

    console.log(event.notification.data, ";lllllllclick")

    if (event.notification.data.click_action) {

        var url = `${event.notification.data?.click_action}`;

    } 

     else {

        var url = "/"

    }

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




