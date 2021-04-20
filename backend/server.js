const express = require("express");
const mysql = require("mysql");
const app = express();
const cors = require("cors");
const PORT = 3001;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "Sahaj@123",
    database: "new_schema"
  });

  db.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
  });



 //http://localhost:3001/insertmaster

app.post("/insertmaster", (req, res) => {
    const cName = req.body.name;
    const cId = req.body.ID;
    const HR_Details = req.body.HR_Details;
    const Est_Year = req.body.Est_Year
    const Roles = req.body.Roles
    /* const details_of_hr = req.body.Details_of_HR;
    const year_of_est = req.body.Year_of_Est;
    const jobs_roles_offered = req.body.Job_Roles_Offered; */

    
  
    db.query(
      "INSERT INTO master_sheet (Company_Name, Company_ID, Name_of_HR, Years_Of_Establishment, Colleges_It_Visited) VALUES (?,?,?,?,?)",
      [cName, cId, HR_Details, Est_Year, Roles],
      (err, result) => {
        if (err) {
          console.log(err);
          res.send(err);
        } else {
          res.send("Values Inserted");
        }
      }
    );
  });

  // app.get("/showmaster", (req, res) => {
  //   db.query(
  //     "Select * from master_sheet",(err, result) => {
  //       if (err) {
  //         console.log(err);
  //       } else {
  //         res.send(result);
  //       }
  //     }
  //   );
  // });


  // app.get("/employees", (req, res) => {
  //   db.query("SELECT * FROM employees", (err, result) => {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       res.send(result);
  //     }
  //   });
  // });
   
  // app.put("/update", (req, res) => {
  //   const id = req.body.id;
  //   const wage = req.body.wage;
  //   db.query(
  //     "UPDATE employees SET wage = ? WHERE id = ?",
  //     [wage, id],
  //     (err, result) => {
  //       if (err) {
  //         console.log(err);
  //       } else {
  //         res.send(result);
  //       }
  //     }
  //   );
  // });
   
  // app.delete("/delete/:id", (req, res) => {
  //   const id = req.params.id;
  //   db.query("DELETE FROM employees WHERE id = ?", id, (err, result) => {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       res.send(result);
  //     }
  //   });
  // });

  
//Listener

  app.listen(3001, () => {
    console.log("Yey, your server is running on port 3001");
  });
