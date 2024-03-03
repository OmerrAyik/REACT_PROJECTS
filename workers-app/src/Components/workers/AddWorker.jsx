import { Card } from "../UI/card";
import { Button } from "../UI/button";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

const AddWorkers = (props) => {

  const [enteredName, setenteredName] = useState("");
  const [enteredWage, seteneteredWage] = useState("");
  const [error,setError] =useState();

  const minimumwage = 5000;

  const addWorkerHandler = (e) => {

    e.preventDefault();
    if (enteredName.trim().length === 0) {
      setError(
        {
          title:"İsim Alanı Zorunludur",
          message:"Lütfen bir mesaj giriniz"
        })
      return;
    }
    if (+enteredWage < minimumwage) {
      setError(
        {
          title:"Maaş Alanı zorunludur",
          message:`Lütfen ${minimumwage} değerinden yüksek bir maaş giriniz`
        })
      return;
    }
    console.log(enteredName, enteredWage);

    props.setWorkers((prevState) => [
      {
        id: Math.random() * 1000,
        name: enteredName,
        wage: enteredWage,
      },
      ...prevState
    ])



    setenteredName("");
    seteneteredWage("");
  }

  const errorHandler =()=>
  {
    setError(null)
  }

  return (
    <div>
      {error && <ErrorModal onConfirm={errorHandler} error={error}  />}
      <Card className="mt-10 bg-red-500">
        <form className="flex flex-col gap-y-2" onSubmit={addWorkerHandler} >
          <label htmlFor="name" className="font-medium">
            Çalışan İsmi
          </label>
          <input
            type="text"
            className="max-w-[40rem] w-full mx-auto border p-2"
            placeholder="Çalışan ismi yazınız"
            id="name"
            onChange={(e) => setenteredName(e.target.value)}
            value={enteredName}
          />
          <label htmlFor="wage" className="font-medium">
            Maaş Miktarı
          </label>
          <input
            type="number"
            className="max-w-[40rem] w-full mx-auto border p-2"
            placeholder="Maaş miktarı yazınız"
            id="wage"
            onChange={(e) => seteneteredWage(e.target.value)}
            value={enteredWage}
          />
          <Button type="submit">Ekle</Button>
        </form>
      </Card>
    </div>
  );
}
export default AddWorkers;