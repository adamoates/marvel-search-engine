# Marvel Search Engine

Marvel Search Engine is an application build with the Marvel Developers API.
Allowing fans and collectors to track and monitor comic releases, series and character info.

## Marvel Developer Portal API

---

Visit the link to create a Marvel Developers API key

[Marvel Developers Portal Link](https://developer.marvel.com/documentation/getting_started)

Make sure the API key is formatted with md5 digest (e.g. md5(ts+privateKey+publicKey))

(the hash value is the md5 digest of 1abcd1234)

For example, a user with a public key of "1234" and a private key of "abcd" could construct a valid call as follows:

[http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150]

## Docker commands

---
Docker command to build the project

```docker-compose build```

Docker command to start the project

```docker-compose up```

Docker command to build the mongodb

```docker-compose up -d mongo```

Docker command to build the api

```docker-compose up -d app```

Docker command to build the frontend

```docker-compose up -d client```

Docker command to shutdown the project

```docker-compose down```
