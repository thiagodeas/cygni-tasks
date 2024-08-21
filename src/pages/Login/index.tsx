export const Login = () => {
  return (
    <div className="flex items-center justify-center bg-background-grad w-screen h-screen">
      <div className="flex items-center justify-center bg-stellar-lavender w-[400px] h-[450px] rounded-l-2xl">
        <div className="flex flex-col items-center justify-center text-center border-cloudy-rose gap-8">
          <img src="/assets/space.svg" className="w-[300px]"></img>
          <p className="text-galactic-glow font-semibold">
            Organize seu universo, uma tarefa de cada vez.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center bg-galactic-glow w-[400px] h-[450px] rounded-r-2xl">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-title font-semibold">Login</h1>
          <form className="flex flex-col items-center justify-center gap-4">
            <div>
              <label>
                <p>Usuário</p>
                <input
                  type="text"
                  name="user"
                  className="border border-gray-400 rounded-md outline-none bg-transparent px-2 py-3 h-7"
                />
              </label>
            </div>
            <div>
              <label>
                <p>Senha</p>
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
