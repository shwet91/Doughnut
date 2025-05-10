const server = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1`;

const apiEndPoints = {
  addFriend: `${server}/user/addFriend`, // POST , send friendUsername , userId as body
  searchUser: `${server}/user/searchUser`, // GET ,  send username as params
  getFriends: `${server}/user/getFriends`, // GET , send userId as params
  createFriendRequest: `${server}/user/createFriendRequest`, // POST , ssend  userId , friendUsername in body
  getUser: `${server}/user/user`, // GET , send username as params
  getFriendRequest : `${server}/user/getFriendRequest`, // GET , send user Id of user who want to check requests he has reiceved by others.
  removeFriend : `${server}/user/removeFriend`, // POST , send userId and friendId in body
   };

export default apiEndPoints;
