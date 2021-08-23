import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';

export default function LoadEmployee() {
    const [data, setData] = useState([]);


    const fetchData = async () => {
            await axios.get('http://my.devpradip.in/api/Employees').then((response) => {
              const Mydata=response.data;
                setData(Mydata);
            });
           
        };
        useEffect(() => fetchData(), []);
        return (


            <div>

                <h1>All Employee  list</h1>
                <ul>
      {data.map(item => (
        <li key={item.ID}>
          <a >{item.ID} {item.FirstName} {item.LastName} {item.Gender} {item.Salary}</a>
        </li>
      ))}
    </ul>
            </div>
        )
    }
