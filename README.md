## React Google Books 📕

This is an app made with reactjs that consumes the Google Books API

## This app is not responsive (yet) -- it aims at mobile only! 
The ideal screen size to view the app is 376x812px. Use dev tools to set up.

## Demo online 🕹️

Check it online 👉 [here](https://tender-curran-877951.netlify.app/)

## Run ⚙️

### Dev server
```yarn start```

### Build dev
```yarn build:dev```

### Build prod
```yarn build:prod```

### Using Docker 🐋

On root folder:

```docker build -t react-google-books .```
```docker run -p 80:80 -d react-google-books```

The app will be running on [localhost](http://localhost/)

### Unit Tests

The unit tests are setup with React Testing Library and run by jest.
The tests produce an HTML file that can be found in the root folder
with the name test-report.html.

To run the tests use the command:

```yarn test```