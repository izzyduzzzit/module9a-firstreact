// Izarra Villareal CS 81 Javascript Module 9 Assignment 9A: Build Your First React Component

// UserProfile component with static data entries for assignment 9A
/* At first I explored using a constant variable with an array of users and a map function,
   but I am still need some map practice to fully understand how to use it. I was able to spend extra
   time this week understanding react though, and I really enjoy it! */

function UserProfile() {
  // First person UserProfile variables
  const person1Name = "Izarra Villareal";
  const person1Bio = "Infrastructure expert; curious about front-end development.";
  const person1Image = "https://pbs.twimg.com/profile_images/1947016397126565888/i-9rqNY1_400x400.jpg";

  // Second person UserProfile variables
  const person2Name = "Martin Kulp";
  const person2Bio = "Philosopher interested in the cosmological argument.";
  const person2Image = "https://yt3.googleusercontent.com/ytc/AIdro_mgfAHTpcl7pK16PEPSI5U6KB98cC_IbIRzDEnVdWVsFuv7=s160-c-k-c0x00ffffff-no-rj";

  return (
    // Trying to center what gets rendered using a wrapper div and flex
    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', padding: '20px' }}>
      {/* First person profile info */}
      <div style={{ maxWidth: '400px', padding: '24px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', backgroundColor: 'white', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
        <img src={person1Image} alt={`${person1Name}'s profile`} style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', border: '4px solid #e1e5e9', marginBottom: '16px' }} />
        <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>{person1Name}</h1>
        <p style={{ fontSize: '16px', color: '#555' }}>{person1Bio}</p>
      </div>

      {/* Second person profile info */}
      <div style={{ maxWidth: '400px', padding: '24px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', backgroundColor: 'white', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
        <img src={person2Image} alt={`${person2Name}'s profile`} style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', border: '4px solid #e1e5e9', marginBottom: '16px' }} />
        <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>{person2Name}</h1>
        <p style={{ fontSize: '16px', color: '#555' }}>{person2Bio}</p>
      </div>
    </div>
  );
}

export default UserProfile;
