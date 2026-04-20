import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import{ HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from "./components/main/main.component";
import { GalleryComponent } from "./components/gallery/gallery.component";
import { ContactComponent } from "./components/contact/contact.component";
import { AboutUsComponent } from "./components/about-us/about-us.component";
import { ConsaltingComponent } from "./components/consalting/consalting.component";
import { ProjectComponent } from "./components/project/project.component";





@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, MainComponent, GalleryComponent, AboutUsComponent, ContactComponent, ConsaltingComponent, ProjectComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'brand-chef';
}
