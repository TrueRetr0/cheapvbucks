document.addEventListener('DOMContentLoaded', function() {
    var quantitySelect = document.getElementById('quantity');
    var totalPrice = document.getElementById('total-price');
  
    // Populate the dropdown with options
    var quantities = [5000, 13500, 27000, 40500, 54000, 67500, 81000, 94500, 108000, 121500, 135000, 162000, 189000, 202500]; // Example quantities
    var prices = [7.99, 18, 25, 30, 35]; // Example prices for each quantity
  
    quantities.forEach(function(qty, index) {
      var option = document.createElement('option');
      option.value = qty;
      option.textContent = qty + ' - $' + prices[index];
      quantitySelect.appendChild(option);
    });
  
    // Update the total price when the quantity changes
    quantitySelect.addEventListener('change', function() {
      var selectedIndex = quantitySelect.selectedIndex;
      totalPrice.textContent = '$' + prices[selectedIndex];
    });
  });
  