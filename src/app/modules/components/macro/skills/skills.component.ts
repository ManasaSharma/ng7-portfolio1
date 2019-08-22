import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
   chart = new Chart({
    chart: {
        type: 'bar'
    },
    title: {
        text: 'SKILLS'
    },
    xAxis: {
        categories: [
            'CSS', 'HTML', 'JAVASCRIPT', 
            'TYPESCRIPT', 'ANGULARJS', 'ANGULAR', 
            'PROTRACTOR TESTING', 'JASMINE TESTING','HIGH CHARTS',
            'GIT', 'AEM', 'JIRA',
            'INVISION', 'RESPONSIVE DESIGN', 'AWS CONSOLE'
        ]
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Scale'
        },
        max: 10
    },
    legend: {
        reversed: true
    },
    plotOptions: {
        series: {
            showInLegend: false
        }
    },
    series: [{
        data: [
            8.25, 8, 7, 
            6, 5.5, 6.5, 
            7.5, 5,4 ,
            7, 5, 9, 
            9, 9, 3
        ]
    }]
  });
  constructor() { }

  ngOnInit() {
  }

}
