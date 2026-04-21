import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';


interface GalleryItem {
  src: string;

}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  imports: [CommonModule],
  styleUrls: ['./gallery.component.scss']
})
// ... (імпорти та інтерфейс залишаються без змін)

export class GalleryComponent implements OnInit, OnDestroy {
  galleryItems: GalleryItem[] = [
    { src: 'assets/images/gallery-1.jpg'},
    { src: 'assets/images/gallery-8.jpg'},
    { src: 'assets/images/gallery-3.jpg'},
    { src: 'assets/images/gallery-4.jpg'},
    { src: 'assets/images/gallery-6.jpg'},
    { src: 'assets/images/gallery-7.jpg'},
    { src: 'assets/images/gallery-9.jpg'},
    { src: 'assets/images/gallery-10.jpg'},
    { src: 'assets/images/gallery-11.jpg'},
    { src: 'assets/images/gallery-12.jpg'},
    { src: 'assets/images/gallery-13.jpg'},
    { src: 'assets/images/gallery-14.jpg'},
    { src: 'assets/images/gallery-15.jpg'}
  ];

  currentIndex = 0;
  itemsVisible = 3;
  autoPlayInterval: any;

  ngOnInit() {
    this.updateItemsVisible();
    this.startAutoPlay();
    window.addEventListener('resize', () => this.updateItemsVisible());
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  updateItemsVisible() {
    if (window.innerWidth < 768) {
      this.itemsVisible = 1;
    } else if (window.innerWidth < 1200) {
      this.itemsVisible = 2;
    } else {
      this.itemsVisible = 3;
    }
  }

  startAutoPlay() {
    this.stopAutoPlay(); // Очищуємо старий інтервал перед запуском нового
    this.autoPlayInterval = setInterval(() => {
      this.next();
    }, 4000); // Рух кожні 4 секунди
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  next() {
    const maxIndex = this.galleryItems.length - this.itemsVisible;
    if (this.currentIndex < maxIndex) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // Повертаємось на початок
    }
  }

  prev() {
    const maxIndex = this.galleryItems.length - this.itemsVisible;
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = maxIndex;
    }
  }
}
