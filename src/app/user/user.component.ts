import { Component, Input, Output, EventEmitter} from '@angular/core';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input ({required: true}) user! : User;
  @Input ({required: true}) selected!: boolean;
  @Output() select = new EventEmitter<string>();


  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }

  onCurrentUser() {    
    this.select.emit(this.user.id);
  }

  // with signals
  
  // signals, input, output, computed
  // avatar = input.required<string>();
  // name = input.required<string>();
  // select = output<string>();
  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // });

  /*
  import { signal, computed } from '@angular/core';
  
  currentUser = signal(DUMMY_USERS[randomIndex]);
  imagePath = computed(() => 'assets/users/' + this.currentUser().avatar );
  
  onCurrentUser() {
    this.currentUser.set(DUMMY_USERS[randomIndex])
  }
  */
}