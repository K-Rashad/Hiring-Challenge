import { useEffect, useState } from "react";
import Button from "./buttonComponent";
import axios from "axios";

export default function ModalUpdatingUser({
  currentName,
  currentGender,
  currentEmail,
  currentStatus,
  personId,
}: {
  currentName?: string;
  currentGender?: string;
  currentEmail?: string;
  currentStatus?: string;
  personId?: number;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const [validEmail, setvalidEmail] = useState(true);
  const [alertFlag, setAlertFlag] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    if (alertFlag) {
      timeoutId = setTimeout(() => {
        setAlertFlag(false);
      }, 5000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [alertFlag]);

  useEffect(() => {
    setName(currentName || "hhh");
    setEmail(currentEmail || "");
    setGender(currentGender || "");
    setStatus(currentStatus || "");
  }, [currentName, currentEmail, currentGender, currentStatus]);
  return (
    <dialog id="modal_update_user" className="modal">
      <div
        role="alert"
        className={`alert alert-error w-[300px] ${
          alertFlag ? "" : "hidden"
        } absolute z-50 top-10`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>{alertMessage}</span>
      </div>
      <div className="modal-box  md:w-[700px] xl:w-1/2 max-w-[1000px] min-w-[400px] py-9 px-10 lg:px-20">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>

        <div className="flex items-center gap-3 border-b pb-7 pt-3 border-slate-200">
          <div className="text-2xl font-medium">Update Details</div>
        </div>
        <div className="flex pt-8 w-full items-center flex-col gap-10">
          <div className="flex flex-col sm:flex-row w-full justify-between gap-3 sm:gap-10">
            <div className="min-w-[150px] flex  items-center text-lg font-medium sm:font-semibold">
              Creator Name
            </div>
            <div className="w-full">
              <input
                type="text"
                className="border py-3 rounded-md w-full outline-none focus:border focus:border-mainDark px-5"
                placeholder="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row w-full justify-between gap-3 sm:gap-10">
            <div className="min-w-[150px] flex flfex items-center text-lg font-medium sm:font-semibold">
              Email
            </div>
            <div className="w-full">
              <label className="form-control w-full">
                <input
                  type="email"
                  value={email}
                  className={`border rounded-sm font-graphik font-normal py-3 px-3 w-full focus:border-mainDark outline-none text-base placeholder:text-slate-500 ${
                    !validEmail ? "border-red-500 focus:border-red-500" : ""
                  }`}
                  placeholder="email"
                  onChange={(e) => {
                    console.log(validEmail);
                    const inputValue = e.target.value;
                    setEmail(inputValue);

                    const emailCheckRegex =
                      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

                    if (emailCheckRegex.test(inputValue) || inputValue === "") {
                      setvalidEmail(true);
                      console.log("hi");
                    } else {
                      setvalidEmail(false);
                    }
                  }}
                />
                {!validEmail && (
                  <div className="label">
                    <span className="label-text-alt text-red-500">
                      Enter a valid email
                    </span>
                  </div>
                )}
              </label>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row w-full justify-between gap-3 sm:gap-10">
            <div className="min-w-[150px] flex flfex items-center text-lg font-medium sm:font-semibold">
              Gender
            </div>
            <div className="w-full">
              <select
                className="select select-bordered w-full focus:outline-none focus:border-mainDark"
                onChange={(e) => setGender(e.target.value)}
                value={gender}
              >
                <option disabled selected>
                  Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
          <div className="flex w-full sm:gap-10 justify-between sm:justify-normal">
            <div className="min-w-[150px]  flex items-center text-lg font-semibold">
              Available for chat
            </div>
            <div className="flex">
              <div className="form-control">
                <label className="label cursor-pointer flex items-center justify-center gap-3">
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio checked:bg-mainViolet"
                    checked={status === "active"}
                    value="active"
                    onChange={(e) => {
                      setStatus(e.target.value);
                    }}
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
                    checked={status === "inactive"}
                    value="inactive"
                    onChange={(e) => {
                      setStatus(e.target.value);
                    }}
                  />
                  <span className="label-text">Inactive</span>
                </label>
              </div>
            </div>
          </div>
          <div className="flex justify-start w-full">
            {" "}
            <Button
              isViolet={true}
              buttonDialogue="update"
              additionClassName={`px-4 ${
                validEmail && name && email && status && gender
                  ? ""
                  : "btn-disabled bg-slate-300 "
              }`}
              onClick={() => {
                try {
                  axios
                    .patch(
                      `https://gorest.co.in/public/v2/users/${personId}`,
                      {
                        email,
                        name,
                        gender,
                        status,
                      },
                      {
                        headers: {
                          Authorization: `Bearer ${
                            import.meta.env.VITE_API_TOKEN
                          }`,
                          "Content-Type": "application/json",
                        },
                      }
                    )
                    .then((res) => {
                      console.log(res.data);
                      const modal =
                        document.getElementById("modal_update_user");
                      if (modal) {
                        (modal as HTMLDialogElement).close();
                      }
                    })
                    .catch((err) => {
                      setAlertMessage(
                        `${err?.response?.data[0]?.field} ${err?.response?.data[0]?.message}`
                      );
                      setAlertFlag(true);
                      console.log(err);
                    });
                } catch (err) {
                  console.log(err);
                }
              }}
            />
          </div>
        </div>
      </div>
    </dialog>
  );
}
