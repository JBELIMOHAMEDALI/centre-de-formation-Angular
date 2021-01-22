import { Component, OnInit } from '@angular/core';
import {  Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-erour',
  templateUrl: './erour.component.html',
  styleUrls: ['./erour.component.scss']
})
export class ErourComponent implements OnInit {
  @Input() name;
  @Input() tetre;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
