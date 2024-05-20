const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');


const app = express();
const port = 3001;
const port1=3002
app.use(cors());
app.use(bodyParser.json());


// Load environment variables

const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password:'12345',
  database: 'login'
});

// MySQL connection
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err.message);
  } else {
    console.log('Connected to MySQL database');
  }
});

app.post('/login', (req, res) => {
  const {
   email,
   password
  } = req.body;

  const sql = `INSERT INTO auth (email,password)
               VALUES (?, ?)`;

  db.query(
    sql,
    [email,password],
    (err, results) => {
      if (err) {
        console.error('Error inserting into database:', err);
        res.status(500).json({ message: 'Interncityal Server Error', error: err.message });
      } else {
        console.log('Employee added successfully!');
        res.json({ message: 'Employee added successfully!' });
      }
    }
  );
});

//home



// Middleware to parse JSON bodies


// MySQL connection setup
const book = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '12345',
  database: 'homerent'
});

// Connect to MySQL database
book.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err.message);
  } else {
    console.log('Connected to MySQL database');
  }
});

// Route to handle booking requests
app.post('/search', (req, res) => {
  const {  name, contact, guests } = req.body;

  const sql = `INSERT INTO home ( name, contact, guests) VALUES ( ?, ?, ?)`;

  book.query(sql, [ name, contact, guests], (err, results) => {
    if (err) {
      console.error('Error inserting into database:', err);
      res.status(500).json({ message: 'Internal Server Error', error: err.message });
    } else {
      console.log('Booking added successfully!');
      res.json({ message: 'Booking added successfully!' });
    }
  });
});

// Start the main server
app.listen(port, () => {
  console.log(`Main server is running on port ${port}`);
});

// Start the secondary server
app.listen(port1, () => {
  console.log(`Secondary server is running on port ${port1}`);
});
