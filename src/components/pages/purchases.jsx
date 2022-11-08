import { useState } from "react";

import NameCard from "../molecules/NameCard";

export default () => {
  const [data, setData] = useState({
    name: "",
    dob: "",
    gender: "",
    maritalStatus: "",
  });

  function handleChange(event) {
    if (event === undefined || event === null) {
      return;
    }
    const key = event.key;
    const value = event.value;
    setData((values) => ({
      ...values,
      [key]: value,
    }));
  }

  async function sendData(e) {
    e.preventDefault();
    console.log(data);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      return response.json();
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <main className="flex bg-dark italic text-gray-470 min-h-screen justify-center items-center">
      <NameCard sendData={sendData} handleChange={handleChange} />
    </main>
  );
};
