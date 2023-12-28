const router = require("express").Router();
const Users = require("./users-helpers.js");

router.get("/", (req, res) => {
  Users.get()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => res.send(err));
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Users.getById(id)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => res.send(err));
});

router.post("/", (req, res) => {
  const user = req.body;
  Users.getByUsername(user.username).then((existingUser) => {
    if (existingUser) {
      res
        .status(409)
        .json({ message: `Username '${user.username}' is already taken` });
    } else {
      Users.addUser(user)
        .then((newUser) => {
          res.status(201).json(newUser);
        })
        .catch((err) => {
          res.status(500).json({ message: "Server Error" });
        });
    }
  });
});

module.exports = router;
