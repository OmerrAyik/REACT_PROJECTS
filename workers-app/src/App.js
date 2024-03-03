import { useState } from "react";
import AddWorkers from "./Components/workers/AddWorker";
import { WorkerList } from "./Components/workers/WorkerList";

function App() {
  const [workers,setWorkers] =useState([]);
  return (
    <div className="App">
      <h1 className="text-white text-3xl text-center mt-10">Maaş Otomasyonu</h1>
      <AddWorkers setWorkers={setWorkers} />
      <WorkerList workers={workers} setWorkers={setWorkers}/>
      
    </div>
  );
}

export default App;
