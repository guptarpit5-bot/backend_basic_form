
const express = require('express');


const cors = require('cors');


const app = express();


app.use(cors());
app.use(express.urlencoded({ extended: true })); 


const users = [
  { username: 'arpit', password: 'password1234' },
  { username: 'admin', password: 'admin123' },
];



app.post('/login', (req, res) => {

  
  const username = req.body.username;
  const password = req.body.password;

  
  const found = users.find(
    (user) => user.username === username && user.password === password
  );

  
  if (found) {
    res.json({ success: true, message: '✅ Permission Granted! Welcome ' + username });
  } else {
    
    res.json({ success: false, message: '🚫 Permission Denied! Wrong username or password.' });
  }

});


app.listen(3000, () => {
  console.log('Server started at http:
});