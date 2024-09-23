import { useEffect, useState } from "react";
import Button from "../components/buttonComponent";
import { AnalyticsIcon } from "../../public/images/analytics";
import { TrashCan } from "../../public/images/Vector";
import { Person } from "./mainPage";
import axios from "axios";

import ModalChart from "../components/modalChart";
import ModalAddingMember from "../components/modalAdding";
import ModalUpdatingUser from "../components/modalUpdate";

export default function AdminPage() {
  const [personData, setPersonData] = useState<Person[]>();
  const [femaleCount, setFemaleCount] = useState<number>(0);
  const [maleCount, setMaleCount] = useState<number>(0);
  const [availabileMaleCount, setAvailableMaleCount] = useState<number>(0);
  const [availabileFemaleCount, setAvailableFemaleCount] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [selectedPerson, setSelectedPerson] = useState<Person>();

  useEffect(() => {
    try {
      axios
        .get(
          `https://gorest.co.in/public/v2/users?page=${pageNumber}&per_page=10`
        )
        .then((res) => {
          console.log(res.data);
          setPersonData((personData) => [...(personData ?? []), ...res.data]);
          const data = res.data;

          const maleCountCurrent = data.filter(
            (person: Person) => person.gender === "male"
          ).length;
          const femaleCountCurrent = data.filter(
            (person: Person) => person.gender === "female"
          ).length;
          const availabileMaleCountCurrent = data.filter(
            (person: Person) =>
              person.status === "active" && person.gender === "male"
          ).length;

          const availabileFemaleCountCurrent = data.filter(
            (person: Person) =>
              person.status === "active" && person.gender === "female"
          ).length;

          setMaleCount(maleCount + maleCountCurrent);
          setFemaleCount(femaleCount + femaleCountCurrent);
          setAvailableMaleCount(
            availabileMaleCount + availabileMaleCountCurrent
          );
          setAvailableFemaleCount(
            availabileFemaleCount + availabileFemaleCountCurrent
          );
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  }, [pageNumber]);

  useEffect(() => {
    const maleCountCurrent = personData?.filter(
      (person: Person) => person.gender === "male"
    ).length;
    const femaleCountCurrent = personData?.filter(
      (person: Person) => person.gender === "female"
    ).length;
    const availabileMaleCountCurrent = personData?.filter(
      (person: Person) => person.status === "active" && person.gender === "male"
    ).length;

    const availabileFemaleCountCurrent = personData?.filter(
      (person: Person) =>
        person.status === "active" && person.gender === "female"
    ).length;

    setMaleCount(maleCountCurrent || 0);
    setFemaleCount(femaleCountCurrent || 0);
    setAvailableMaleCount(availabileMaleCountCurrent || 0);
    setAvailableFemaleCount(availabileFemaleCountCurrent || 0);
  }, [personData]);
  console.log(
    "male count av is ",
    availabileMaleCount,
    " female count av is ",
    availabileFemaleCount
  );

  return (
    <div className="px-10 md:px-20 lg:px-40 pt-16 pb-16">
      <ModalChart
        maleCount={maleCount}
        femaleCount={femaleCount}
        availabileMaleCount={availabileMaleCount}
        availabileFemaleCount={availabileFemaleCount}
      />

      <ModalAddingMember />
      <ModalUpdatingUser
        currentGender={selectedPerson?.gender}
        currentName={selectedPerson?.name}
        currentEmail={selectedPerson?.email}
        currentStatus={selectedPerson?.status}
        personId={selectedPerson?.id}
      />

      <div className="h-3/4 flex flex-col gap-8">
        <div className="flex justify-between">
          <div className="text-xl sm:text-3xl font-medium ">
            Manage creators
          </div>
          <div className="flex gap-3">
            <button
              className=" bg-transparent border rounded-full text-sm px-4 flex items-center gap-1 hover:bg-slate-100 transition-all active:shadow-inner hover:shadow-mainDark sm:h-fit sm:py-2"
              onClick={() => {
                const modal = document.getElementById("graph_modal");
                if (modal) {
                  (modal as HTMLDialogElement).showModal();
                }
              }}
            >
              <AnalyticsIcon />
              <div>
                <span className="hidden sm:inline-block">View</span> Stats
              </div>
            </button>

            <Button
              isViolet={true}
              buttonDialogue="+ Add a new creator"
              additionClassName="px-4  hidden sm:block sm:h-fit sm:py-2"
              onClick={() => {
                const modal = document.getElementById("graph_adding_member");
                if (modal) {
                  (modal as HTMLDialogElement).showModal();
                }
              }}
            />
            <Button
              isViolet={true}
              buttonDialogue="Add "
              additionClassName="px-4 h-fit text-xs sm:text-sm block sm:hidden"
              onClick={() => {
                const modal = document.getElementById("graph_adding_member");
                if (modal) {
                  (modal as HTMLDialogElement).showModal();
                }
              }}
            />
          </div>
        </div>
        <div>
          <div className="overflow-x-auto w-full ">
            <table className="table table-sm  sm:table-lg border">
              <thead>
                <tr className="font-sans font-extralight">
                  <th>Name</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Available for chat</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {personData?.map((person, index) => {
                  return (
                    //   <ModalUpdatingUser />
                    <tr key={index}>
                      <td>{person.name}</td>
                      <td>{person.email}</td>
                      <td>{person.gender}</td>
                      <td
                        className={`${
                          person.status === "active"
                            ? "text-green-500"
                            : "text-red-500"
                        } font-sans font-medium capitalize`}
                      >
                        {person.status}
                      </td>
                      <td className="flex items-center gap-7">
                        <button
                          className="bg-slate-200 px-4 py-[2px] font-medium font-sans rounded-full hover:slate-300 active:shadow-inner active:shadow-slate-500 transition-all"
                          onClick={async () => {
                            const modal =
                              document.getElementById("modal_update_user");
                            if (modal) {
                              (modal as HTMLDialogElement).showModal();
                            }
                            await setSelectedPerson(person);
                          }}
                        >
                          Edit
                        </button>
                        <button
                          className="btn bg-transparent border-none hover:bg-transparent shadow-none"
                          onClick={() => {
                            try {
                              axios
                                .delete(
                                  `https://gorest.co.in/public/v2/users/${person.id}`,
                                  {
                                    headers: {
                                      Authorization: `Bearer ${
                                        import.meta.env.VITE_API_TOKEN
                                      }`,
                                    },
                                  }
                                )
                                .then((res) => {
                                  console.log(res.data);
                                  setPersonData((personData) =>
                                    personData?.filter(
                                      (personData) =>
                                        personData.id !== person.id
                                    )
                                  );
                                })
                                .catch((err) => console.log(err));
                            } catch (err) {
                              console.log(err);
                            }
                          }}
                        >
                          <TrashCan />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className={`flex gap-1 font-semibold bg-slate-200 pl-6 pr-4 py-3 rounded-full hover:bg-slate-300 active:shadow-inner active:shadow-slate-600 transition-all w-fit`}
          >
            <div
              onClick={() => {
                setPageNumber(pageNumber + 1);
              }}
              className="w-fit"
            >
              Load more
            </div>{" "}
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
