import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement, 'reveal-visible');
          observer.unobserve(this.el.nativeElement); // Анімація спрацює лише один раз
        }
      });
    }, { threshold: 0.15 }); // Елемент з'явиться, коли 15% його площі буде видно

    this.renderer.addClass(this.el.nativeElement, 'reveal-hidden');
    observer.observe(this.el.nativeElement);
  }
}
