interface TaskProps {
  description: string;
  id: string,
  checked: boolean,
  onChange: (id:string) => void;
}

export const Task: React.FC<TaskProps> = ({ description, id, checked, onChange }) => {
  return (
    <div className="flex items-center justify-center border-[1px] border-cloudy-rose h-[50px] w-[800px] rounded-lg">
      <div className="flex items-center justify-center gap-2">
        <input
        type="checkbox" 
        id={id} 
        checked={checked}
        onChange={() => onChange(id)}
        className="hidden" 
        />
        <label htmlFor={id} className="radio-label"></label>
        <span className="text-galactic-glow">{description}</span>
      </div>
    </div>
  );
};
