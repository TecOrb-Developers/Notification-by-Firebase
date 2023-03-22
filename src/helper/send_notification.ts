// import FCM from 'fcm-node'
function sendPushNotification(tokens:any, title:any, body:any, data:any) {
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
}

export {
    sendPushNotification
}