importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAdWrf7bF2bLiy8EccIosFJ7otpmtBiOfc",
  authDomain: "car-cis-prod.firebaseapp.com",
  projectId: "car-cis-prod",
  storageBucket: "car-cis-prod.appspot.com",
  messagingSenderId: "778431289077",
  appId: "1:778431289077:web:79d36f4ff4eec32729d7bc",
  measurementId: "G-VP9S1BY648"
});


const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  self.registration.showNotification(
    payload.notification.title,
    {
      body: payload.notification.body,
      icon: './favicon_io/android-chrome-192x192.png'
    }
  );
});