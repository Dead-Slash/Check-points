//Get the + buttons by className
var plusBtn = document.getElementsByClassName("fa-circle-plus");

//Get the - buttons by className
var minusBtn = document.getElementsByClassName("fa-circle-minus");

//Get like buttons
var likeBtns = document.getElementsByClassName("fa-heart");

//Get trash buttons
var trashBtns = document.getElementsByClassName("fa-trash");

//Get total span
var totalPrice = document.getElementsByClassName("total-num");

// Get boxproduct
var boxProduit = document.getElementsByClassName("box_produit");

calcul();
for (let i = 0; i < likeBtns.length; i++) {
  likeBtns[i].addEventListener("click", function (e) {
    e.target.classList.toggle("liked");
  });
}

for (let i = 0; i < plusBtn.length; i++) {
  plusBtn[i].addEventListener("click", function (e) {
    e.target.previousElementSibling.innerText++;
    calcul();
  });
}

for (let i = 0; i < minusBtn.length; i++) {
  minusBtn[i].addEventListener("click", function (e) {
    if (e.target.nextElementSibling.innerText > 0) {
      e.target.nextElementSibling.innerText--;
      calcul();
    }
  });
}

for (let i = 0; i < trashBtns.length; i++) {
  trashBtns[i].addEventListener("click", function (e) {
    e.target.closest(".box_produit").remove();
    calcul();
  });
}

function calcul() {
  var sommeUproduct = 0;
  for (let i = 0; i < boxProduit.length; i++) {
    var unitprice = boxProduit[i]
      .querySelector(".price")
      .innerText.slice(0, -2);
    var qte = boxProduit[i].querySelector(".quantite").innerText;
    sommeUproduct += unitprice * qte;
  }

  totalPrice[0].innerText = sommeUproduct;
  console.log(sommeUproduct);
}
