import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
// @ts-ignore
// import Typewriter from 't-writer.js';

import Typewriter from 'typewriter-effect/dist/core';


@Component({
  selector: 'flb-brand-splash',
  templateUrl: './brand-splash.component.html',
  styleUrls: ['./brand-splash.component.less']
})
export class BrandSplashComponent implements OnInit, AfterViewInit {


  @ViewChild('flbHeadLine') typewriter_hook: any;


  constructor() { 

  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {


    const typewriterHook = this.typewriter_hook.nativeElement;

    var typewriter = new Typewriter(typewriterHook, {
      loop: true,
      delay: 10,
      deleteSpeed: 1
    });

    const primaryColor = '#593A73';
    const fBToRescueColor = '#7A688F';
    const colorSpan = '<br /><span style="color: #7A688F;">';
    const endSpan = '</span>';
    const midPause = 1000;
    const endPause = 2000;

    typewriter
      .pauseFor(500)
      .typeString('When being fluid becomes 🤕.')
      .pauseFor(midPause)
      .typeString(colorSpan + 'Flow Bench helps.' + endSpan)
      .pauseFor(endPause)
      .deleteAll(1)
      
      .typeString('When content teams feel out of the loop.')
      .pauseFor(midPause)
      .typeString(colorSpan + 'Flow Bench unites.' + endSpan)
      .pauseFor(endPause)
      .deleteAll(1)

      .typeString('When designers have to use one UX tool to keep the peace.')
      .pauseFor(midPause)
      .typeString(colorSpan + 'Flow Bench empowers.' + endSpan)
      .pauseFor(endPause)
      .deleteAll(1)

      .typeString('When your kanban board makes you 🤯.')
      .pauseFor(midPause)
      .typeString(colorSpan + 'Flow Bench brings clarity.' + endSpan)
      .pauseFor(endPause)
      .deleteAll(1)

      .typeString('When management don\'t appreciate what you\'re doing.')
      .pauseFor(midPause)
      .typeString(colorSpan + 'Flow Bench gives you a story.' + endSpan)
      .pauseFor(endPause)
      .deleteAll(1)

      .typeString('When you need clarity.')
      .pauseFor(midPause)
      .typeString(colorSpan + 'You need Flow Bench.' + endSpan)
      .pauseFor(endPause)
      .deleteAll(1)

      .start();
  }


}
