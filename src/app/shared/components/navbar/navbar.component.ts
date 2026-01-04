import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
  <header class="sticky top-0 z-50 border-b border-transparent transition"
          [ngClass]="{
            'bg-bg/60': scrolled(),
            'backdrop-blur': scrolled(),
            'border-white/10': scrolled()
          }">
    <div class="mx-auto flex w-[min(1120px,calc(100%-40px))] items-center justify-between gap-4 py-3">
      <a class="flex items-center gap-2" href="#hero">
        <span class="h-9 w-9 rounded-2xl bg-gradient-to-br from-brand to-brand2 shadow-soft"></span>
        <span class="font-extrabold tracking-tight">TaskFlow</span>
      </a>

      <nav class="hidden items-center gap-5 md:flex">
        <a class="text-sm text-muted hover:text-text" href="#features">Features</a>
        <a class="text-sm text-muted hover:text-text" href="#preview">Preview</a>
        <a class="text-sm text-muted hover:text-text" href="#pricing">Pricing</a>
        <a class="text-sm text-muted hover:text-text" href="#faq">FAQ</a>
        <div class="ml-2 flex items-center gap-2">
          <button class="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
                  (click)="scrollTo('pricing')">View Plans</button>
          <button class="rounded-xl border border-brand/35 bg-gradient-to-br from-brand/20 to-brand2/20 px-4 py-2 text-sm hover:border-brand/55"
                  (click)="scrollTo('hero')">Get Started</button>
        </div>
      </nav>

      <button class="md:hidden rounded-xl border border-white/15 bg-white/5 px-3 py-2 hover:bg-white/10"
              type="button" (click)="toggle()">
        <div class="space-y-1">
          <span class="block h-0.5 w-5 rounded bg-white/85"></span>
          <span class="block h-0.5 w-5 rounded bg-white/85"></span>
          <span class="block h-0.5 w-5 rounded bg-white/85"></span>
        </div>
      </button>
    </div>

    <div class="md:hidden" *ngIf="open()">
      <div class="mx-auto w-[min(1120px,calc(100%-40px))] rounded-2xl border border-white/10 bg-bg/80 p-4 backdrop-blur">
        <div class="grid gap-3">
          <a class="text-sm text-muted hover:text-text" (click)="scrollTo('features')" href="#features">Features</a>
          <a class="text-sm text-muted hover:text-text" (click)="scrollTo('preview')" href="#preview">Preview</a>
          <a class="text-sm text-muted hover:text-text" (click)="scrollTo('pricing')" href="#pricing">Pricing</a>
          <a class="text-sm text-muted hover:text-text" (click)="scrollTo('faq')" href="#faq">FAQ</a>
          <div class="grid gap-2 pt-2">
            <button class="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
                    (click)="scrollTo('pricing')">View Plans</button>
            <button class="rounded-xl border border-brand/35 bg-gradient-to-br from-brand/20 to-brand2/20 px-4 py-2 text-sm hover:border-brand/55"
                    (click)="scrollTo('hero')">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  </header>
  `,
})
export class NavbarComponent {
  open = signal(false);
  scrolled = signal(false);

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 8);
  }

  toggle() { this.open.set(!this.open()); }

  scrollTo(id: string) {
    this.open.set(false);
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
