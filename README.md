# Covid-19 Tracker

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and it's a responsive web application to show a list of current covid casses classified by countries and regions, according to the data provided by [Johns Hopkins University](https://systems.jhu.edu/research/public-health/ncov/).
It is a single-page application (SPA) built with React and Redux.

The original design idea is based on a template by [Nelson Sakwa on Behance](https://www.behance.net/sakwadesignstudio) and it licenced by [Creative Commons](https://creativecommons.org/licenses/by-nc/4.0/).

When the page loads, the webapp's home page shows the list of categories that could be filtered out by country name. When the user clicks (or taps) on a category item, the application navigates to the details page.

![image](https://user-images.githubusercontent.com/78906545/164553000-3d53c496-6d6b-46fd-897c-a985bd998c2b.png)

In the details page, the webapp retrieves data from the API to show detailed data of covid cases in the category. When the user clicks on the "Back" button (<), the user navigates to the home page.

![image](https://user-images.githubusercontent.com/78906545/164553385-55134145-8cef-49e8-97a6-2d11b7e42342.png)

you can watch [this video](https://www.loom.com/share/f258252540d0484686786b376b972df6) presenting the features of the project in 4 minutes.


## Live Demo
[Covid Tracker Live Demo](https://bright-moonbeam-27f9a1.netlify.app/)

## Built With
- React
- Redux

## Getting Started
**step1** cloning the project:
```
git clone https://github.com/ZahraArshia/bookstore.git
```
**step2** buile the project:
```
npm run build
```

Builds the app for production to the `build` folder.
The build is minified and the filenames include the hashes.

```
npm start
```
Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

**step3** test
```
npm test
```
Launches the test runner in the interactive watch mode.
## Author
**Zahra**
- GitHub: [@githubhandle](https://github.com/ZahraArshia)
- Twitter: [@twitterhandle](https://twitter.com/twitterhandle)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/zahra-arshia/)

## Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

## Show your support

Give a ⭐️ if you like this project!

## License

This project is [MIT](./MIT.md) licensed.
