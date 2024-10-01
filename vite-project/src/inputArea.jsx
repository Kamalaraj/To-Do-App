import React,{useState} from 'react';// import react and useState.

const InputArea = (props) => {
  const [inputText,setInputText] = useState("");//declaration of useState.

  const handleChange = (event) => {
    const newValue = event.target.value;
    setInputText(newValue);
  }
  return (
    <div className="form">
      <input type="text" onChange={handleChange} value={inputText}/>
      <button onClick={()=> {props.addItem(inputText); setInputText("");}}>
        <span>Add</span>
        </button>
    </div>
  )
}

export default InputArea;