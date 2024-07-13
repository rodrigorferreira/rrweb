import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor() { }

  onSubmit(contactForm: NgForm) {
    if (contactForm.valid) {
      const formData = contactForm.value;
      // Lógica de envio de e-mail simulada
      console.log('Form data:', formData);
      alert('Formulário enviado com sucesso!');
      contactForm.reset();
    }
  }
}
