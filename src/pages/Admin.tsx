

import { useState } from "react";

const [saved, setSaved] = useState(false);

const Admin = ({ name, setName, tagline, setTagline, phone, setPhone }: any) => {

  const [localName, setLocalName] = useState(name);
  const [localTagline, setLocalTagline] = useState(tagline);
  const [localPhone, setLocalPhone] = useState(phone);

  


const handleUpdate = () => {
  fetch("https://barbershop-backend-3whh.onrender.com/api/data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: localName,
      tagline: localTagline,
      phone: localPhone,
    }),
  }).then(() => {
    setName(localName);
    setTagline(localTagline);
    setPhone(localPhone);

    setSaved(true); // ✅ show message

    // optional: hide after 3 seconds
    setTimeout(() => setSaved(false), 3000);
  });
};
  

  return (
    <div style={{ padding: "40px" }}>
      <h2>Admin Panel</h2>


      <div>
        <label>Business Name:</label><br />
      <input
  value={localName}
  onChange={(e) => setLocalName(e.target.value)}
/>

<button onClick={handleUpdate} disabled={saved} style={{ marginTop: "20px" }}>
  Save Changes
</button>

{saved && <p style={{ color: "green" }}>Saved successfully!</p>}
      </div>



      <div>
        <label>Tagline:</label><br />
        <input
  value={localTagline}
  onChange={(e) => setLocalTagline(e.target.value)}
/>

<button onClick={handleUpdate} disabled={saved} style={{ marginTop: "20px" }}>
  Save Changes
</button>

{saved && <p style={{ color: "green" }}>Saved successfully!</p>}
      </div>



      <div>
        <label>Phone Number:</label><br />
       <input
  value={localPhone}
  onChange={(e) => setLocalPhone(e.target.value)}
/>

<button onClick={handleUpdate} disabled={saved} style={{ marginTop: "20px" }}>
  Save Changes
</button>

{saved && <p style={{ color: "green" }}>Saved successfully!</p>}
      </div>

      <hr />

      <h3>Preview:</h3>
      <p><strong>{name}</strong></p>
      <p>{tagline}</p>
      <p>WhatsApp: {phone}</p>

      setSaved(true);
      
    </div>
  );
};

export default Admin;