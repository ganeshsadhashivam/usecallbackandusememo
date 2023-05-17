import React, { useState, useEffect } from "react";

const GreetingBox = ({ getGreeting }) => {
  const [greeting, setGreeting] = useState();

  useEffect(() => {
    setGreeting(getGreeting());
    console.log("GreetingBox:useEffect");
  }, [getGreeting]);
  return <div>{greeting}</div>;
};

export default GreetingBox;
