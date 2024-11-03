document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    
    // Create and style the hamburger button
    const hamburger = document.createElement('button');
    hamburger.classList.add('hamburger');
    hamburger.innerHTML = '&#9776;'; // Hamburger icon
    document.body.prepend(hamburger);
  
    // Toggle sidebar visibility on hamburger click
    hamburger.addEventListener('click', () => {
      sidebar.classList.toggle('active'); // Toggle the 'active' class to show/hide sidebar
    });

    // Close button functionality
    const closeHamburger = document.querySelector('.close-hamburger');
    closeHamburger.addEventListener('click', () => {
      sidebar.classList.remove('active'); // Hide sidebar
    });
});
