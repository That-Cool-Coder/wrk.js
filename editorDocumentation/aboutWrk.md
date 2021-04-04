## About wrk.js

[Back to README](/README.md)

Written by ThatCoolCoder/That-Cool-Coder

#### History

I created wrk.js out of frustration with p5.js, especially with the vector system. Working with the vectors was easy enough, but saving them to JSON and reading them back was difficult - vectors would contain a pointer to the whole p5 instance, making them cyclic. To fix this, I created a project called [sp5](https://replit.com/@ThatCoolCoder/sp5#sp5.js) on repl.it (now replit.com). While this project had many bad design decisions, in it I designed the vector system that is used in wrk.js. Once I had gotten the vector system working, I decided to start fresh and created a new repl called wrk.js. Over about a week, I set up an organisation system and moved all the vector code from sp5 across. Soon after, in early June 2020, I transferred the project to GitHub, where it has remained since.

After I had set up the vector system, I spent some time working on wrk.js only occasionally. New functions were added only when I had a need for them in a project. Despite not working intensively, this is when most of wrk's functions were added. In addition to adding runtime features, I also created a user reference and reorganised the project once or twice. Of course, many bugs were found and fixed during this time period.

At the end of October 2020, I started working on wrk.js a lot more. For the next two weeks I put my effort towards adding a simple game engine to wrk.js, in preperation for entering the One Button Jam 2020. Since then, most of my efforts have still gone towards improving the game engine, adding things like a better mouse detection system, making the said system work with touchscreens, and a lookup system. To make callbacks more manageable, I also created a function group class, allowing multiple functions to be called together.

#### Why that name?

In all honesty, the name wrk.js was inspired by Calbabreaker's library hlp.js. I had been trying to come up with a good name that was both short meaningful, and the idea of taking a four letter word and compressing it was perfect. I chose to shorten the word 'work' because the idea was that this library would do all of the difficult unpleasant work for you, allowing you to focus on programming you application, not utility functions.

This page is still a work in progress.