// Product Quick View Modal functionality
document.addEventListener("DOMContentLoaded", function () {
  var productModal = document.getElementById("productQuickView");
  if (productModal) {
    productModal.addEventListener("show.bs.modal", function (event) {
      var button = event.relatedTarget;
      var title = button.getAttribute("data-product-title");
      var price = button.getAttribute("data-product-price");
      var description = button.getAttribute("data-product-description");
      var image = button.getAttribute("data-product-image");

      var modalTitle = productModal.querySelector("#modalProductTitle");
      var modalPrice = productModal.querySelector("#modalProductPrice");
      var modalDescription = productModal.querySelector(
        "#modalProductDescription"
      );
      var modalImage = productModal.querySelector("#modalProductImage");

      modalTitle.textContent = title;
      modalPrice.textContent = price;
      modalDescription.textContent = description;
      modalImage.src = image;
    });
  }
});
