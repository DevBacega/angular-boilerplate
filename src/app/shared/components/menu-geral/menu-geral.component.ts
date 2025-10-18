import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ZardButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-menu-geral',
  imports: [ZardButtonComponent],
  templateUrl: './menu-geral.component.html',
  styleUrl: './menu-geral.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuGeralComponent {}
