export const Register = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-galactic-glow w-[400px] h-[550px] rounded-l-2xl">
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

          <form>
            
            <div>
              <p>Digite seu nome de usuário</p>
              <input
              type="text"
              name="newuser"
              required
              className="border border-cloudy-rose rounded-md outline-none bg-transparent px-2 py-3 h-8"
              ></input>
            </div>

            <div>
              <p>Digite sua senha (+ de 5 caracteres)</p>
              <input
              type="password"
              name="newpassword"
              required
              className="border border-cloudy-rose rounded-md outline-none bg-transparent px-2 py-3 h-8"
              ></input>
            </div>

          </form>

        </div>
      </div>

      <div className="flex flex-col items-center justify-center bg-stellar-lavender w-[400px] h-[550px] rounded-r-2xl gap-4"></div>
    </>
  );
};
