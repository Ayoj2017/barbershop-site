import { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Admin from "./pages/Admin";

import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

function App() {
  const [name, setName] = useState("");
const [tagline, setTagline] = useState("");
const [phone, setPhone] = useState("");


// useEffect(() => {
//   fetch("http://localhost:5000/api/data")
//     .then((res) => res.json())
//     .then((data) => {
//       setName(data.name);
//       setTagline(data.tagline);
//       setPhone(data.phone);
//     });
// }, []);


const fetchData = () => {
  fetch("https://barbershop-backend-3whh.onrender.com/api/data")
    .then((res) => res.json())
    .then((data) => {
      setName(data.name);
      setTagline(data.tagline);
      setPhone(data.phone);
    });
};


useEffect(() => {
  fetchData();
}, []);



// useEffect(() => {
//   if (!name) return;

//   fetch("https://barbershop-backend-3whh.onrender.com/api/data", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ name, tagline, phone }),
//   }).then(() => {
//     return fetch("https://barbershop-backend-3whh.onrender.com/api/data");
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       setName(data.name);
//       setTagline(data.tagline);
//       setPhone(data.phone);
//     });
// }, [name, tagline, phone]);



 console.log(name);

const Home = () => (
  <>
    <Hero name={name} tagline={tagline} phone={phone} />
    <Services />
    <Gallery />
    <Contact phone={phone} />
  </>
);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/admin"
          element={
            <Admin
              name={name}
              setName={setName}
              tagline={tagline}
              setTagline={setTagline}
              phone={phone}
              setPhone={setPhone}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;