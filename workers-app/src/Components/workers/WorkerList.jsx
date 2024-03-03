import { Card } from "../UI/card"

export const WorkerList = (props) => {
    const {workers,setWorkers}=props;

    if(workers.length < 1)
    {
        return;
    }


    const deleteWorker=(id)=>
    {
        setWorkers(
            workers.filter((item)=> item.id !== id)
        );
    }

    return (
        <Card className="mt-10">
            <li className="flex justify-between p-2">
                <span className="font-medium">İsim</span>
                <span className="font-medium">Maaş</span>
            </li>
            {workers.map((worker) =>
            (
                <li className="flex justify-between p-2 cursor-pointer hover:shadow-xl transition-shadow"
                key ={worker.id}
                onClick={()=> deleteWorker(worker.id)}
                >
                    <span className="font-medium">{worker.name}</span>
                    <span className="font-medium  text-teal-700">{worker.wage}</span>
                </li>
            ))}
        </Card>
    )
}