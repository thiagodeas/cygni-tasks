interface TaskProps {
  description: string;
  id: string,
  checked: boolean,
  priority: string,
  onChange: (id:string) => void;
}

export const Task: React.FC<TaskProps> = ({ description, id, priority, checked, onChange }) => {
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
    <div className={`flex items-center justify-center border-[1px] bg-[#290D34] opacity-95 border-cloudy-rose h-[50px] w-[800px] rounded-lg ${getPriorityClass()}`}>
      <div className="flex items-center justify-center gap-2">
        <input
        type="checkbox" 
        id={id} 
        checked={checked}
        onChange={() => onChange(id)}
        className="hidden" 
        />
        <label htmlFor={id} className="radio-label"></label>
        <span className={`text-galactic-glow transition-all duration-500 ${checked? "line-through opacity-60" : "opacity-100"}`}>{description}</span>
        <span className="ml-4 text-sm">
          {priority === "high"
          ? "Alta prioridade"
          : priority === "medium"
          ? "Média prioridade"
          : priority === "low"
          ? "Baixa prioridade"
        : null}
        </span>
      </div>
    </div>
  );
};
