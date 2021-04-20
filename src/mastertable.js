import React from "react" ;
import MaterialTable from "material-table" ;
import Axios from 'axios';
import { TextField } from '@material-ui/core';
 
 
export default function Master() {
    const { useState } = React;
 
   
    const [columns, setColumns] = useState([
 
        
      { title: 'Company_Name', field: 'name', validate: rowData => rowData.name === '' ? 'Company Name cannot be empty' : '',
       },
      { title: 'Company_ID', field: 'ID', type: 'numeric', validate: rowData => rowData.ID === '' ? 'Company ID cannot be empty' : '',  },
      { title: 'Details_of_HR', field: 'HR_Details'},
      { title: 'Year_of_Est', field: 'Est_Year', type: 'numeric' },
      { title: 'Details_of_HR', field: 'HR_Details'},
      { title: 'Job_Roles_Offered', field: 'Roles'},
      
    ]);
  

    const [data, setData] = useState(
       { name: null, ID: null,  HR_Details: null , Est_Year: null, Roles: null }
    );

    // const getData = () => {Axios.get("http://localhost:3001/showmaster").then((response) => {

    //        setData(response.data); 
    // })

    // };


    return (
      <div>
        <button>Show </button>
      <MaterialTable
        title="Master Table Space"
        columns={[
            {
              title: 'Company_Name', field: 'name',
 
              cellStyle: {
                backgroundColor: '#87ceeb',
                color: '#FFF'
              },
              headerStyle: {
                backgroundColor: '#87ceeb',
              }
            },
             { title: 'Company_ID', field: 'ID', type: 'numeric', validate: rowData => rowData.ID === '' ? 'Company ID cannot be empty' : '',  },
             { title: 'Details_of_HR', field: 'HR_Details'},
             { title: 'Year_of_Est', field: 'Est_Year', type: 'numeric' },
             
            { title: 'Colleges_It_Visited', field: 'Roles'},
            
            
          ]}
        data={data}
       
        options={{
            headerStyle: {
              backgroundColor: '#4682b4',
              color: '#FFF'
            }
        }}
      />
      </div>
    )
  }
 
 
  export function InsertMaster() {


    const { useState } = React;

   
    const [columns, setColumns] = useState([
 
        
      { title: 'Company_Name', field: 'name', validate: rowData => rowData.name === '' ? 'Company Name cannot be empty' : '',
       },
      { title: 'Company_ID', field: 'ID', type: 'numeric', validate: rowData => rowData.ID === '' ? 'Company ID cannot be empty' : '',  },
      { title: 'Name_of_HR', field: 'HR_Details'},
      { title: 'Year_of_Est', field: 'Est_Year', type: 'numeric' },
      { title: 'Colleges_It_Visited', field: 'Colleges_It_Visited'},
      
    ]);
  
    const [data, setData] = useState([
      // { name: 'SreeVastav', ID: 133,  HR_Details: 'no one cares' , Est_Year: 1987, Roles: 'Front end dev' },
      // { name: 'Anirudh', ID: 2, HR_Details: 'none',Est_Year: 2001,  Roles: 'Back end dev' },
    ]);

    const log = () => {
      Axios.post("http://localhost:3001/insertmaster", {
        name: data.name,
        ID: data.ID,
        HR_Details: data.HR_Details,
        Est_Year: data.Est_Year,
        Roles: data.Roles,
      }).then((response) => {
        console.log(data.name);
        console.log(response);
      });
    };
  
    return (
      <div>
        <form>
       <TextField
    id="outlined-secondary"
    label="Company Name"
    variant="outlined"
    color="secondary"
  />
  <TextField
    id="outlined-secondary"
    label="Company ID"
    variant="outlined"
    color="secondary"
  />
  <TextField
    id="outlined-secondary"
    label="Name_of_HR"
    variant="outlined"
    color="secondary"
  />
  <TextField
    id="outlined-secondary"
    label="Company Name"
    variant="outlined"
    color="secondary"
  />
  <TextField
    id="outlined-secondary"
    label="Outlined secondary"
    variant="outlined"
    color="secondary"
  />
  </form>
      {/* <MaterialTable
        title="Master Table Space"
        columns={[
            {
              title: 'Company_Name', field: 'name',
 
              cellStyle: {
                backgroundColor: '#87ceeb',
                color: '#FFF'
              },
              headerStyle: {
                backgroundColor: '#87ceeb',
              }
            },
             { title: 'Company_ID', field: 'ID', type: 'numeric', validate: rowData => rowData.ID === '' ? 'Company ID cannot be empty' : '',  },
             { title: 'Name_of_HR', field: 'HR_Details'},
             { title: 'Year_of_Est', field: 'Est_Year', type: 'numeric' },
             
            { title: 'Job_Roles_Offered', field: 'Roles'},
            
            
          ]}
        data={data}
        editable={{
          onRowAdd: newData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                setData([...data, newData]);
                
                resolve();
              }, 1000)
              
            }),
        
        }}
        options={{
            headerStyle: {
              backgroundColor: '#4682b4',
              color: '#FFF'
            }
        }}
      /> */}
      <button onClick={log} >Ok</button>
      </div>
    )
  }

   
export function UpdateMaster() {
  const { useState } = React;

 
  const [columns, setColumns] = useState([

      
    { title: 'Company_Name', field: 'name', validate: rowData => rowData.name === '' ? 'Company Name cannot be empty' : '',
     },
    { title: 'Company_ID', field: 'ID', type: 'numeric', validate: rowData => rowData.ID === '' ? 'Company ID cannot be empty' : '',  },
    { title: 'Details_of_HR', field: 'HR_Details'},
    { title: 'Year_of_Est', field: 'Est_Year', type: 'numeric' },
    { title: 'Details_of_HR', field: 'HR_Details'},
    { title: 'Job_Roles_Offered', field: 'Roles'},
    
  ]);

  const [data, setData] = useState([
    { name: 'Amazon', ID: '1001',  HR_Details: 'no one cares' , Est_Year: 1987, Roles: 'Front end dev' },
    { name: 'Flipkart', ID: '1002', HR_Details: 'none',Est_Year: 2001,  Roles: 'Back end dev' },
  ]);

  return (
    <MaterialTable
      title="Master Table Space"
      columns={[
          {
            title: 'Company_Name', field: 'name',

            cellStyle: {
              backgroundColor: '#87ceeb',
              color: '#FFF'
            },
            headerStyle: {
              backgroundColor: '#87ceeb',
            }
          },
          
           { title: 'Company_ID', field: 'ID', type: 'numeric', validate: rowData => rowData.ID === '' ? 'Company ID cannot be empty' : '',  },
           { title: 'Details_of_HR', field: 'HR_Details'},
           { title: 'Year_of_Est', field: 'Est_Year', type: 'numeric' },
           
          { title: 'Job_Roles_Offered', field: 'Roles'},
          
          
        ]}
      data={data}
      editable={{
        
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataUpdate = [...data];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setData([...dataUpdate]);

              resolve();
            }, 1000)


          }),
        
      
      }}
      options={{
          headerStyle: {
            backgroundColor: '#4682b4',
            color: '#FFF'
          }
      }}
    />
  )
}