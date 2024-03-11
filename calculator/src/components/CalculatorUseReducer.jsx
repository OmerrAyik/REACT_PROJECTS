
import { useReducer } from "react";
import "../components/Calculator.css";

const reducer = (state, action) => {
    switch (action.type) {
        case "Number1":
            return { ...state, number1: action.payload }
        case "Number2":
            return {...state,number2:action.payload}
        case "result" :
            return {...state, result:action.payload}
        default:
            throw new Error("Invalid !")

    }

}

const initionalState =
{
    number1: 0,
    number2: 0,
    result: 0
}

const CalculatorUseReducer = () => {

    const [state, dispatch] = useReducer(reducer, initionalState)

    const number1ChangeHandler =(e)=>
    {
        dispatch({type:"Number1" , payload :Number(e.target.value)})
    }

    const number2ChangeHandler =(e)=>
    {
        dispatch({type:"Number2", payload :Number(e.target.value)})
    }

    const result=()=>
    {
        dispatch({ type:"result", payload:Number(state.number1 + state.number2)})
    }


    return (
        <div className="calculator-container">
            <h1>useReducer</h1>
            <div className="form-container">
                <div className="form-group">
                    <label className="form-label" htmlFor="number1" >Number1</label>
                    <input className="from-input" type="number" id="number1"
                    onChange={number1ChangeHandler}
                    value={state.number1}
                    />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="number2" >Number2</label>
                    <input className="from-input" type="number" id="number2"
                    onChange={number2ChangeHandler}
                    value={state.number2}
                    />
                </div>
                <button className="form-button"
                onClick={result}
                >Add</button>
                <div className="form-group">
                    <label className="form-label" htmlFor="result" >Result</label>
                    <input className="from-input" type="number" id="result"
                        readOnly
                        onChange={result}
                        value={state.result}
                    />
                </div>
            </div>
        </div>
    )
}
export default CalculatorUseReducer;

