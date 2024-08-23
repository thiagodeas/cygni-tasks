import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-white w-[400px] h-[550px] rounded-l-2xl">
        <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-main-title font-extrabold text-space-blue text-center">
            CygniTasks 🚀
          </h1>
          <h1 className="text-custom-title font-extralight text-cloudy-rose text-center">
            Cadastre-se
          </h1>
          <p className="text-cloudy-rose font-light text-[1.2rem]">É rapidinho =) </p>
        </div>

        <div>
          <form className="flex flex-col items-center justify-center">
            <div>
              <p className="text-space-blue text-[1.3rem] pb-1">Usuário</p>
              <input
              type="text"
              name="newuser"
              required
              placeholder="Digite seu nome de usuário"
              className="border border-cloudy-rose rounded-md outline-none bg-transparent px-2 py-3 h-8 mb-3 w-60"
              ></input>
            </div>

            <div>
              <p className="text-space-blue text-[1.3rem] pb-1">Digite sua senha</p>
              <input
              type="password"
              name="newpassword"
              required
              placeholder="Crie sua senha"
              className="border border-cloudy-rose rounded-md outline-none bg-transparent px-2 py-3 h-8 w-60"
              ></input>
            </div>

            <Link to="/" className="bg-cloudy-rose w-28 h-10 rounded-lg text-center text-white font-semibold flex items-center justify-center hover:scale-110 transition-all ease-in-out duration-700 mt-8 text-[1.2rem] ">Cadastrar</Link>

          </form>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center bg-stellar-lavender w-[400px] h-[550px] rounded-r-2xl gap-4"></div>
    </>
  );
};
