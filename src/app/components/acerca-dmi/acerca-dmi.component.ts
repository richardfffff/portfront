import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-acerca-dmi',
  templateUrl: './acerca-dmi.component.html',
  styleUrls: ['./acerca-dmi.component.css']
})
export class AcercaDmiComponent implements OnInit {

  persona: persona = new persona("","","");

  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona = data})
  }
}
