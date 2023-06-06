# Test task - 'Tag a tweet'

The project  to layout [link](https://www.figma.com/file/66Eme3lRm8j25rKN0wjBZ2/Test-(Copy)?type=design&node-id=0-1&t=eqCmxs2io4Ua1huA-0).

## Objective:

Create Tweet Cards and add one-click interactivity.

## Technical task:

1. Implement user cards according to the layout.
2. When you click on the "Follow" button, the text will change to "Following" and the colour of the button will change. And your number will be added to the number of followers.
3. When updating the page, you should record the final result of the users' actions.
4. If you click again, the text and colour return to their original state and the follower count decreases by 1.
5. Write the number 100,500 with a value (100500) in the code. In the interface, it is displayed with a comma (100,500).
6. Using the mockapi.io UI service, create a personal backend for development: the user resource and describe its object.

### User

1. Mockapi's user object has: `id`, `user`, `tweets`, `followers`, `avatar`.
2. Avatars are registered with separate URLs in the `"avatar"` property. You can choose them yourself.
3. There should be `a minimum of 12 users` in the database, each with a different value. There should be `at least 3 tweets` on a page, the rest should load when you click on `Load More`.

# Additional task

1. Create routing with React router.
2. If the user comes in via a route that does not exist, they need to be redirected to `Home '/'` - the home page. `'/tweets'` - tweets component, a page showing tweets.
3. Tweet pages should have a `"back"` link that takes you to our main site.

## Increasing complexity task

Add a `filter`. It should be a dropdown with 3 options (design as you like): show all, follow, followers.\
show `all` - show all tweets.\
`follow` - show tweets with follow status.\
`followers` - show tweets with follow status.
