interface PopupProps {
  message: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Popup = ({ message, isOpen, onClose }: PopupProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white w-[550px] h-[300px] rounded-lg text-center flex flex-col items-center justify-center">
        <p className="text-cloudy-rose text-sec-title font-bold">{message}</p>
        <button onClick={onClose} className="bg-stellar-lavender mt-10 w-52 h-10 rounded-lg text-center text-white font-semibold flex items-center justify-center hover:scale-110 transition-all ease-in-out duration-700">Ir para página de Login</button>
      </div>
    </div>
  );
};
