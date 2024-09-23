import { useState } from "react";
import PieChartComp from "./pieChart";

export default function ModalChart({
  maleCount,
  femaleCount,
  availabileMaleCount,
  availabileFemaleCount,
}: {
  maleCount: number;
  femaleCount: number;
  availabileMaleCount: number;
  availabileFemaleCount: number;
}) {
  const [currentModal, setCurrentModal] = useState("gender");
  console.log(availabileMaleCount, " ", availabileFemaleCount);
  return (
    <dialog id="graph_modal" className="modal">
      <div className="modal-box max-w-none w-full xs:w-[490px] sm:w-[600px] md:w-[650px] lg:w-[700px]  xl:w-[800px] min-w-[412px]">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>

        <div className="flex items-center gap-3 border-b pb-7 border-slate-200">
          <div className="text-lg font-medium">Status</div>
          <select
            className="select w-auto max-w-xs select-bordered rounded-none select-sm focus:outline-none"
            onChange={(e) => {
              setCurrentModal(e.target.value);
            }}
          >
            <option disabled selected>
              Select
            </option>
            <option value="gender">Gender</option>
            <option value="availability">Availability for Chat</option>
          </select>
        </div>
        <div className="flex pt-5 flex-col sm:flex-row">
          {/* chart */}
          <div className="flex-1 border-r">
            {currentModal === "gender" ? (
              <PieChartComp maleCount={maleCount} femaleCount={femaleCount} />
            ) : (
              <PieChartComp
                maleCount={availabileMaleCount || 0}
                femaleCount={availabileFemaleCount || 0}
              />
            )}
          </div>
          {/* Data */}
          <div className="w-full flex-1 py-5 pl-20 flex flex-col gap-10 ">
            {currentModal === "gender" ? (
              <div className="text-xl">Gender Distribution</div>
            ) : (
              <div className="text-xl">Availability for Chat</div>
            )}
            <div className="flex  flex-col gap-1">
              <div className="flex items-center gap-2 text-lg font-sans font-light">
                <div className="w-3 h-3 bg-blue-200 rounded-full"></div>
                <div>Female</div>
              </div>
              <div className="font-medium text-3xl ml-5">
                {currentModal === "gender"
                  ? maleCount + femaleCount > 0
                    ? ((100 / (maleCount + femaleCount)) * femaleCount).toFixed(
                        2
                      ) + "%"
                    : "0%"
                  : availabileMaleCount + availabileFemaleCount > 0
                  ? (
                      (100 / (availabileMaleCount + availabileFemaleCount)) *
                      availabileFemaleCount
                    ).toFixed(2) + "%"
                  : "0%"}
              </div>
            </div>
            <div className="flex  flex-col gap-1">
              <div className="flex items-center gap-2 text-lg font-sans font-light">
                <div className={`w-3 h-3 bg-pink-200 rounded-full`}></div>
                <div>Male</div>
              </div>
              <div className="font-medium text-3xl ml-5">
                {currentModal === "gender"
                  ? maleCount + femaleCount > 0
                    ? ((100 / (maleCount + femaleCount)) * maleCount).toFixed(
                        2
                      ) + "%"
                    : "0%"
                  : availabileMaleCount + availabileFemaleCount > 0
                  ? (
                      (100 / (availabileMaleCount + availabileFemaleCount)) *
                      availabileMaleCount
                    ).toFixed(2) + "%"
                  : "0%"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}
