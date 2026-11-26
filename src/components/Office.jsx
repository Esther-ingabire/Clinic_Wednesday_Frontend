import { useState } from "react";
import axios from "axios";
import LibraryButton from "./LibraryButton";

function Office({reloadList}) {
    const [officeName, setOfficeName] = useState("");
    const [officeNmbr, setOfficeNmbr] = useState("");
    const [deleteNmbr, setDeleteNmbr] = useState("");

    async function saveOffice() {
        try {
            const response = await axios.post("http://localhost:8080/api/offices/save", {
                name: officeName,
                number: officeNmbr
            });
            console.log("Status:", response.status, "Data:", response.data);
            if (response.status == 200) {
                alert(response.data);
                reloadList();
            }
        } catch (error) {
            console.log("Error status:", error.response?.status, "Data:", error.response?.data, error);
            alert(error.response ? error.response.data : "Office is not saved: backend not reachable");
        }
    }



   
    async function deleteOffice() {
        try{
            const response = await axios.delete(`http://localhost:8080/api/offices/deleteByNumber/${deleteNmbr}`);
            alert(response.data);
            reloadList();
        }catch(error){
            alert(error.response ? error.response.data : "Backend not reachable")
        }
        
    }



    return (
        <div>
            <h1>SAVE OFFICE</h1>
            <label>OFFICE NAME:</label>
            <input type="text" onChange={e => setOfficeName(e.target.value)} /> <br />
            <label>OFFICE NUMBER:</label>
            <input type="text" onChange={e => setOfficeNmbr(e.target.value)} />
            
            <LibraryButton buttonAction={saveOffice} buttonLabel="SAVE" />

            <h2>DELETE OFFICE</h2>
            <input type="text" placeholder="Office Number" onChange={e => setDeleteNmbr(e.target.value)} />
            <LibraryButton buttonAction={deleteOffice} buttonLabel="DELETE" />

        </div>
    );
}

export default Office;
