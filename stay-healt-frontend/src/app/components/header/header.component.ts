import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonsGradientComponent } from '../buttons/buttons-gradient/buttons-gradient.component';
import { ModalComponent } from "../modal/modal.component";
@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    imports: [ButtonsGradientComponent, ModalComponent]
})
export class HeaderComponent {
openModal:boolean = false

openModalFnc(){
    this.openModal = true
    console.log('pidor')
}

closeModalFnc(){
    this.openModal =  false
}

}
