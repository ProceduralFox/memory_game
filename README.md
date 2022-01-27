# App premise and architecture

This App is one in a collection of projects that I've built to design provided by https://www.frontendmentor.io/. I've done several of these because I believe that a design-to-code workflow is common in many companies and I've wanted to demonstrate my ability to work to an assignment. I was provided with figma files, and a desired feature description and the implementation was all on me.

An array of length determined by the user is mapped over and a circular card is rendered for each element. When a user clicks on a card the value of it's corresponding element is compared to the value of the last clicked card to see whether there is a "match" which increments a counter. There are conditionals in place to avoid clicking on the same card twice triggering a match and of course handling the first click. Once a number of matches equal to half the length of the array is reached(we are matching pairs after all) a state change is triggered which then renders a victory pop-up over the grid which allows either a reset of the same ruleset or a a return to the initial menu.

A useInterval hook also runs during this measuring the time the user has taken using javascript setInterval.

# Most important lesson

The most important thing I've learned with this App is the importance of planning out your code ahead of time. With Memory Game I've simply started writing and soon I had a functioning single component App that did what it was meant to do, but that was also quite unreadable compared to my other projects. If I took the time before starting to more clearly plan out the structure I would have ended up with much more readable code structure.

While this ultimately doesn't matter as much in small solo projects that I can keep entirely in my own memory, I think the importance of improving my ability to write code which other developers will have an easy time working with is of paramount importance for my career.
