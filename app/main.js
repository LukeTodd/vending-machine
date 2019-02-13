import VendorController from "./components/vendorController.js";



class App {
  constructor() {
    this.controllers = {
      vendorController: new VendorController()
    }
  }
}


// @ts-ignore
window.app = new App()