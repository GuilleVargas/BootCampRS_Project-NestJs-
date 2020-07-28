import { Patient } from './../models/patient';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { PatientService } from '../../services/patient.service';




declare var M: any;

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit{


  constructor(public patientService: PatientService) { }

  ngOnInit() {
    this.getPatients();
    this.refreshPatientList();
  }

getPatients(){
  this.patientService.getPatients()
  .subscribe(
    res => console.log(res),
    err=> console.log(err)
  )
}

  refreshPatientList() {
    this.patientService.getPatients().subscribe((res) => {
      this.patientService.patients = res as Patient[];
    });
  }

   onEdit(pat: Patient) {
     this.patientService.selectedPatient = pat;
   }

  onDelete(_id: string, form: NgForm) {
    if (confirm('¿Estás seguro de que deseas borrar este paciente?') == true) {
      this.patientService.deletePatient(_id).subscribe((res) => {
        this.refreshPatientList();
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }

}
