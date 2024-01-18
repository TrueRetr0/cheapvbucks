document.addEventListener('DOMContentLoaded', function() {
  var quantitySelect = document.getElementById('quantity');
  var totalPriceElement = document.getElementById('total-price');
  var checkoutButton = document.getElementById('checkout-button'); // Ensure you have this button in your HTML

  // Populate the dropdown with options
  var quantities = [5000, 13500, 27000, 40500, 54000, 67500, 81000, 94500, 108000, 121500, 135000, 162000, 189000, 202500];
  var prices = [8.99, 17.99, 34.99, 51.99, 69.99, 85.99, 104.99, 120.99, 135.99, 152.99, 169.99, 186.99, 203.99, 220.99];

  quantities.forEach(function(qty, index) {
    var option = document.createElement('option');
    option.value = qty;
    option.textContent = qty + ' - $' + prices[index];
    quantitySelect.appendChild(option);
  });

  // Update the total price when the quantity changes
  quantitySelect.addEventListener('change', function() {
    var selectedIndex = quantitySelect.selectedIndex;
    totalPriceElement.textContent = '$' + prices[selectedIndex];
  });

  // Redirect to PayPal.me with the selected price on checkout
  checkoutButton.addEventListener('click', function() {
    var selectedIndex = quantitySelect.selectedIndex;
    var selectedPrice = prices[selectedIndex];
    var paypalLink = `https://paypal.me/kiaaniyer/${selectedPrice}`;
    window.open(paypalLink, '_blank');
  });
});
