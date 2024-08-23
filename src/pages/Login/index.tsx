import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <>
      <div className="flex items-center justify-center bg-background-grad w-[400px] h-[550px] rounded-l-2xl">
        <div className="flex flex-col items-center justify-center text-center">
          <img src="/assets/space.svg" className="w-[350px] h-[400px]"></img>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center bg-galactic-glow w-[400px] h-[550px] rounded-r-2xl gap-4">
        <div>
          <h1 className="text-main-title font-extrabold text-space-blue">
            CygniTasks
          </h1>
          <h2 className="text-sec-title font-extralight text-center text-space-blue">
            Seja bem-vindo!
          </h2>
        </div>

        <div>
          <form className="flex flex-col items-center justify-center mt-4">
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
            <button className="bg-stellar-lavender w-24 h-10 rounded-lg text-center text-[1.2rem] text-white font-semibold tracking-wider flex items-center justify-center hover:scale-110 transition-all ease-in-out duration-700 mt-8">Login</button>
          </form>
        </div>
        <div className="flex flex-col items-center justify-center text-center mt-6">
          <p className="pb-2 text-[1.2rem] text-space-blue font-light text-center">
            Ainda não possui cadastro?
          </p>
          <Link
            to={"/register"}
            className="bg-cloudy-rose w-28 h-8 rounded-lg text-center text-white font-semibold flex items-center justify-center hover:scale-110 transition-all ease-in-out duration-700"
          >
            Criar conta
          </Link>
        </div>
      </div>
    </>
  );
};
