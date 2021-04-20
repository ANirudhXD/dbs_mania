import React from "react" ;
import MaterialTable from "material-table" ;
 
 
 
function Past20() {
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
      { name: 'Amazon', ID: '1001', recruiting_process: '2 rounds of coding exam + Candidate screening + Group discussion + Technical Interview + HR interview. (requirement: a good rank in codeforces/ similar platforms.)', no_hired: '5', HR_name: 'Jeff Bezos', CR_name: 'Mukesh' , },
      { name: 'Thomson Reuters', ID: '1002', recruiting_process: '1 round of exam + Non-tech: machine demo + Technical Interview + HR interview.', no_hired: '2', HR_name: 'Akshith Reddy', CR_name: 'Alfred simmons' , },
    ]);
  
     


    return (
  
      <div>  <MaterialTable
      title="Past Table 2020"
      columns={[
          {
            title: 'Company Name', field: 'name',

            cellStyle: {
              backgroundColor: '#87ceeb',
              color: '#FFF'
            },
            headerStyle: {
              backgroundColor: '#87ceeb',
            }
          },
           { title: 'Company ID', field: 'ID', type: 'numeric', validate: rowData => rowData.ID === '' ? 'Company ID cannot be empty' : '',  },
           { title: 'Process Description', field: 'recruiting_process', },
           { title: 'Number of recruitments', field: 'no_hired', },
           { title: 'Name of HR', field: 'HR_name', },
           { title: 'Name of CR', field: 'CR_name', },
          
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
    
    
    </div>
    
    )
  }
 
  export default Past20;