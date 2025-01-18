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

usersController.updateUser = (req, res) => {
  const { id } = req.params;
  const userInfo = req.body;

  fs.readFile(usersFile, (err, data) => {
    if (err) return res.status(500).json({ error: 'Error reading user file ' });

    if (!id || !userInfo) {
      return res.status(400).json({ error: 'Bad Request: No ID or INFO' });
    }

    const jsonUsers = JSON.parse(data);
    const userToEditIndex = jsonUsers.findIndex(user => user.userId === id);

    if (userToEditIndex === -1) {
      return res.status(404).json({ error: 'User not found' });
    }

    jsonUsers[userToEditIndex] = { ...jsonUsers[userToEditIndex], ...userInfo };

    fs.writeFile(usersFile, JSON.stringify(jsonUsers), error => {
      if (error) return res.status(500).json({ error: 'Error writing user file' });
      return res.status(200).json(jsonUsers[userToEditIndex]);
    });
  });
};

usersController.deleteUserById = (req, res) => {
  const { id } = req.params;
  fs.readFile(usersFile, (err, data) => {
    if (err) return res.status(500).json({ error: 'Error reading user file ' });
    if (id) {
      const usersUpdated = JSON.parse(data).filter(user => user.userId !== id);

      fs.writeFile(usersFile, JSON.stringify(usersUpdated), error => {
        if (error) return res.status(500).json({ error: 'Error writing user file' });
        return res.status(200).json({ message: 'User deleted' });
      });
    } else {
      return res.status(400).json({ error: 'Bad Request: No ID' });
    }
  });
};

module.exports = usersController;
