import { Component } from '@angular/core';
import { IonItem, NavController, ToastController } from '@ionic/angular';
import { toastController } from '@ionic/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  title = "Grocery";

  items = [
    {
      name: "Milk",
      quantity: 2,
      aisle: 7
    },
    {
      name: "Cereal",
      quantity: 6, 
      aisle: 13
    },
    {
      name: "Rice",
      quantity: 1,
      aisle: 8
    }
  ];

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertController: AlertController) {

  }



  async removeItem(item, index) {
  console.log("Removing Item - ", item, index);
  const toast = this.toastCtrl.create({
    message: 'Removing Item - ' + index + " ...",
    duration: 3000
  });
  (await toast).present();

  this.items.splice(index,1)
}

  async editItem(item, index) {
    console.log("Edit Item - ", item, index);
    const toast = this.toastCtrl.create({
      message: 'Editing Item - ' + index + " ...",
      duration: 3000
    });
    (await (toast)).present();
    this.showEditItemPrompt(item,index)

}

addItem() {
  console.log("Adding Item");
  this.showAddItemPrompt();
}

 async showAddItemPrompt() {
  const prompt = this.alertController.create({
    header: 'Add Items to Grocery List',
    message: "Enter item information",
    inputs: [
      {
        name: 'name',
        placeholder: 'Name'
        
      },
      {
        name: 'quantity',
        placeholder: 'Quantity',
      },
      {
        name: 'aisle',
        placeholder: 'Aisle',
      },
    ],
    buttons: [
      {
        text: 'Cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Save',
        handler: item => {
          console.log('Saved clicked', item);
          this.items.push(item);
        }
      }
    ]
  });
    (await (prompt)).present();
  };


 async showEditItemPrompt(item, index){
  const prompt = this.alertController.create({
    header: 'Edit Item',
    message: "Enter edit item information",
    inputs: [
      {
        name: 'name',
        placeholder: 'Name',
        value: item.name,
        
      },
      {
        name: 'quantity',
        placeholder: 'Quantity',
        value: item.quantity,
      },
      {
        name: 'aisle',
        placeholder: 'Aisle',
        value: item.aisle,
      },
    ],
    buttons: [
      {
        text: 'Cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Save',
        handler: item => {
          console.log('Saved clicked', item);
          this.items[index] = item;
        }
      }
    ]
  });
    (await prompt).present();
  }
} 
