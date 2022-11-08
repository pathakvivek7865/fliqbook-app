import { useState } from "react";

import NameCard from "../molecules/NameCard";

export default () => {
  const [data, setData] = useState({
    name: "",
    dob: "",
    gender: "",
    maritalStatus: "",
  });

  const handleChange = (e) => {
    console.log(e);
    const key = e.key;
    const value = e.value;
    setData((values) => ({
      ...values,
      [key]: value,
    }));
  };

  const sendData = async (e) => {
    e.preventDefault();
    console.log(data);

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  };

  return (
    <main className="flex bg-dark italic text-gray-470 min-h-screen justify-center items-center">
      <NameCard sendData={sendData} handleChange={handleChange} />
    </main>
  );
};
