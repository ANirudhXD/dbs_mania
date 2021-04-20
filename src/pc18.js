import React from "react" ;
import MaterialTable from "material-table" ;
import Axios from 'axios';
import { TextField } from '@material-ui/core'; 
 
 
 export default function Pitched18() {
    const { useState } = React;
 
   
    const [columns, setColumns] = useState([
 
        
      { title: 'Company Name', field: 'name', validate: rowData => rowData.name === '' ? 'Company Name cannot be empty' : '',
       },
      { title: 'Company ID', field: 'ID', type: 'numeric', validate: rowData => rowData.ID === '' ? 'Company ID cannot be empty' : '',  },
      { title: 'Process Description', field: 'recruiting_process', },
      { title: 'Number of recruitments', field: 'no_hired' , type: 'numeric' , },
      { title: 'Name of HR', field: 'HR_name'},
      { title: 'Name of CR',field: 'CR_name'},
    ]);
  
    const [data, setData] = useState([
      { name: null , ID: null , recruiting_process: null , no_hired: null , HR_name: null , CR_name: null  },
      
    ]);
  

    return (
      <div>
        <button>Show </button>
      <MaterialTable
        title="Pitched Companies 2018"
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
             { title: 'Process Description', field: 'recruiting_process', },
             { title: 'Number of recruitments', field: 'no_hired', type: 'numeric' },
              { title: 'Name of HR', field: 'HR_name', },
              { title: 'Name of CR', field: 'CR_name', },
            
            
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

  export function InsertPitched18() {


    const { useState } = React;

   
    const [columns, setColumns] = useState([
 
        
      { title: 'Company_Name', field: 'name', validate: rowData => rowData.name === '' ? 'Company Name cannot be empty' : '',
       },
      { title: 'Company_ID', field: 'ID', type: 'numeric', validate: rowData => rowData.ID === '' ? 'Company ID cannot be empty' : '',  },
      { title: 'Process Description', field: 'recruiting_process', },
      { title: 'Number of recruitments', field: 'no_hired', type: 'numeric' },
      { title: 'Name of HR', field: 'HR_name', },
      { title: 'Name of CR', field: 'CR_name', },
      
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
    id="Process Description"
    label="recruiting_process"
    variant="outlined"
    color="secondary"
  />
  <TextField
    id="outlined-secondary"
    label="Number of Recruitments"
    variant="no_hired"
    color="secondary"
  />
  <TextField
    id="Name of HR"
    label="HR_name"
    variant="outlined"
    color="secondary"
  />
  <TextField
    id="Name of CR"
    label="CR_name"
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


  export function UpdatePitched18() {
    const { useState } = React;
  
   
    const [columns, setColumns] = useState([
  
        
      { title: 'Company_Name', field: 'name', validate: rowData => rowData.name === '' ? 'Company Name cannot be empty' : '',
       },
      { title: 'Company_ID', field: 'ID', type: 'numeric', validate: rowData => rowData.ID === '' ? 'Company ID cannot be empty' : '',  },
      { title: 'Process Description', field: 'recruiting_process', },
      { title: 'Number of recruitments', field: 'no_hired', type: 'numeric' },
      { title: 'Name of HR', field: 'HR_name', },
      { title: 'Name of CR', field: 'CR_name', },
      
      
    ]);
  
    const [data, setData] = useState([
      { name: 'Amazon', ID: '1001', recruiting_process: 'nothing much' ,no_hired:'5',HR_name:'nah',CR_name:'nah' },
      { name: 'Flipkart', ID: '1002', recruiting_process: 'nothing much' ,no_hired:'3',HR_name:'nah',CR_name:'nah' },
    ]);
  
    return (
      <MaterialTable
        title="Pitched Companies 2018"
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
             { title: 'Process Description', field: 'recruiting_process', },
             { title: 'Number of recruitments', field: 'no_hired', type: 'numeric' },
             { title: 'Name of HR', field: 'HR_name', },
             { title: 'Name of CR', field: 'CR_name', },
            
            
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


 
  