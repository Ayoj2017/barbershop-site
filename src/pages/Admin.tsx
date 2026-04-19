



const Admin = ({ name, setName, tagline, setTagline, phone, setPhone }: any) => {

  const handleUpdate = (updatedData: any) => {
    fetch("https://barbershop-backend-3whh.onrender.com/api/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    }).then(() => {
      window.location.href = "/";
    });
  };

  

  return (
    <div style={{ padding: "40px" }}>
      <h2>Admin Panel</h2>

      <div>
        <label>Business Name:</label><br />
       <input
  value={name}
  onChange={(e) => {
    const newName = e.target.value;
    setName(newName);
    handleUpdate({ name: newName, tagline, phone });
  }}
/>
      </div>



      <div>
        <label>Tagline:</label><br />
        <input
  value={tagline}
  onChange={(e) => {
    const newTagline = e.target.value;
    setTagline(newTagline);
    handleUpdate({ name, tagline: newTagline, phone });
  }}
/>
      </div>

      <div>
        <label>Phone Number:</label><br />
       <input
  value={phone}
  onChange={(e) => {
    const newPhone = e.target.value;
    setPhone(newPhone);
    handleUpdate({ name, tagline, phone: newPhone });
  }}
/>
      </div>

      <hr />

      <h3>Preview:</h3>
      <p><strong>{name}</strong></p>
      <p>{tagline}</p>
      <p>WhatsApp: {phone}</p>
    </div>
  );
};

export default Admin;