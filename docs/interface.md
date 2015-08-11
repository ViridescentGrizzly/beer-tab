client sends POST to '/signup':
  data: {username: 'someusername', password: 'arglebargle'}

client sends GET to '/login':
  data: {username: 'someUser', password: 'arglebarble'}

server responds to successful login with:
  data: {'user1': -1, 'user2': 3, 'user3', etc...}
  (and redirect to tabs page)

if new IOU, client sends a post request to '/tabs':
  data: 'username'  (of the person that the client owes a beer to)

if payed, client sends post request to '/payed':
  data: 'username' (of the person that payed you a beer)
  


