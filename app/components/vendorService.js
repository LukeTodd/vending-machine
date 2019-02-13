//private
import VendingMachine from '../models/vendingMachine.js'
import Snack from '../models/snack.js';

let vendingMachine = new VendingMachine()
let snickers = new Snack("Snickers", 1.25, 'http://www.worldofsnacks.com/uploads/1/3/1/2/13127180/s643667121527569464_p60_i1_w640.jpeg', 'A1')

let sweedishFish = new Snack('Sweedish Fish', 2.25, 'https://pics.drugstore.com/prodimg/436328/450.jpg', 'A2')
let xBox = new Snack('X-Box', 4.99, 'https://cdn.vox-cdn.com/thumbor/MtoMILchLDGo28wcKbegkcm0L9c=/0x0:950x623/1200x800/filters:focal(399x236:551x388)/cdn.vox-cdn.com/uploads/chorus_image/image/60988327/Xbox_One_X_Screenshot_05.0.jpg', 'A3')
let dog = new Snack('Spot', 9.95, 'https://cdn1-www.dogtime.com/assets/uploads/2011/03/puppy-development.jpg', 'A4')
let almondJoy = new Snack('Almond Joy', 1.25, 'https://images-na.ssl-images-amazon.com/images/I/81V3WPUjI4L._SL1500_.jpg', 'A5')
let baby = new Snack('A Real Baby', 39.99, 'https://b3h2.scene7.com/is/image/BedBathandBeyond/StoryBlock1_web%5B1%5D?$content$&wid=288&hei=180', 'A6')
vendingMachine.snacks.push(snickers, sweedishFish, xBox, dog, almondJoy, baby)



//public
export default class VendorService {
  constructor() {

  }
  addQuarter() {
    vendingMachine.balance += .25
  }
  get Balance() {
    return vendingMachine.balance
  }
  get Snacks() {
    return vendingMachine.snacks
  }
  buySnack(itemIndex) {
    if (vendingMachine.balance >= vendingMachine.snacks[itemIndex].price)
      vendingMachine.balance = vendingMachine.balance - vendingMachine.snacks[itemIndex].price
  }
  addDollar() {
    vendingMachine.balance += 1.00
  }
}