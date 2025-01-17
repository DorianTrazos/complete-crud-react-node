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
  // const id = req.params.id

  fs.readFile(usersFile, (error, data) => {
    if (error) return res.status(500).json({ error: 'Error reading user file' });
    const userFound = JSON.parse(data).find(user => user.userId === id);
    if (!userFound) return res.status(404).json({ error: 'User not found' });
    return res.json(userFound);
  });
};

usersController.createUser = (req, res) => {
  const newData = { userId: v4(), ...req.body };

  fs.readFile(usersFile, (error, data) => {
    if (error) return res.status(500).json({ error: 'Error reading user file' });
    const jsonData = JSON.parse(data);
    const updatedUsers = [...jsonData, newData];
    fs.writeFile(usersFile, JSON.stringify(updatedUsers), error => {
      if (error) return res.status(500).json({ error: 'Error writing user file' });
      return res.status(200).json(updatedUsers);
    });
  });
};

module.exports = usersController;
