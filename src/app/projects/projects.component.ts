import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  myProjects = [
    {
      name:'Gestion des absences',
      description: 'Application web pour automatiser le processus de gestion des absences des étudiants de l’EST Safi , en accompagnant tous les acteurs impliqués dans ce processus.',
      thumbnail: 'assets/images/thumbnail/absences.png',
      pics: [
        'assets/images/thumbnail/absences (1).png',
        'assets/images/thumbnail/absences (2).png',
        'assets/images/thumbnail/absences (3).png',
        'assets/images/thumbnail/absences (4).png'
      ],
      technologies: ['html','css','bootstrap','javascript','php','xml','xpath'],
      date: '2022-2023'
    },
    {
      name:'Inscription en ligne',
      description: 'projet portait sur la conception et la réalisation d’une application web permettant aux étudiants de s’inscrire sur les différents cursus de l’établissement Ecole supérieure de technologie safi.',
      thumbnail: 'assets/images/thumbnail/inscription.png',
      pics: [
        'assets/images/thumbnail/inscription (1).png',
        'assets/images/thumbnail/inscription (2).png',
        'assets/images/thumbnail/inscription (3).png',
        'assets/images/thumbnail/inscription (4).png'
      ],
      technologies: ['html','css','javascript','php','mysql'],
      date: '2022-2023'
    },
    {
      name:'Rosmarina',
      description: 'Application web pour pizzeria qui permet aux leur clients de commander et de réserver en ligne.',
      thumbnail: 'assets/images/thumbnail/rosmarina.png',
      pics: [
        'assets/images/technologies/rosmarina (1).png',
        'assets/images/technologies/rosmarina (2).png',
        'assets/images/technologies/rosmarina (3).png',
        'assets/images/technologies/rosmarina (4).png'
      ],
      technologies: ['html','css','javascript','reactjs','nodejs','mysql'],
      date: '2022-2023'
    },
    {
      name:'Shefaa',
      description: 'Application mobile pour les patientes et médecins qui propose une solution informatique et qui vise principalement à aider les patientes souffrant des symptômes et des effets secondaires de la chimiothérapie à mieux gérer leurs maladies au quotidien, et aux médecins de se tenir au courant et de vérifier l\'état de la patiente ',
      thumbnail: 'assets/images/thumbnail/shefaa.PNG',
      pics: [
        'assets/images/technologies/shefaa (1).PNG',
        'assets/images/technologies/shefaa (2).PNG',
        'assets/images/technologies/shefaa (3).PNG',
        'assets/images/technologies/shefaa (4).PNG',
        'assets/images/technologies/shefaa (5).PNG',
        'assets/images/technologies/shefaa (6).PNG',
        'assets/images/technologies/shefaa (7).PNG'
      ],
      technologies: ['html','sass','typescript','angular','ionic','firebase'],
      date: '2022-2023'
    },
    {
      name:'Resto Mobile',
      description: 'Application mobile de restauration qui permet aux clients de commander et de réserver en ligne.',
      thumbnail: 'assets/images/thumbnail/restomobile.jpg',
      pics: [
        'assets/images/technologies/restomobile (1).jpg',
        'assets/images/technologies/restomobile (2).jpg',
        'assets/images/technologies/restomobile (3).jpg',
        'assets/images/technologies/restomobile (4).jpg',
        'assets/images/technologies/restomobile (5).jpg',
        'assets/images/technologies/restomobile (6).jpg',
        'assets/images/technologies/restomobile (7).jpg'
      ],
      technologies: ['html','css','javascript','reactjs','nodejs','mysql'],
      date: '2022-2023'
    },
    {
      name:'Resto',
      description: 'Application web de restauration qui permet aux clients de commander et de réserver en ligne.',
      thumbnail: 'assets/images/thumbnail/resto.png',
      pics: [
        'assets/images/technologies/resto (1).png',
        'assets/images/technologies/resto (2).png',
        'assets/images/technologies/resto (3).png',
        'assets/images/technologies/resto (4).png'
      ],
      technologies: ['html','css','javascript','reactjs','firebase'],
      date: '2021-2022'
    },
    {
      name:'Mon Stock',
      description: 'Application web pour la gestion des stocks et la génération des facteurs sous forme de PDF et de statistiques.',
      thumbnail: 'assets/images/thumbnail/monstock.png',
      pics: [
        'assets/images/technologies/monstock (1).png',
        'assets/images/technologies/monstock (2).png',
        'assets/images/technologies/monstock (3).png',
        'assets/images/technologies/monstock (4).png'
      ],
      technologies: ['html','css','javascript','php','mysql'],
      date: '2021-2022'
    },
  ]
}
