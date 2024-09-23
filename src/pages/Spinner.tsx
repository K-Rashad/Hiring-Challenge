export const Spinner = () => {
  return (
    <div className="h-[100vh] w-full flex flex-col item-center px-7 py-7 gap-8">
      <div className="flex md:w-full w-full justify-between gap-8">
        <div className="skeleton sm:w-32 w-48 h-8"></div>
        <div className="skeleton sm:w-32 w-48 h-8"></div>
      </div>
      <div className="w-full skeleton h-[75vh]"></div>
    </div>
  );
};
