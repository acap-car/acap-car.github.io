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
  // Only show notification if this is a data-only message (no notification property)
  if (!payload.notification && payload.data) {
    const notification = payload.data;
    self.registration.showNotification(
      notification.title || 'News',
      {
        body: notification.body || '',
        icon: './favicon_io/android-chrome-192x192.png',
        image: notification.imageUrl || '',
        data: { click_action: notification.click_action || '/' }
      }
    );
  }
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  const url = event.notification.data?.click_action || '/';
  event.waitUntil(clients.openWindow(url));
});