document.addEventListener("DOMContentLoaded", function() {
    const searchButton = document.getElementById('send-button');
    const searchInput = document.getElementById('search-input');
  
    // Function to handle the search logic
    function handleSearch() {
      const query = searchInput.value.toLowerCase();
      
      // Check if the search query matches a destination
      if (query === "bali") {
        window.location.href = "bali.html"; // Redirect to Bali page
      } else if (query === "toraja") {
        window.location.href = "toraja.html"; // Redirect to Toraja page
      } else if (query === "jogja") {
        window.location.href = "jogja.html"; // Redirect to Jogja page
      } else {
        alert("Destinasi tidak ditemukan.");
      }
    }
  
    // Add event listener to the search button
    searchButton.addEventListener('click', handleSearch);
  
    // Add event listener for "Enter" key press
    searchInput.addEventListener('keypress', function(event) {
      if (event.key === "Enter") {
        handleSearch();
      }
    });
  });
  