function toggleProfile() {
    var profileContainer = document.getElementById('profile-container');
    var toggleButton = document.getElementById('toggle-button');

    if (profileContainer.style.display === 'none') {
      profileContainer.style.display = 'block';
    } else {
      profileContainer.style.display = 'none';
    }
  }