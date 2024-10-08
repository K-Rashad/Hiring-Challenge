export const Logo = ({ width, height }: { width: string; height: string }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 50 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="14" cy="14" r="14" fill="#222222" />
      <circle cx="41" cy="15" r="9" fill="#9B62E0" />
    </svg>
  );
};
