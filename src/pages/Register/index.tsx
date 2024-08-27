import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-white w-[400px] h-[550px] rounded-l-2xl">
        <div className="flex flex-col items-center justify-center text-center mb-6">
        <h1 className="text-main-title font-extrabold text-space-blue text-center">
            CygniTasks 🚀
          </h1>
          <h1 className="text-sec-title font-light text-cloudy-rose text-center">
            Cadastre-se
          </h1>
        </div>

        <div className="mb-6">
          <form className="flex flex-col items-center justify-center">
            <div>
              <p className="text-space-blue text-[1.3rem] pb-1">Usuário</p>
              <input
              type="text"
              name="newuser"
              required
              className="border border-cloudy-rose rounded-md outline-none bg-transparent px-2 py-3 h-8 mb-3 w-60"
              ></input>
            </div>

            <div>
              <p className="text-space-blue text-[1.3rem] pb-1">Crie sua senha</p>
              <input
              type="password"
              name="newpassword"
              required
              className="border border-cloudy-rose rounded-md outline-none bg-transparent px-2 py-3 h-8 w-60"
              ></input>
            </div>

            <Link to="/" className="bg-cloudy-rose w-28 h-10 rounded-lg text-center text-white font-semibold flex items-center justify-center hover:scale-110 transition-all ease-in-out duration-700 mt-4 text-[1.2rem] ">Cadastrar</Link>

          </form>
        </div>

        <div className="flex flex-col justify-center items-center mt-6 text-center">
          <p className="text-space-blue text-[1.2rem] pb-2 font-light">Já possui cadastro?</p>
          <Link to = "/" className="bg-stellar-lavender w-28 h-8 rounded-lg text-center text-white font-semibold flex items-center justify-center hover:scale-110 transition-all ease-in-out duration-700">Faça login</Link>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center bg-[#290D34] bg-stars-pattern w-[400px] h-[550px] rounded-r-2xl gap-4"><img src="/assets/myu.gif" className="h-72 w-72 rounded-full"></img></div>
    </>
  );
};
