export default function ActiveInactive() {
  return (
    <div>
      <div className="form-control">
        <label className="label cursor-pointer flex items-center justify-center gap-3">
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-mainViolet"
            defaultChecked
          />
          <span className="label-text">Active</span>
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer flex items-center justify-center gap-3">
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-mainViolet"
            defaultChecked
          />
          <span className="label-text">Inactive</span>
        </label>
      </div>
    </div>
  );
}
