const express = require('express')
const router = express.Router();

router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
  })

// define th read page route
router.get('/usernames', (req, res) => {
    let usernames = req.users.map(function(user) {
      return {id: user.id, username: user.username};
    });
    res.send(usernames);
});

router.get('/username/:name', (req, res) => {
    let user = "";
    user = req.users.find(user => user.username === req.params.name);
    if (user === "") {
      res.send({error: "Couldn't find user"});
    } else { 
      res.send([{email: user.email}]);
    }
  });

module.exports = router;