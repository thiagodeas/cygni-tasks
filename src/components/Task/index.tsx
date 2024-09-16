import { FaRegTrashAlt } from "react-icons/fa";

interface TaskProps {
  description: string;
  id: string,
  checked: boolean,
  priority: string,
  onChange: (id:string) => void;
  deleteTask: (id:string) => void;
}

export const Task: React.FC<TaskProps> = ({ description, id, priority, checked, onChange, deleteTask }) => {
  const getPriorityClass = () => {
    switch (priority) {
      case "high":
        return "text-red-500";
      case "medium":
        return "text-yellow-500";
      case "low":
        default:
          return "text-green-500";
    }
  }

  return (
    <div className={`flex items-center justify-center border-[1px] text-center bg-[#290D34] opacity-95 border-cloudy-rose h-[50px] w-[800px] rounded-lg ${getPriorityClass()}`}>
      <div className="flex items-center justify-between py-1 h-full w-full text-center">

       <div className="flex items-center justify-center text-center py-1 px-4">
        <input
          type="checkbox" 
          id={id} 
          checked={checked}
          onChange={() => onChange(id)}
          className="hidden" 
          />
          <label htmlFor={id} className="radio-label"></label>
          <span className={`text-galactic-glow pl-2 transition-all duration-500 ${checked? "line-through opacity-60" : "opacity-100"}`}>{description}</span>
       </div>
       
      <div className="flex items-center justify-center pr-4 gap-x-14">
      <span className="text-[13px] flex items-center justify-center text-center">
          {priority === "high"
          ? "Alta prioridade"
          : priority === "medium"
          ? "Média prioridade"
          : priority === "low"
          ? "Baixa prioridade"
        : null}
        </span>
      <button onClick={() => {deleteTask(id)}}>
          <FaRegTrashAlt className="flex justify-center items-center text-[1.2rem] text-cloudy-rose cursor-pointer hover:scale-125 transition-all duration-500" />
        </button>
      </div>
       
      </div>
    </div>
  );
};
