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
      description: 'Mon Sto ckMon Stoc kMon Stoc kMon Stoc kMon Mon Sto ckMon Stoc kMon Stoc kMon Stoc kMon Mon Sto ckMon Stoc kMon Stoc kMon Stoc kMon ',
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
      description: 'Mon Sto ckMon Stoc kMon Stoc kMon Stoc kMon Mon Sto ckMon Stoc kMon Stoc kMon Stoc kMon Mon Sto ckMon Stoc kMon Stoc kMon Stoc kMon ',
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
      description: 'Mon Sto ckMon Stoc kMon Stoc kMon Stoc kMon Mon Sto ckMon Stoc kMon Stoc kMon Stoc kMon Mon Sto ckMon Stoc kMon Stoc kMon Stoc kMon ',
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
      description: 'Mon Sto ckMon Stoc kMon Stoc kMon Stoc kMon Mon Sto ckMon Stoc kMon Stoc kMon Stoc kMon Mon Sto ckMon Stoc kMon Stoc kMon Stoc kMon ',
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
      description: 'Mon Sto ckMon Stoc kMon Stoc kMon Stoc kMon Mon Sto ckMon Stoc kMon Stoc kMon Stoc kMon Mon Sto ckMon Stoc kMon Stoc kMon Stoc kMon ',
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
      description: 'Mon Sto ckMon Stoc kMon Stoc kMon Stoc kMon Mon Sto ckMon Stoc kMon Stoc kMon Stoc kMon Mon Sto ckMon Stoc kMon Stoc kMon Stoc kMon ',
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
      description: 'Mon Sto ckMon Stoc kMon Stoc kMon Stoc kMon Mon Sto ckMon Stoc kMon Stoc kMon Stoc kMon Mon Sto ckMon Stoc kMon Stoc kMon Stoc kMon ',
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
