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
    @HostBinding('class.size-xs') public isxs = false;
    @HostBinding('class.size-sm') public issm = false;
    @HostBinding('class.size-reg') public isregular = false;
    @HostBinding('class.size-mid') public ismd = false;
    @HostBinding('class.size-lg') public islg = false;
    @HostBinding('class.size-xl') public isxl = false;
    @HostBinding('class.size-xxl') public isxxl = false;
    @HostBinding('class.weight-light')  public islightweight   = false;
    @HostBinding('class.weight-book')  public isbook   = false;
    @HostBinding('class.weight-normal')  public isnormal   = false;
    @HostBinding('class.weight-heavy')  public isheavy   = false;
    @HostBinding('class.weight-strong') public isstrong  = false;

    constructor(
        private elementRef: ElementRef,
    ) { }

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
        this.evaluateIfGrayColor();
        this.evaluateIfLg();
        this.evaluateIfXXl();
        this.evaluateIfXl();
        this.evaluateIfMd();
        this.evaluateIfSm();
        this.evaluateIfXs();
        this.evaluateIfLightWeight();
        this.evaluateIfBook();
        this.evaluateIfNormal();
        this.evaluateIfHeavy();
        this.evaluateIfStrong();
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
    evaluateIfXXl() {
        this.isxxl = this.size === 'xxl';
    }
    evaluateIfXl() {
        this.isxl = this.size === 'xl';
    }
    evaluateIfLg() {
        this.islg = this.size === 'lg';
    }

    evaluateIfMd() {
        this.ismd = this.size === 'md';
    }
    evaluateIfRegular() {
        this.isregular = this.size === 'regular';
    }
    evaluateIfSm() {
        this.issm = this.size === 'sm';
    }

    evaluateIfXs() {
        this.isxs = this.size === 'xs';
    }
    evaluateIfLightWeight() {
        this.islightweight = this.weight === 'light';
    }

    evaluateIfBook() {
        this.isbook = this.weight === 'book';
    }

    evaluateIfNormal() {
        this.isnormal = this.weight === 'normal';
    }

    evaluateIfHeavy() {
        this.isheavy = this.weight === 'heavy';
    }

    evaluateIfStrong() {
        this.isstrong = this.weight === 'strong';
    }

}
