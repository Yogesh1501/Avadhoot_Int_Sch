let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // 
}



document.addEventListener('DOMContentLoaded', function() {
  var menuButton = document.getElementById('nav-toggle');
  var mainNav = document.getElementById('main-nav');
  var navLinks = document.querySelector('.nav-links');

  menuButton.addEventListener('click', function() {
      var dropdownMenu = document.getElementById('dropdown-menu');

      // Check if dropdown menu exists, if not create one
      if (!dropdownMenu) {
          dropdownMenu = document.createElement('ul');
          dropdownMenu.id = 'dropdown-menu';
          dropdownMenu.className = 'dropdown-menu';
          dropdownMenu.style.position = 'absolute';
          dropdownMenu.style.top = mainNav.offsetHeight + 'px'; // Position below the header
          dropdownMenu.style.left = '0';
          dropdownMenu.style.width = '100%';
          dropdownMenu.style.backgroundColor = '#fff'; // Example background color

          // Clone navigation links and append to the dropdown menu
          var clonedNavLinks = navLinks.cloneNode(true);
          dropdownMenu.appendChild(clonedNavLinks);

          // Append dropdown menu to the document body
          document.body.appendChild(dropdownMenu);
      } else {
          // Toggle the visibility of the dropdown menu
          dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
      }
  });

  // Close the dropdown menu when clicking outside of it
  document.addEventListener('click', function(event) {
      var dropdownMenu = document.getElementById('dropdown-menu');
      if (dropdownMenu && event.target !== menuButton && !dropdownMenu.contains(event.target)) {
          dropdownMenu.style.display = 'none';
      }
  });
});


document.getElementById('toggleBtn').addEventListener('click', function() {
  document.querySelector('.navigation ul').classList.toggle('show-nav');
});
