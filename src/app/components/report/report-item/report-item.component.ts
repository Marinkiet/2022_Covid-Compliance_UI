import { Component, OnInit,Inject, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ViewEncapsulation } from '@angular/core';
import { DatePipe } from '@angular/common';
import  {jsPDF}  from "jspdf";  
//import html2canvas from 'html2canvas';
import * as html2pdf from 'html2pdf.js'


//import * as jsPDF from "jspdf"; 

@Component({
  selector: 'app-report-item',
  templateUrl: './report-item.component.html',
  styleUrls: ['./report-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ReportItemComponent implements OnInit {

  reportForm !: FormGroup;
  currentDateTime =this.datepipe.transform((new Date), 'MM/dd/yyyy h:mm:ss');

  constructor( private formBuilder: FormBuilder,
    private api:ApiService,
    private dialogRef : MatDialogRef<ReportItemComponent>,
    //inject mat-dialog-data to get a single row array of data
    @Inject(MAT_DIALOG_DATA) public editData:any,
    public datepipe: DatePipe) { }

    @ViewChild('content') content !:ElementRef;

    ngOnInit(): void {
      this.reportForm = this.formBuilder.group({
        officer_id:['2174586954'],
        user_id: ['220557745'],
        user_type: ['Student'],
        form_id: ['1'],
        date: ['04 Oct,2022'],
        temperature: [36.7],
        comment: ['No comment']  
      });
      console.log(this.reportForm.value);
    }
    public SavePDF(): void {
      var element = document.getElementById('content');
  var opt = {
    margin:       0.25,
    filename:     'record.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
  };
  html2pdf().from(element).set(opt).save();
    }
}  

