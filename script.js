let kundvagnBtn = document.querySelector(".btn_kundvagn");

document.addEventListener("DOMContentLoaded", function () {
  let cart = [];
  const cartList = document.getElementById("cart-items");
  const totalPriceElement = document.getElementById("total-price");
  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      let productContainer = this.closest(".produkt");
      let productName = productContainer.querySelector("h3").textContent;
      let productPrice = parseInt(
        productContainer.querySelector(".pris").textContent.replace(" KR", "")
      );

      let product = { name: productName, price: productPrice };
      cart.push(product);
      updateCart();
    });
  });

  kundvagnBtn.addEventListener("click", function () {
    ShowCart();
  });

  function ShowCart() {
    document.getElementById("kundvagn").style.display = "flex";
    console.log("Hello");
  }

  function updateCart() {
    cartList.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
      let listItem = document.createElement("li");
      listItem.textContent = `${item.name} - ${item.price} KR`;

      let removeButton = document.createElement("button");
      removeButton.textContent = "X";
      removeButton.classList.add("remove-btn");
      removeButton.addEventListener("click", function () {
        removeItem(index);
      });

      listItem.appendChild(removeButton);
      cartList.appendChild(listItem);
      total += item.price;
    });

    totalPriceElement.textContent = `Total: ${total} KR`;
  }

  function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
  }
});
