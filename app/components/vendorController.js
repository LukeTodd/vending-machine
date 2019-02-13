import VendorService from "./vendorService.js";

let vendorService = new VendorService

function drawBal() {
  let b = vendorService.Balance
  document.getElementById('bal').innerText = b.toFixed(2)
}

function drawSnacks() {
  let snackArr = vendorService.Snacks
  let template = ''
  for (let i = 0; i < snackArr.length; i++) {
    let snack = snackArr[i]
    template += `
    <div class="col-4 snack-image">
    <div class="card d-flex justify-content-center">
        <h1 class="text-center">${snack.name}</h1>
        <img class="card-img-top snack-img" src="${snack.img}">
        <h1 class="price text-center">${snack.price}</h1>
        <button class="center" onclick="app.controllers.vendorController.buySnack(${i})">${snack.location}</button>
        </div>
      </div>
    `
  }
  document.getElementById('displaySnacks').innerHTML = template
}

//Private
export default class VendorController {
  constructor() {
    drawSnacks()
  }
  addQuarter() {
    vendorService.addQuarter()
    drawBal()
  }
  buySnack(itemIndex) {

    console.log("buy snack controller");

    vendorService.buySnack(itemIndex)
    drawBal()
  }
  addDollar() {
    vendorService.addDollar()
    drawBal()
  }
}