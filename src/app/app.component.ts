import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { lorem } from "faker";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomeText: string = lorem.sentence();
  inputText: string = '';

  onChangeInpout(text: string) {
    this.inputText = text;
  }

  compare(letterRandome: string, letterEnter: string): string {

    if (!letterEnter) {
      return 'pending';
    }

    return letterRandome === letterEnter ? 'correct' : 'incorrect';
  }
}
