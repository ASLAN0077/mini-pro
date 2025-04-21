import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {lorem} from "faker"; 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  randomeText : string= lorem.sentence();
  onChangeInpout(Text: string) {
    console.log(Text);
  }
}
  