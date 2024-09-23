export default function Button({
  buttonDialogue,
  isViolet,
  isBlack,
  isLoading,
  isWhite,
  additionClassName,
  onClick,
}: {
  buttonDialogue?: string;
  isViolet?: boolean;
  isLoading?: boolean;
  isBlack?: boolean;
  isWhite?: boolean;
  additionClassName?: string;
  onClick?: () => void;
}) {
  return (
    <button
      className={`rounded-badge ${
        isViolet
          ? "bg-mainViolet text-white"
          : isBlack
          ? "bg-mainDark text-white"
          : ""
      }  ${
        isLoading ? "px-12 text-white" : ""
      } py-2 font-graphik  hover:bg-hoverViolet active:shadow-inner active:shadow-slate-800 transition-all ${
        isWhite ? "bg-white text-mainDark hover:bg-white active:bg-white" : ""
      } ${additionClassName}`}
      onClick={onClick}
    >
      {buttonDialogue}
      <span
        className={`loading loading-dots ${isLoading ? "" : "hidden"}`}
      ></span>
    </button>
  );
}
