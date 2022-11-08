import React from "react";
import { AiTwotoneCalendar } from "react-icons/ai";
import Button from "../atoms/Button";
import Card from "../atoms/Card";
import Input from "../atoms/Input";
import Select from "../atoms/Select";

function NameCard({ sendData, handleChange }) {
  return (
    <Card>
      <form onSubmit={sendData} className="grid gap-[20px]">
        <Input id="name" label="Name" handleChange={handleChange} />
        <Select
          label="Date of Birth"
          arrow={<AiTwotoneCalendar className="text-dark h-6 w-6 -mt-1" />}
          handleChange={handleChange}
          id="dob"
          options={[
            { name: "1990", value: "1990" },
            { name: "1991", value: "1991" },
          ]}
        ></Select>

        <div className="grid grid-flow-col  gap-[28px] items-center">
          <Select
            id="gender"
            label="Gender"
            handleChange={handleChange}
            options={[
              { value: "male", name: "Male" },
              { value: "female", name: "Female" },
              { value: "other", name: "Others" },
            ]}
          ></Select>
          <div className="flex-1"></div>
          <div className="flex-1">
            <Select
              id="maritalStatus"
              label="Marital Status"
              arrow={<></>}
              handleChange={handleChange}
              options={[
                { value: "married", name: "Married" },
                { value: "unmarried", name: "Unmarried" },
              ]}
            ></Select>
          </div>
        </div>
        <div className="w-full flex justify-end">
          <Button>SAVE</Button>
        </div>
      </form>
    </Card>
  );
}

export default NameCard;
