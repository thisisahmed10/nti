
const addToCartButtons = document.querySelectorAll('.btn.cart');


addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    
    alert('✅ تم الإضافة إلى السلة بنجاح');
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("toggleDescription");
  const box = document.getElementById("descriptionBox");

  btn.addEventListener("click", () => {
    box.classList.toggle("show");
    btn.textContent = box.classList.contains("show") ? "About" : "About";
  });
});
