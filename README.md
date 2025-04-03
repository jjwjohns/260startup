# PlayMancala

[My Notes](notes.md)

My startup application is to create an online game site for mancala. Clients will be able to login and challenge other players to a game of mancala. They will be able to create games or join existing games and then play through a game of mancala taking turns until the game is over.

## 🚀 Specification Deliverable

### Elevator pitch

Did you grow up playing the amazing game Mancala, but now no longer have the physical game? Or do you wish you could play Mancala with friends who live far away? Well you have found your solution here at PlayMancala! This is a very easy to access site that lets you play the classic game of mancala anywhere with anyone! Whether you are new to the game or are a seasoned master, PlayMancala is the perfect solution for you.

### Design

![Login Design.](Resources/login.png)
![Play and About Design.](Resources/play-about.png)

### Key features

- Secure login over HTTPS
- Ability to play against other online players
- Ability to see a mancala board and play through to the end.
- Mancala rules will be developed into the game for greater ease of play.
- Ability to see other mancala games and join them if desired.
- Ability to create a new game.
- Admin can edit results and game status.

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - I will have 3 correctly structured html pages. One for logging in, one for playing, and one for reading about Mancala. I will have a navigation bar that persists on each page with links to the three pages.
- **CSS** - Appropriate styling of pages. Will design a basic mancala board.
- **React** - Achieve all desired functionality for buttons. This includes loging in, joining games, creating games, and turnstyle gameplay.
- **Service** - Will use an outside service to provide quotes on my about page.
- **DB/Login** - Will have a table to store login information. Will also have a table to store games.
- **WebSocket** - Realtime user to user data transfer for gameplay.

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] **Server deployed and accessible with custom domain name** - [My server link](https://jjohns-byu.click).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.


- [X] **HTML pages** - I added three html pages with proper structure. They are, index, play, and about. 
- [X] **Proper HTML element usage** - I added proper html elements for headers, links, paragraph lines, tables, etc.
- [X] **Links** - I added a link to my github in the footer, and three nav links in the header to the three html pages.
- [X] **Text** - I added text in the about page explaining mancala and throughout the other pages as well.
- [X] **3rd party API placeholder** - I put a placeholder for a quote api generator in the about page.
- [X] **Images** - I added two images. One of mancala being played in the about page and the other is a placeholder for the game.
- [X] **Login placeholder** - I added a login placeholder for the index page.
- [X] **DB data placeholder** - I added a table to show the games database. Also the game itself will have its state stored in a database.
- [X] **WebSocket placeholder** - The game image is the websocket placeholder. There websocket will communicate moves made between two clients.

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] **Header, footer, and main content body** - I stylized all three content sections and implemented flex box into them as well.
- [X] **Navigation elements** - I dropped the underline and spaced and stylized them. I also made it so they highlight when the mouse hovers over them.
- [X] **Responsive to window resizing** - I made my application responsive to window resizing and my nav elements go into a dropdown window on smaller sizes.
- [X] **Application elements** - Everything is spaced out well and the application looks clean. Basic CSS Mancala board is now made.
- [X] **Application text content** - Consistent fonts and colorings.
- [X] **Application images** - Image for the about page is still there with a stylized title centered in it. I also replaced the Mancala placeholder image with CSS

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] **Bundled using Vite** - I downloaded vite and used it to bundle my application and run it in build dev mode.
- [X] **Components** - I have three react components that is connected to the router to import my main section. They are login, play, and about. They all work as they should.
- [X] **Router** - I added the router in app.jsx which correctly routes to the different components.

## 🚀 React part 2: Reactivity

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] **All functionality implemented or mocked out** - I fully implemented the mancala gameplay. Set with turns end game evaluation and special rules. I also set everything up to render based on what state you are in authorized/logged in and in a game or night. I also implemented a dynamic table where you can create games and then join them. This will be a little different moving forward because when you create a game you will automatically join it and joining is used to join other people's games. I also implemented a basic bot for the user to play against for this deliverable.
- [X] **Hooks** - I used useState and useEffect to be able to store all of the variable and states.

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] **Node.js/Express HTTP service** - I fully implemented a node.js/express http service. My front end is served up through express and calls backend service api endpoints to implement the functionality of the application.
- [X] **Static middleware for frontend** - I used express to serve up the files in the public folder.
- [X] **Calls to third party endpoints** - I implemented a quote service that generates quotes on my about page.
- [X] **Backend service endpoints** - I implemented the following backend service endpoints: createAuth(/auth/create)(post), GetAuth(/auth/login)(get), DeleteAuth(/auth/logout)(delete), GetGames (/game/:id)(get), JoinGame(/game/:id/join)(post), DeleteGame(/game/:id)(delete), and createGame(/game)(post).
- [X] **Frontend calls service endpoints** - I called the following endpoints from my frontend: CreateAuth, GetAuth, DeleteAuth, DeleteGame, CreateGame. My frontend now stores in local storage and send data to store in the backend service.

## 🚀 DB/Login deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **User registration** - I did not complete this part of the deliverable.
- [ ] **User login and logout** - I did not complete this part of the deliverable.
- [ ] **Stores data in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Stores credentials in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Restricts functionality based on authentication** - I did not complete this part of the deliverable.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.
