import { AsyncImage } from "loadable-image";

export default function PersonalComp({
  gender,
  status,
  name,
}: {
  gender: "male" | "female";
  status: "active" | "inactive";
  name: string;
}) {
  return (
    <div className="relative p-4 border border-transparent hover:border-mainDark transition-all w-80 ">
      <AsyncImage
        src={`https://xsgames.co/randomusers/avatar.php?g=${gender}`}
        style={{ width: 285, height: 400 }}
        loader={<div className="skeleton"></div>}
        error={<div style={{ background: "#eee" }} />}
        loading="lazy"
      />

      <div className="bg-white absolute flex top-9 right-10 font-sans text-sm font-semibold items-center gap-1 py-[2px] px-2 rounded-md">
        <div
          className={`w-3 h-3 rounded-full ${
            status === "active" ? "bg-green-600" : "bg-red-600"
          } `}
        ></div>
        <div>{status === "active" ? "Active" : "Inactive"}</div>
      </div>
      <div className=" absolute bottom-14 right-0 left-0 text-white font-black font-sans text-[22px]">
        {name}
      </div>
    </div>
  );
}
