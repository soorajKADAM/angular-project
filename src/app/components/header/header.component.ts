import { Component, OnInit } from '@angular/core';

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  exportAsPDF() 
  {
  let data = document.getElementById('logotxt') as HTMLCanvasElement; 
  html2canvas(data).then(canvas => {
  const contentDataURL = canvas.toDataURL('image/png') // 'image/jpeg' for lower quality output.
  let pdf = new jsPDF('l', 'cm', 'a4'); //Generates PDF in landscape mode
  // let pdf = new jsPDF('p', 'cm', 'a4'); //Generates PDF in portrait mode
  let pageHeight= pdf.internal.pageSize.height;
  // Before adding new content
  pdf.addImage(contentDataURL, 'PNG', 0, 0, 29.7, pageHeight); 
  pdf.save('Filename.pdf'); 
  }); 
  }
  
  ngOnInit(): void {
  }

}
