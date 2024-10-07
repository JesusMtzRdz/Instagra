import { Component } from '@angular/core';
import { IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonIcon, 
  IonButton, 
  IonButtons, 
  IonAvatar, 
  IonLabel, 
  IonItem, 
  IonList, 
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonCardHeader,
  IonTabs,
  IonTabButton,
  IonTabBar} from '@ionic/angular/standalone';

  import { addIcons } from 'ionicons';
import { logoIonic, heart, cameraOutline, sendOutline, homeOutline, searchOutline, addCircle, addCircleOutline, personOutline, chatbubble, paperPlane, videocam, person, home, search, searchCircle } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonIcon, 
    IonButton, 
    IonButtons, 
    IonAvatar, 
    IonLabel, 
    IonItem, 
    IonList, 
    IonCard,
    IonCardContent,
    IonCardSubtitle,
    IonCardTitle,
    IonCardHeader,
    IonTabs,
    IonTabButton,
    IonTabBar],
})
export class HomePage {
  constructor() {
    addIcons({cameraOutline,sendOutline,heart,chatbubble,paperPlane,home,searchCircle,addCircle,videocam,person,search,homeOutline,searchOutline,addCircleOutline,personOutline,logoIonic});
  }
}
