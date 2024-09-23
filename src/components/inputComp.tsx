export default function InputComp({ isError }: { isError: boolean }) {
  return (
    <label className="form-control w-full">
      <input
        type="text"
        className={`border rounded-sm font-graphik font-normal py-3 px-3  w-full focus:border-mainDark outline-none text-base placeholder:text-slate-500 ${
          isError ? "border-red-500 focus:border-red-500" : ""
        }`}
        placeholder="Enter your name"
      />
      {isError ? (
        <div className="label">
          <span className="label-text-alt text-red-500">
            Enter a valid email
          </span>
        </div>
      ) : (
        ""
      )}
    </label>
  );
}
