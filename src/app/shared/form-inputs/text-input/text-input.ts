import { Component, input, model } from '@angular/core';
import { FormValueControl } from '@angular/forms/signals';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-text-input',
  imports: [MatFormField, MatLabel, MatInput],
  templateUrl: './text-input.html',
  styleUrl: './text-input.scss',
})
export class TextInput implements FormValueControl<string> {
  value = model<string>('');
  invalid? = input(true);
}
