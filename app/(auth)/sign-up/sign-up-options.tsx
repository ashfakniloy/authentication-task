"use client";

import { useState } from "react";
import { Suitcase, User } from "@/components/icons";
import SignUpPersonal from "./sign-up-personal";
import SignUpCorporate from "./sign-up-corporate";
import SocialSignIn from "../social-sign-in";

type FormOptions = {
  name: "Personal" | "Corporate";
  icon: JSX.Element;
};
const formTabs: FormOptions[] = [
  {
    name: "Personal",
    icon: <User />,
  },
  {
    name: "Corporate",
    icon: <Suitcase />,
  },
];

export default function SignUpOptions() {
  const [selectedForm, setSelectForm] = useState(formTabs[0].name);

  const isActive = (formType: string) => formType === selectedForm;

  return (
    <div>
      <p className="text-sm font-medium">Select Account Type</p>
      <div className="mt-2 p-1 rounded-md flex justify-between text-sm bg-[#EDEDEF]">
        {formTabs.map((formTab) => (
          <button
            key={formTab.name}
            type="button"
            className={`py-1 rounded font-semibold w-full flex justify-center items-center gap-2 ${
              isActive(formTab.name) ? "bg-white" : "bg-transparent"
            }`}
            onClick={() => setSelectForm(formTab.name)}
          >
            {formTab.icon}
            {formTab.name}
          </button>
        ))}
      </div>

      {selectedForm === "Personal" && (
        <>
          <SignUpPersonal />
          <div className="mt-5">
            <SocialSignIn />
          </div>
        </>
      )}
      {selectedForm === "Corporate" && <SignUpCorporate />}
    </div>
  );
}
