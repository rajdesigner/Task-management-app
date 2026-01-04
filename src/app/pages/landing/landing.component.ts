import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';

type Plan = { name: string; price: string; blurb: string; bullets: string[]; emphasized?: boolean; };

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './landing.component.html',
})
export class LandingComponent {
  billing = signal<'monthly' | 'yearly'>('monthly');

  plans = computed<Plan[]>(() => {
    const yearly = this.billing() === 'yearly';
    return [
      {
        name: 'Starter',
        price: yearly ? '₹1,999/yr' : '₹199/mo',
        blurb: 'For individuals and prototypes.',
        bullets: ['Unlimited tasks', 'Basic analytics', 'Email support'],
      },
      {
        name: 'Team',
        price: yearly ? '₹6,999/yr' : '₹699/mo',
        blurb: 'For small teams shipping weekly.',
        bullets: ['Projects & boards', 'Roles & permissions', 'Exports & reports'],
        emphasized: true,
      },
      {
        name: 'Business',
        price: yearly ? '₹14,999/yr' : '₹1,499/mo',
        blurb: 'For advanced workflows and control.',
        bullets: ['Audit log', 'Custom fields', 'Priority support'],
      },
    ];
  });

  faqs = [
    { q: 'Can I customize the sections?', a: 'Yes. Each section is plain HTML + Tailwind utility classes. Add/remove blocks as needed.' },
    { q: 'Does this use any UI library?', a: 'No. It is Angular + Tailwind only. You can add Angular Material later if needed.' },
    { q: 'Is it responsive?', a: 'Yes. Layout collapses for mobile and includes a hamburger menu.' },
  ];

  setBilling(v: 'monthly' | 'yearly') { this.billing.set(v); }
}
