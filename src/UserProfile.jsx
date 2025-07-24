function UserProfile() {
  const users = [
    {
      name: "Izarra Villareal",
      bio: "Infrastructure expert; curious about front-end development.",
      profileImage: "https://pbs.twimg.com/profile_images/1947016397126565888/i-9rqNY1_400x400.jpg"
    },
    {
      name: "Martin Kulp",
      bio: "Philosopher interested in the cosmological argument.",
      profileImage: "https://yt3.googleusercontent.com/ytc/AIdro_mgfAHTpcl7pK16PEPSI5U6KB98cC_IbIRzDEnVdWVsFuv7=s160-c-k-c0x00ffffff-no-rj"
    },
  ];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', padding: '20px' }}>
      {users.map((user, index) => (
        <div key={index} style={{ maxWidth: '400px', padding: '24px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', backgroundColor: 'white', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
          <img src={user.profileImage} alt={`${user.name}'s profile`} style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', border: '4px solid #e1e5e9', marginBottom: '16px' }} />
          <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>{user.name}</h1>
          <p style={{ fontSize: '16px', color: '#555' }}>{user.bio}</p>
        </div>
      ))}
    </div>
  );
}

export default UserProfile;
