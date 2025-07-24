function ContactCard() {
  const contacts = [
    {
      name: "Izarra Villareal",
      email: "izarravill@email.com",
      phone: "(424) 852-2202",
      location: "Torrance, CA",
      company: "Streamline Engineering"
    },
    {
      name: "Martin Kulp",
      email: "martin.kulp@email.com", 
      phone: "(310) 401-5986",
      location: "Torrance, CA",
      company: "Dunnes & Barne, LLP"
    }
  ];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', padding: '20px' }}>
      {contacts.map((contact, index) => (
        <div key={index} style={{ 
          maxWidth: '400px', 
          padding: '24px', 
          borderRadius: '12px', 
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', 
          backgroundColor: 'white', 
          fontFamily: 'Arial, sans-serif',
          border: '1px solid #e1e5e9'
        }}>
          <h2 style={{ 
            fontSize: '20px', 
            fontWeight: 'bold', 
            marginBottom: '20px',
            color: '#333',
            textAlign: 'center',
            borderBottom: '2px solid #007bff',
            paddingBottom: '10px'
          }}>Contact: {contact.name}</h2>
          
          <div style={{ marginBottom: '12px', display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: '16px', marginRight: '8px' }}>📧</span>
            <strong style={{ color: '#555', marginRight: '8px' }}>Email:</strong> 
            <span style={{ fontSize: '14px' }}>{contact.email}</span>
          </div>
          
          <div style={{ marginBottom: '12px', display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: '16px', marginRight: '8px' }}>📱</span>
            <strong style={{ color: '#555', marginRight: '8px' }}>Phone:</strong> 
            <span style={{ fontSize: '14px' }}>{contact.phone}</span>
          </div>
          
          <div style={{ marginBottom: '12px', display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: '16px', marginRight: '8px' }}>📍</span>
            <strong style={{ color: '#555', marginRight: '8px' }}>Location:</strong> 
            <span style={{ fontSize: '14px' }}>{contact.location}</span>
          </div>

          <div style={{ marginBottom: '12px', display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: '16px', marginRight: '8px' }}>🏢</span>
            <strong style={{ color: '#555', marginRight: '8px' }}>Company:</strong> 
            <span style={{ fontSize: '14px' }}>{contact.company}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContactCard;
