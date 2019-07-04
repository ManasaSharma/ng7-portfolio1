import { Component, OnInit, Input, HostBinding, ElementRef, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: '[app-text]',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit, OnChanges, OnDestroy {
  @Input() public color = null;
  @Input() public size = null;
  @Input() public weight = null;
  @Input() public transform = null;
  @HostBinding('class.transform-uppercase') public isUppercase = false;
  @HostBinding('class.color-light') public islight = false;
  @HostBinding('class.color-gray') public isgray = false;
  constructor(
    private elementRef: ElementRef,
    ) {}

  ngOnInit() {
    this.performEvaluations();
  }
  ngOnChanges() {
    this.performEvaluations();
  }
  ngOnDestroy() {
    this.elementRef = null;
  }
  performEvaluations() {
    this.evaluateIfUppercase();
    this.evaluateIfLightColor();
    this. evaluateIfGrayColor();
  }
  evaluateIfUppercase() {
    this.isUppercase = this.transform === 'uppercase';
  }
  evaluateIfLightColor() {
    this.islight = this.color === 'light';
  }
  evaluateIfGrayColor() {
    this.isgray = this.color === 'gray';
  }

}
