const data = [
  {
    name: 'John Doe',
    age: 23,
    gender: 'male',
    lookingfor: 'female',
    location: 'Helsinki FL',
    image: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random()*100)+1}.jpg`
  },
  {
    name: 'Jane Monday',
    age: 29,
    gender: 'female',
    lookingfor: 'male',
    location: 'Lahti FL',
    image: `https://randomuser.me/api/portraits/women/${Math.floor(Math.random()*100)+1}.jpg`
  },
  {
    name: 'Jess Valentine',
    age: 41,
    gender: 'male',
    lookingfor: 'female',
    location: 'Kupio FL',
    image: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random()*99)+1}.jpg`
  },
];

const profiles = profileIterator(data);
 
// Call first Profile
nextProfiles();

// button Next event
document.getElementById('next').addEventListener('click', nextProfiles);

// Next profiles function
function nextProfiles() {
  const currentProfile = profiles.next().value;

  if(currentProfile !== undefined) {
    document.getElementById('profileDisplay').innerHTML = `
    <ul class="list-group">
      <li class="list-group-item">Name: ${currentProfile.name}</li>
      <li class="list-group-item">Age: ${currentProfile.age}</li>
      <li class="list-group-item">Location ${currentProfile.location}</li>
      <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
    </ul>
  `;

    document.getElementById('imageDisplay').innerHTML = `<img src=${currentProfile.image}>`;
  } else {
    // No more profiles
    window.location.reload();
  }
  
}

// Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;
  return {
    next: function() {
      return nextIndex < profiles.length ? { value: profiles[nextIndex++], done: false} : { done:true }
    }
  };
}