import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { ButtonsGradientComponent } from "../../components/buttons/buttons-gradient/buttons-gradient.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [HeaderComponent, ButtonsGradientComponent]
})
export class HomeComponent {

}
