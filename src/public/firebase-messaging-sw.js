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
        sound: 'https://res.cloudinary.com/tecorbssvan/video/upload/v1650879605/sounds/mixkit-happy-bells-notification-937_hghli0.wav',
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
    event.notification.close();
    event.waitUntil(
        clients.matchAll({ type: 'window' }).then(windowClients => {
            // Check if there is already a window/tab open with the target URL
            for (var i = 0; i < windowClients.length; i++) {
                var client = windowClients[i];
                console.log(client)
                if (client.url == '/' && 'focus' in client) {
                    return client.focus();
                }
            }
            // If not, then open the target URL in a new window/tab.
            if (clients.openWindow) {
                return clients.openWindow(url);
            }
        })
    );
});