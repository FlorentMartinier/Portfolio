import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';

interface Project {
  title: string;
  tag: string;
  image: string;
  description: string;
  link: string;
  transform: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [NgForOf]
})
export class AppComponent {
  projects: Project[] = [
    {
      title: 'Barrel Manager',
      tag: 'Android / Mobile',
      image: 'assets/barrel_manager.webp',
      description: 'Application Android de gestion de vieillissement en fût (Kotlin).',
      link: 'https://play.google.com/store/apps/details?id=com.fmartinier.barrelclassifier&hl=fr',
      transform: ''
    },
    {
      title: 'Carte de Pizzas',
      tag: 'Web / App',
      image: 'assets/logo_pizza.png',
      description: 'Site web de présentation de mes créations de pizzas (Angular, TailwindCSS).',
      link: 'https://pizzas-de-florent.netlify.app/',
      transform: ''
    },
    {
      title: 'Killer Party',
      tag: 'Game / Social',
      image: 'assets/killer_party.webp',
      description: 'Application Andoid d’automatisation du jeu \'Killer Party\' (Kotlin).',
      link: 'https://killer-party.en.aptoide.com/app',
      transform: ''
    }
  ];

  handleMove(event: MouseEvent, project: Project) {
    const card = event.currentTarget as HTMLElement;
    const box = card.getBoundingClientRect();
    const x = event.clientX - box.left;
    const y = event.clientY - box.top;
    const centerX = box.width / 2;
    const centerY = box.height / 2;
    
    // Calcul de l'inclinaison (10 degrés max)
    const rotateX = (centerY - y) / 10;
    const rotateY = (x - centerX) / 10;

    project.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  }

  resetCard(project: Project) {
    project.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  }
}