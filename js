// Initialize Firebase app
const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID'
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

function sendAlert() {
  const message = document.getElementById('message').value;
  // Send alert to all users
  // This is just an example, actual implementation may vary
  messaging.getToken()
    .then(token => {
      if (token) {
        fetch('/send_alert', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ message, token })
        })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          alert('Alert sent successfully');
        })
        .catch(error => {
          console.error('Error sending alert:', error);
          alert('Error sending alert');
        });
      } else {
        console.error('No token available');
        alert('No token available');
      }
    })
    .catch(error => {
      console.error('Error getting token:', error);
      alert('Error getting token');
    });
}
