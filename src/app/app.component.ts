import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LeftToolbarComponent } from './components/left-toolbar/left-toolbar.component';
import { IconProviderService } from './services/icon-provider.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LeftToolbarComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'clusterApp';

  constructor(private iconProvider: IconProviderService) {}
}
