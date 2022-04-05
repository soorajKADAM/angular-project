import { Component } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})
export class AppComponent  {


  
  exportAsPDF() 
  {
  let data = document.getElementById('content') as HTMLCanvasElement; 
  html2canvas(data).then(canvas => {
    var imgData = canvas.toDataURL('image/png');// 'image/jpeg' for lower quality output.
  var imgWidth = 210; 
  var pageHeight = 295; 
  var imgHeight = canvas.height * imgWidth / canvas.width;
  var heightLeft = imgHeight;
  var doc = new jsPDF('p', 'mm');
  // let doc = new jsPDF();
  var position = 0;
  doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
  heightLeft -= pageHeight;
  while (heightLeft >= 0) {
  position = heightLeft - imgHeight;
  doc.addPage();
  doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
  heightLeft -= pageHeight;
  }
  doc.save( 'file.pdf');
  }); 
  } 
}
