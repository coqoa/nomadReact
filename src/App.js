import { useState} from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (e) => setToDo(e.target.value)
  const onSubmit = (e) => {
    e.preventDefault();
    if(toDo === ''){
      return
    }
    setToDo("")
    setToDos((currentArray) =>  [toDo, ...currentArray] )
    // 기존의 array에 새로운 값을 넣는데 React에서는 직접 toDos 를 변경하지 않고 modify function을 사용한다
    // setToDos((현재배열) =>  [추가값, ...현재배열] ) 하면 현재배열을 추가값+현재배열까지 합친 배열의 형태로 변경한다
  }
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="Writh your to do..." />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index)=><li key={index}>{item}</li>)}
      </ul>
    </div>
  )
}


export default App;
