import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="flex items-center justify-center bg-[url('/assets/bg-galaxy.jpeg')] bg-cover w-screen h-screen">
      <div className="flex items-center justify-center bg-stellar-lavender w-[400px] h-[450px] rounded-l-2xl">
        <div className="flex flex-col items-center justify-center text-center border-cloudy-rose gap-6">
          <img src="/assets/space.svg" className="w-[300px]"></img>
          <p className="text-white font-light tracking-wide">
            Organize seu universo, uma tarefa de cada vez.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center bg-galactic-glow w-[400px] h-[450px] rounded-r-2xl gap-4">
        
          <div>
          <h1 className="text-main-title font-extrabold text-space-blue mt-2">CygniTasks</h1>
          <h2 className="text-sec-title font-extralight text-center text-space-blue">Seja bem-vindo!</h2>
          </div>
          
         <div>
          <form className="flex flex-col items-center justify-center">
            <div>
              <label>
                <p className="text-space-blue text-[1.3rem] pb-1">Usuário</p>
                <input
                  type="text"
                  name="user"
                  className="border border-gray-400 rounded-md outline-none bg-transparent px-2 py-3 mb-3 h-8"
                />
              </label>
            </div>
            <div>
              <label>
                <p className="text-space-blue text-[1.3rem] pb-1">Senha </p>
                <input
                  type="password"
                  name="password"
                  className="border border-gray-400 rounded-md outline-none bg-transparent px-2 py-3 h-8"
                />
              </label>
            </div>
          </form>
         </div>
         <div className="flex flex-col items-center justify-center text-center mb-8">
          <p className="p-4 text-[1.2rem] text-space-blue">Ainda não possui cadastro?</p>
          <Link to={"/"} className="bg-cloudy-rose w-36 h-10 rounded-lg text-center text-[1.2rem] text-white font-bold tracking-wider flex items-center justify-center hover:scale-110 transition-all ease-in-out duration-700">Criar conta</Link>
         </div>
        </div>
      </div>
  );
};
