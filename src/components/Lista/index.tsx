import React, { useState } from "react";
import Item from "./Item";
import style from './Lista.module.scss'

/*Function Component */
function Lista() {
  const [tarefas, setTarefas] = useState([{
    tarefa: "React",
    tempo: "02:00:00",
  },
  {
    tarefa: "Javascript",
    tempo: "01:00:00",
  }, {
      tarefa: "TypeScript",
      tempo: "03:00:00",
  }]);
  return (
    <aside className={style.listaTarefas}>
      <h2 onClick={() => {
        setTarefas([...tarefas, { tarefa: "Estudar estado", tempo: "05:00:00"}])
      }}>Estudos do dia </h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item 
            tarefa = {item.tarefa}
            tempo = {item.tempo}
            key={index}
            // {...item}
          />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
