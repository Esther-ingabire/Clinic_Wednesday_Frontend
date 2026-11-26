import {useEffect, useState} from "react";
import axios from "axios";
import LibraryButton from "./LibraryButton";


function OfficeList({refresh}){
  const [offices, setOffices]= useState([]);
  const[search, setSearch]=useState("");

  useEffect(() =>{
    axios.get("http://localhost:8080/api/offices/all")
    .then(response => setOffices(response.data))
    .catch(() => alert("Could not load offices"));
  }, [refresh]);


  async function deleteOffice(id){
    try{
      const response = await axios.delete(`http://localhost:8080/api/offices/delete/${id}`);
      alert(response.data);
      setOffices(offices.filter(office  => office.id !== id));

    }catch(error){
      alert(error.response ? error.response.data : "Backend not reachable")
    }
  }



  const text = search.toLowerCase();
  const foundOffices = offices.filter(office => 
    office.name?.toLowerCase().includes(text) ||
    office.number?.toLowerCase().includes(text) 
);


return(
  <div>
    <h1>All OFFICES</h1>

    <input type ="text" placeholder="Search by name or number"
    onChange={e => setSearch(e.target.value)} />

    <table border ="1" style={{margin: "20px auto"}}>
      <thead>
        <tr>
          <th>Number</th>
          <th>Name</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {foundOffices.map(office =>(
          <tr key={office.id}>
            <td>{office.number}</td>
            <td>{office.name}</td>
            <td>
              <LibraryButton buttonLabel="UPDATE" />
              <LibraryButton buttonAction={() => deleteOffice(office.id)} buttonLabel="DELETE" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

}

export default OfficeList;