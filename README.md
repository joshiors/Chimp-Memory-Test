# Chimp-Memory-Test
A short-term memory test that chimps pass out runned like a web app.

![](https://i.imgur.com/wXcjoSB.gif)

## Requirements
To use the app is necessary to start it with a live server.

_**The thing**_: The test simulates the chimp's test of memory, that consists in clicking in ascendent order the squares by the numbers that they have, but, when you click the first square, the rest will hide their value, so, you have to memorize ubication of each number before clicking the first. 
Other mode is that, the squares are displayed and, when X seconds passes, all the squares values will be hidden.

**_Technical definition_**: there are x number of squares in a plane/canvas. Each square contains a number, and each square is part of a scale that starts from 0 and goes upwards depending of the number of squares indicated in "config.txt". The squares are displayed randomly on the screen.

_**Configuration**_: First you configurate the parameters of the test in the config.txt file. "cantidad" is the number of numbers to generate (default is 6; easy mode), and it can be between 1 and 100. "modo-tiempo" is if you want to use the time mode mentioned in the upper paragraph, where "si" means yes and "no" no. "milisegundos" is the miliseconds you want of time before the numbers disappear (being in the time-mode)(easy mode).
For more in-detail config. (canvas modification, ergo, buttons size), read the main.js file.

## Difficulty:
- "cantidad": 6 is easy mode, 10 is medium and up from there is hard to extreme.

# To Do
- [ ] Independizarnos de Live Server. Que la aplicación pueda ser usada abriendo el index.html, con un ".bat" o subirlo a un github-pages.
