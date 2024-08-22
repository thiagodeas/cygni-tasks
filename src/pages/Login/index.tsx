export const Login = () => {
  return (
    <div className="flex items-center justify-center bg-background-grad w-screen h-screen">
      <div className="flex items-center justify-center bg-stellar-lavender w-[400px] h-[450px] rounded-l-2xl">
        <div className="flex flex-col items-center justify-center text-center border-cloudy-rose gap-6">
          <img src="/assets/space.svg" className="w-[300px]"></img>
          <p className="text-galactic-glow font-semibold text-[15px]">
            Organize seu universo, uma tarefa de cada vez.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-around bg-galactic-glow w-[400px] h-[450px] rounded-r-2xl">
          <div className="text-center">
          <h1 className="text-title-name font-extrabold mt-8 text-space-blue">CygniTasks</h1>
          </div>
         <div className="mb-32">
         <h2 className="text-sec-title font-extralight mb-6 text-center text-space-blue">Seja bem-vindo!</h2>
          <form className="flex flex-col items-center justify-center gap-4">
            <div>
              <label>
                <p className="text-space-blue">Usuário</p>
                <input
                  type="text"
                  name="user"
                  className="border border-gray-400 rounded-md outline-none bg-transparent px-2 py-3 h-7"
                />
              </label>
            </div>
            <div>
              <label>
                <p className="text-space-blue">Senha </p>
                <input
                  type="password"
                  name="password"
                  className="border border-gray-400 rounded-md outline-none bg-transparent px-2 py-3 h-7"
                />
              </label>
            </div>
          </form>
         </div>
        </div>
      </div>
  );
};
