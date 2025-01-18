const fs = require('fs');
const path = require('path');
const { v4 } = require('uuid');
const usersFile = path.resolve(__dirname, '../../data/users.json');

const usersController = {};

usersController.getAllUsers = (req, res) => {
  fs.readFile(usersFile, (err, data) => {
    if (err) return res.status(500).json({ error: 'Error reading user file ' });
    return res.json(JSON.parse(data));
  });
};

usersController.getUserById = (req, res) => {
  const { id } = req.params;
  fs.readFile(usersFile, (err, data) => {
    if (err) return res.status(500).json({ error: 'Error reading user file ' });
    const userFound = JSON.parse(data).find(user => user.userId === id);
    if (userFound) {
      return res.status(200).json(userFound);
    } else {
      return res.status(404).json({ error: 'User not found' });
    }
  });
};

usersController.deleteUserById = (req, res) => {
  const { id } = req.params;
  fs.readFile(usersFile, (err, data) => {
    if (err) return res.status(500).json({ error: 'Error reading user file ' });
    if (id) {
      const usersUpdated = JSON.parse(data).filter(user => user.userId !== id);
      return res.status(200).json(usersUpdated);
    } else {
      return res.status(400).json({ error: 'Bad Request: No ID' });
    }
  });
};

module.exports = usersController;
