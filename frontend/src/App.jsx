import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
    const [message, setMessage] = useState("Loading...");
    const [dbStatus, setDBStatus] = useState("Checking...");

    useEffect(() => {
        axios.get("/api/hello")
            .then(response => setMessage(response.data.message))
            .catch(error => setMessage(`Error: ${error}`));

        axios.get("/api/db-check")
            .then(response => setDBStatus(response.data.db_status))
            .catch(error => setDBStatus(`Error: ${error}`));
    }, []);

    return (
        <div>
            <h1>React Frontend</h1>
            <p><strong>Backend Message:</strong> {message}</p>
            <p><strong>DB Status:</strong> {dbStatus}</p>
        </div>
    );
}
export default App;