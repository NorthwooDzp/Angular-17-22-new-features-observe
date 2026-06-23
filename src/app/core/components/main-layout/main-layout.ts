import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Sidenav } from '../sidenav/sidenav';

@Component({
  selector: 'app-main-layout',
  imports: [Header, Sidenav],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {}
