import React from "react";


const time = new Date().getHours();

function getGreeting(timeOfDay) {
  if (timeOfDay < 12) {
    return "Good morning";
  } else if (timeOfDay < 18) {
    return "Good afternoon";
  } else {
    return "Good evening";
  }
}

function getStyle(timeOfDay) {
  if (timeOfDay < 12) {
    return { color: "red" };
  } else if (timeOfDay < 18) {
    return { color: "green" };
  } else {
    return { color: "blue" };
  }
}

const fName = 'Ajwad'
const lName = 'Elgandouz'

const year = new Date().getFullYear()

function Water() {
  return (<>
    <h1 className="heading" style={getStyle(time)}>
    {getGreeting(time)}
  </h1>
  </>)

}

export default Water