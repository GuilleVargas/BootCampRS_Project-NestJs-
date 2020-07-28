import { ProfesionalService } from './../../services/profesional.service';
import { Profesional } from './../models/profesional';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';




declare var M: any;

@Component({
  selector: 'app-profesional-list',
  templateUrl: './profesional-list.component.html',
  styleUrls: ['./profesional-list.component.scss']
})
export class ProfesionalListComponent implements OnInit{

 
  constructor(public profesionalService: ProfesionalService) { }

  ngOnInit() {
    this.refreshProfesionalList();
  }


  refreshProfesionalList() {
    this.profesionalService.getProfesionals().subscribe((res) => {
      this.profesionalService.profesional = res as Profesional[];
    });
  }


  onDelete(_id: string, form: NgForm) {
    if (confirm('¿Estás seguro de que deseas borrar este profesional?') == true) {
      this.profesionalService.deleteProfesional(_id).subscribe((res) => {
        this.refreshProfesionalList();
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }

}