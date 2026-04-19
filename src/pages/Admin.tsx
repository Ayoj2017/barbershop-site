

const Admin = ({ name, setName, tagline, setTagline, phone, setPhone }: any) => {

  return (
    <div style={{ padding: "40px" }}>
      <h2>Admin Panel</h2>

      <div>
        <label>Business Name:</label><br />
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>

      <div>
        <label>Tagline:</label><br />
        <input value={tagline} onChange={(e) => setTagline(e.target.value)} />
      </div>

      <div>
        <label>Phone Number:</label><br />
        <input value={phone} onChange={(e) => setPhone(e.target.value)} />
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