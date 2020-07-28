import { Patient } from './../models/patient';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { PatientService } from '../../services/patient.service';
import {MatSnackBar} from '@angular/material/snack-bar';

declare var M: any;

@Component({
  selector: 'app-patient-new',
  templateUrl: './patient-new.component.html',
  styleUrls: ['./patient-new.component.scss']
})
export class PatientNewComponent implements OnInit {

  patient: FormGroup;
  selected = 'x';
  constructor(public patientService: PatientService, private _snackBar: MatSnackBar) { }

  ngOnInit() {

  this.patient = new FormGroup({
      nhc: new FormControl('',[Validators.required, Validators.maxLength(15)]),
      name: new FormControl('',Validators.required),
      surname: new FormControl('',Validators.required),
      second_surname: new FormControl(''),
      gender: new FormControl(''),
      birth_date: new FormControl(''),
      nif: new FormControl('',Validators.maxLength(9)),
      street: new FormControl(''),
      portal_number: new FormControl(''),
      door: new FormControl(''),
      postal_code: new FormControl('',Validators.maxLength(5)),
      city: new FormControl(''),
      tarjet_number: new FormControl(''),
      insurance_name: new FormControl(''),
      type_of_insurance: new FormControl('')
  })

    this.resetForm();
    this.refreshPatientList();
  }


  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.patientService.selectedPatient = {
      _id: "",
      nhc: null,
      name: "",
      surname: "",
      second_surname: "",
      gender: "",
      birth_date: "",
      nif: "",
      street: "",
      portal_number: null,
      door: "",
      postal_code: 0,
      city: "",
      tarjet_number: 0,
      insurance_name: "",
      type_of_insurance: ""
    }
  }

  onSubmit(form) {
    console.log(form.value)
    if (!form.value._id) {
      this.patientService.createPatient(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshPatientList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    // else {
    //   this.patientService.updatePatient(form.value).subscribe((res) => {
    //     this.resetForm(form);
    //     this.refreshPatientList();
    //     M.toast({ html: 'Updated successfully', classes: 'rounded' });
    //   });
    // }
  }

  refreshPatientList() {
    this.patientService.getPatients().subscribe((res) => {
      this.patientService.patients = res as Patient[];
    });
  }

}
