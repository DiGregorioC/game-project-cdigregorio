[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Technologies Used
- Ajax
- Atom
  - open-source text and source code editor
- Bootstrap
- CSS
- Curl
- HTML
- Javascript
- JQuery
- JSon
- SCSS

# Development Process
  This project was my first experince creating a functional single page web application powered by JavaScript and that communicated with an API.

  As this was my first time building something like this from the ground up, my first focus was mastering the game logic as that had been the prior initial focus on previous smaller projects. At the time, I felt this is where I would encounter the most difficulty. I created  base HTML setup to allow me to begin implementing the JQuery and Javascript logic, while also letting me live test with the local version of my project. Upon completion of the logic, I began working with Ajax and the API provided to connect the game logic with our server, and allow for the user authentication and saved gamed records. Once that was completed, I spent my remaining time bug checking, and improving the SCSS of the site.

  As my web page progressed and problems were encountered, I found that utilizing past issues, in the project's issue cue, google, and even just stepping back and writing/ pseudocoding it out, helped me push through many of the problems. When I did encounter issues that I was unable to progress past, even with research and planning, I would then work with the instructors and issue cue to help get past the hurdle, and in turn gain new knowledge on how to solve the problem.

### Reflections
  Looking back on the project, I am able to take away several reflections and learning that I believe will help me with my future endeavors.

  - Instead of focusing on the logic first, I realized I should have prioritized the API requests. The reason being that much of the logic I created ended up being redundant when I realized the API would provide the same info. It also led to some trouble towards the end due to having to then loop in all the API requests with all of my already created logic. This also would have let to more DRY code, and less repetition.

 - Additionally, I as I began to set up hidden and unhidden components for logged in/ not logged in, I should have made a more comprehensive list of each object. This also would have allowed me to use less repetition, and have cleaner/ less unnecessary code.

 - One of the hardest things for me was focusing on the MVP, and not the perfect product. Coming from a mindset of presenting the finished project, it was an adjustment for me to learn to focus on hitting the MVP, and then continuing on with the additionals. Now that I have a better feeling for the timeline and needs of these projects, I believe it will lead me to better time and completion management in the future.

 # Future Goals

  As I continue to work on and update this project, I have the below goals I would like to accomplish:

  - Refactoring code to produce more DRY code, and reduce repeition
  - Work on implementing multi-player, playing against and AI, and allowing user to switch starting player
  - Work on creating a more mobile first design
  - Work on creating more responsive design, and cleaner CSS
  - Allowing the user to see their win/loss streak
  - Allowing the user to resume an unfinished game

# Project User Stories and Wireframes

- As a player, I want to see what spaces are free so I can know where I can put my next move
- As a player I want to know who won or lost, so I can play again
- As a player I want an account and login so I can track my game history
- As a player, I want to to see whose turn it is, so I know who is going currently
- As a player, I want a new game button so I can play again
- As a player, I want to see a live count of my wins/losses so I can know what my score is

![Imgur](https://i.imgur.com/QBoNVoV.png)
![Imgur](https://i.imgur.com/Of4OGhc.png)
