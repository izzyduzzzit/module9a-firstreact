// Izarra Villareal CS 81 Javascript Module 9 Assignment 9A: Build Your First React Component

// ContactCard component with static data entries for assignment 9A

function ContactCard() {
  // First user contact card variables
  const contact1Name = "Izarra Villareal";
  const contact1Email = "izarravill@email.com";
  const contact1Phone = "(424) 852-2202";
  const contact1Company = "Streamline Engineering";

  // Second user contact card variables
  const contact2Name = "Martin Kulp";
  const contact2Email = "martin.kulp@email.com";
  const contact2Phone = "(310) 401-5986"; 
  const contact2Company = "Dunnes & Barne, LLP";

  return (
    // Trying to center what gets rendered using a wrapper div and flex
    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', padding: '20px' }}>
      {/* First user contact */}
      <div style={{ maxWidth: '400px', padding: '24px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', backgroundColor: 'white', fontFamily: 'Arial, sans-serif' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '15px', textAlign: 'center' }}>{contact1Name}</h2>
        <p style={{ fontSize: '16px', color: '#555', marginBottom: '8px' }}>Email: {contact1Email}</p>
        <p style={{ fontSize: '16px', color: '#555', marginBottom: '8px' }}>Phone: {contact1Phone}</p>
        <p style={{ fontSize: '16px', color: '#555', marginBottom: '8px' }}>Company: {contact1Company}</p>
      </div>

      {/* Second user contact */}
      <div style={{ maxWidth: '400px', padding: '24px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', backgroundColor: 'white', fontFamily: 'Arial, sans-serif' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '15px', textAlign: 'center' }}>{contact2Name}</h2>
        <p style={{ fontSize: '16px', color: '#555', marginBottom: '8px' }}>Email: {contact2Email}</p>
        <p style={{ fontSize: '16px', color: '#555', marginBottom: '8px' }}>Phone: {contact2Phone}</p>
        <p style={{ fontSize: '16px', color: '#555', marginBottom: '8px' }}>Company: {contact2Company}</p>
      </div>
    </div>
  );
}

export default ContactCard;
