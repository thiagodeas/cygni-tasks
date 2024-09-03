import { useState } from "react";

export const Dashboard: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-[#290D34] w-screen h-screen flex flex-col items-center justify-center gap-8">
      <h1 className="text-custom-title text-galactic-glow text-center font-semibold">
        Tarefas do dia
      </h1>

      <div
        className={`flex ${
          isExpanded ? " flex-col " : " flex-row "
        }items-center justify-start border-2 rounded-lg border-stellar-lavender transition-all ease-in-out duration-700 w-[800px] ${
          isExpanded ? "h-[280px]" : "h-[50px]"
        }`}
      >
        <input
          type="text"
          placeholder="Adicionar uma nova tarefa"
          className="bg-transparent outline-none w-full h-10 py-12 text-galactic-glow text-center text-options-title placeholder: tracking-wide"
          onClick={toggleExpansion}
        />

        {isExpanded && (
          <div className="flex flex-col items-center justify-start w-full text-galactic-glow h-[50px] transition-all ease-in-out duration-700 px-12">
            <div className="flex items-center justify-between w-full">
              <span className="p-2 text-options-title">Prioridade</span>
              <div className="flex gap-2">
                <input type="radio" name="priority" className="w-4" />
                Alta
              </div>
              <div className="flex gap-2">
                <input type="radio" name="priority" className="w-4" />
                Média
              </div>
              <div className="flex gap-2">
                <input type="radio" name="priority" className="w-4" />
                Baixa
              </div>
            </div>
            <button className="mt-12 p-2 border-stellar-lavender border-2 rounded-lg">Adicionar tarefa</button>
          </div>
        )}
      </div>
    </div>
  );
};
