import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
  <footer class="border-t border-white/10 bg-white/2 py-14">
    <div class="mx-auto grid w-[min(1120px,calc(100%-40px))] gap-6 md:grid-cols-3">
      <div>
        <div class="font-extrabold tracking-tight">TaskFlow</div>
        <p class="mt-3 max-w-md text-sm leading-7 text-muted">
          A modern workflow UI template built in Angular with Tailwind. Customize sections, colors, and content.
        </p>
      </div>

      <div class="grid gap-2 text-sm">
        <div class="font-bold text-text">Product</div>
        <a class="text-muted hover:text-text" href="#features">Features</a>
        <a class="text-muted hover:text-text" href="#pricing">Pricing</a>
        <a class="text-muted hover:text-text" href="#faq">FAQ</a>
      </div>

      <div class="grid gap-2 text-sm">
        <div class="font-bold text-text">Company</div>
        <a class="text-muted hover:text-text" href="#">About</a>
        <a class="text-muted hover:text-text" href="#">Contact</a>
        <a class="text-muted hover:text-text" href="#">Privacy</a>
      </div>
    </div>

    <div class="mx-auto mt-8 flex w-[min(1120px,calc(100%-40px))] flex-col gap-2 border-t border-white/8 pt-6 text-xs text-muted2 md:flex-row md:items-center md:justify-between">
      <span>© {{year}} TaskFlow. All rights reserved.</span>
      <span>Made with Angular + Tailwind</span>
    </div>
  </footer>
  `,
})
export class FooterComponent {
  year = new Date().getFullYear();
}
