import { useState } from "react";
import { IoPlanetOutline } from "react-icons/io5";
import { api } from "../../api";
import { Task } from "../../components/Task";

interface TaskData {
  id: string;
  description: string;
  completed: boolean;
  priority: string;
}

export const Dashboard: React.FC = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<TaskData[]>([]);
  const [priority, setPriority] = useState("low");

  const createTask = async () => {
    const token = localStorage.getItem('token');

    if (!token) {
      console.error("Token não encontrado!");
      return;
    }

    try {
      const response = await api.post('/task', {
        description: task,
      },
      {headers:{
        Authorization: `Bearer ${token}`,
      },
      });

      if (response.status === 201) {
        setTasks([...tasks, {
          id: response.data.id,
          description: task,
          completed: false,
          priority: priority
        }])
        setTask("");
        setPriority("low");
      }

    } catch (error) {
      console.error("Não foi possível criar nova tarefa ", error);
    }
  };

  const handleCheckboxChange = (id: string) => {
    setTasks(tasks.map(task => task.id === id ? {...task, completed: !task.completed } : task));
  }

  return (
    <div className="bg-[#290D34] w-screen h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-custom-title text-galactic-glow text-center font-bold">
        Tarefas do dia
      </h1>

      <div
        className={`flex ${
          task ? " flex-col " : " flex-row "
        }items-center justify-start border-[1px] rounded-lg bg-transparent border-cloudy-rose transition-all ease-in-out duration-700 w-[800px] ${
          task ? "h-[280px]" : "h-[50px]"
        }`}
      >
        <input
          type="text"
          placeholder="Digite uma nova tarefa"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
          className="bg-transparent outline-none w-full h-10 py-10 font-light text-galactic-glow text-center text-options-title placeholder: tracking-wide placeholder:text-galactic-glow placeholder:font-light"
        />

        {task && (
          <div className="flex flex-col items-center justify-start w-full text-galactic-glow h-[50px] transition-all ease-in-out duration-700">
            <div className="flex items-center justify-center w-full border-cloudy-rose border-y-[1px] py-2 gap-32">
              <span className="p-2 text-options-title pr-8">Prioridade</span>
              <div className="flex gap-2">
                <input
                type="radio" 
                name="priority" 
                id="low-priority" 
                value="low"
                checked={priority === "low"}
                onChange={() => setPriority("low")}
                className="hidden" 
                />
                <label htmlFor="low-priority" className="radio-label"></label>
                Baixa
              </div>
              <div className="flex gap-2">
                <input 
                type="radio" 
                name="priority" 
                id="medium-priority" 
                value="medium"
                checked={priority === "medium"}
                onChange={() => setPriority("medium")}
                className="hidden" 
                />
                <label htmlFor="medium-priority" className="radio-label"></label>
                Média
              </div>
              <div className="flex gap-2">
                <input 
                type="radio" 
                name="priority" 
                id="high-priority" 
                value="high"
                checked={priority === "high"}
                onChange={() => setPriority("high")}
                className="hidden" 
                />
                <label htmlFor="high-priority" className="radio-label"></label>
                Alta
              </div>
            </div>
            <button
            className="flex items-center justify-center mt-12 gap-x-2 p-2 w-48 rounded-lg bg-background-grad font-semibold text-white text-center text-[1.1rem] hover:scale-110 transition-all ease-in-out duration-700"
            onClick={createTask}
            >Adicionar tarefa 
            <IoPlanetOutline className="text-[1.6rem]" />
            </button>
          </div>
        )}
      </div>

      {tasks.map(task => (
        <Task
          key={task.id}
          id={task.id}
          description={task.description}
          checked={task.completed}
          priority={task.priority}
          onChange={handleCheckboxChange}
        />
      ))}
    
    </div>
  );
};
