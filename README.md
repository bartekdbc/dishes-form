# Dish Form 🍕

![Headline]()

## Demo

You can find a demo version [here](https://bartekdbc.github.io/dishes-form/).

## General information

Dish Form is a simple form project made to enable uploading information about specific dishes to a website. The form includes following fields:

- Dish name,
- Preparation time,
- Dish type (pizza, soup or sandwich to choose),
- Details depending on dish type selected, i.e. number of slices, diameter, spiciness scale, number of bread slices.

As recommended technology was Redux Form, I have decided to look through the documentation and I found out that the most suitable solution these days for building forms is to run the project in 🏁React Final Form. That is why I followed the recommendations of Redux Form author and created this Dish Form in the above technology.

about form use cases from maintaining Redux Form and built 🏁 React Final Form, which he recommends you use if you are just starting your project.

It took me about two days to complete this task, the first day I spent on familiarizing myself with React Final Form library & documentation, then I dealt with whole logic and finally I focused on good looking UI and the presentation layer.

## Preview

![Preview](/)

## Setting Up

To use the form locally, follow these steps:

1. Clone the repository:
   **`git clone https://github.com/bartekdbc/dishes-form.git`**
2. Install dependencies:
   **`npm install`**
3. Run the project:
   **`npm start`**

## Node and Npm versions

- Node version: **18.12.1**
- Npm version: **8.19.2**

## Technologies

- React
- React Final Form
- Styled Components
- ThemeProvider
- Async/await
- format-string-by-pattern

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
