# ShoppingListCRUD #
A small applet to mimic a shopping list's functionality in a single webpage

*** A little Background: ***
I've never really done a React -> Express -> mySQL stack *from scratch*
<br> before, so I thought it'd be fun at the very least to learn something 
<br> new through this process. I've used all three of these extensively in a <br> professional environments, but at my current workplace, we rarely get to <br> write code from scratch. So bear with me.

## Requirements ##
- NodeJS v14.18.0
- npm 6.14.15
- mysql 5.7 (or greater)

## Usage ##
1. `git clone https://github.com/bryancarl7/ShoppingListCRUD.git`
2. `cd ShoppingListCRUD`
3. `npm install`
4. `cd client && npm install`
4. `cd .. && npm run dev`

*Note: You will need to have a db setup on your machine, and updated app/config/db.config.js with the pertinent info if you'd like to see it.*

And that's it! Open up your browser to `http://localhost:3000` and you should hopefully see the text displayed. 

If you're reading this, you're a little too early, will update soon <br>
with the proper backend support and frontend look.<br>

### TODO: ###
- Finish react components and iron out API control flows
- Get db working and connected (with error handling)

### Personal Notes: ###
- Need to readup more on concurrently, looks promising.
- Need to write a script to pull homebrew on new computers
- Remember to write a new auth profile on github for this Comp
- Look into redux reducers, want to learn more about that
