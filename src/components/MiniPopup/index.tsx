interface MiniPopupProps {
  message: string;
  buttonMessage: string;
  isOpen: boolean;
  onClose: () => void;
}

export const MiniPopup = ({ message, buttonMessage, isOpen, onClose }: MiniPopupProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white w-[350px] h-[120px] rounded-lg text-center flex flex-col items-center justify-center">
        <p className="text-cloudy-rose text-[1.8rem] font-bold">{message}</p>
        <button onClick={onClose} className="bg-stellar-lavender mt-4 w-32 h-8 rounded-lg text-center text-white font-semibold flex items-center justify-center hover:scale-110 transition-all ease-in-out duration-700">{buttonMessage}</button>
      </div>
    </div>
  );
};
