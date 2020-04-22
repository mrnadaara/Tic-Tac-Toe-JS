# Tic Tac Toe

This is the classic **Tic Tac Toe game** that we all know, but perhaps you never heard of it, in that case, you can do some research [here](https://en.wikipedia.org/wiki/Tic-tac-toe). This game was **written in JavaScript**, making use of concepts like [factory functions](https://www.theodinproject.com/courses/javascript/lessons/factory-functions-and-the-module-pattern) and [modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules).

## Features

Now comes a listing of the features that we, the developers, think this project has, and, as a high-level overview of the working application, we also have this demonstration recording.

![tic tac toe project description](https://github.com/mrnadaara/Tic-Tac-Toe-JS/blob/feature/game/doc/tic_tac_toe_demo.gif)

### General

This subset holds features that can be recognized by any person, no need to know about tech subjects.

- Tracking of the current player
- Parsing of the game board every turn
- Win and draw scenarios handling

 ### Technical

This subset, on the contrary, depicts the features that probably only developers can understand.

- webpack usage
- Bootstrap loading using webpack
- CSS bundling into JS also using webpack
- Modularization of the code

## Setup

1. **Install node**, you can see how to do it [here](https://nodejs.org/en/download/package-manager/).
2. **Clone the repository**, the command is:
	```shell
	git clone https://github.com/mrnadaara/Tic-Tac-Toe-JS.git
	```
3. **Install the project dependencies**, you can do so with the following:
	```shell
	npm install
	```
And that's about it, you need to know that after changing anything inside the `src` folder you need to rebuild the bundle (the file `dist/main.js`), you can achieve that using this:
```shell
npx webpack
```
Or, because we already added a `build` script to the `package.json` file, you can use:
```shell
npm run build
```
## Testing

This project uses JEST to run tests. A test folder containing all tests has already been made. You can
run them by typing ``` npm test ``` in your respective terminals.

The conditions tested includes:

- Which player wins
- Whether a certain condition is met such as a win or draw
- How the player wins, check whether it was by column, row or diagonal
- Checks whether the game needs to continue, is there any slots available?

## Developers

This project was developed by [mrnadaara](https://github.com/mrnadaara) and [santiago-rodrig](https://github.com/santiago-rodrig).

## License

This project is licensed under the [MIT](https://github.com/mrnadaara/Tic-Tac-Toe-JS/blob/feature/game/LICENSE) license.
