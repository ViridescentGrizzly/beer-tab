client sends POST to '/signup':
  data: {username: 'someusername', password: 'arglebargle'}

client sends GET to '/login':
  data: {username: 'someUser', password: 'arglebarble'}

server responds to successful login with:
  data: {'user1': -1, 'user2': 3, 'user3', etc...}
  (and redirect to tabs page)

if new IOU, client sends a post request to '/tabs':
  data: {token: 'token', user: 'username'}  (token is the unique slated user object, user is the name of the receiver)

if paid, client sends post request to '/paid':
  data: {user: 'username', token: 'token'} (token is the unique slated user object, user is the name of the receiver)
  


