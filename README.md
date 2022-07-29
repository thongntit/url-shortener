# Simple URL Shortener Example
# Depricated, don't use this repo because it exploit your firebase token

![Build & Deploy](https://github.com/trthong95/url-shortener/workflows/Build%20&%20Deploy/badge.svg)

* Shorten url then save the result to Firebase
* Get the origin url then redirect to it

# How to deploy this example ?

To deploy this example to firebase hosting please specify these 2 variables in github secret.
```
FIREBASE_TOKEN=<firebase-deploy-token>
```

```
FIREBASE_CONFIG='{"apiKey": "","authDomain": "","databaseURL":"","projectId": "","storageBucket": "","messagingSenderId": "","appId": "","measurementId": ""}'
```
You can find these config in firebase document.

[Firebase token](https://firebase.google.com/docs/cli#cli-ci-systems)

[Firebase config object](https://firebase.google.com/docs/web/setup#config-object)

