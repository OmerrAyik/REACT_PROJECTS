import Card from "../UI/card";
import Button from "../UI/button";
import { useState } from "react";

const AddWorker = () => {
    
    const[WorkerName,setWorkerName] =useState();
    const[WorkerWage,setWorkerWage]=useState();

    const AddworkerHandler=(e)=>
    {
        e.preventDefault();
       

        console.log(WorkerName,WorkerWage);
        setWorkerName("");
        setWorkerWage("");

        if(WorkerName.trim().length===0)
        {
            return;
        }
        if(WorkerWage.trim().length<5000)
        {
            return;
        }
    }
    
    return (
        <Card>
            <form className="flex flex-col gap-y-2" onSubmit={AddworkerHandler}>
                <label htmlFor="name" className="font-medium">
                    Çalışan İsmi
                </label>
                <input
                    type="text"
                    className="max-w-[40rem] w-full mx-auto border p-2"
                    placeholder="Çalışan ismi yazınız"
                    id="name"
                    onChange={(e)=>setWorkerName(e.target.value)}
                    value={WorkerName}
                />
                <label htmlFor="wage" className="font-medium">
                    Maaş Miktarı
                </label>
                <input
                    type="number"
                    className="max-w-[40rem] w-full mx-auto border p-2"
                    placeholder="Maaş miktarı yazınız"
                    id="wage"
                    onChange={(e)=>setWorkerWage(e.target.value)}
                    value={WorkerWage}
                />
                <Button className="cursor-pointer" type="submit">Ekle</Button>
            </form>
        </Card>
    )
}

export default AddWorker;