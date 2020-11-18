import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAdvBg]'
})
export class AdvBgDirective implements OnInit {

  constructor(private eleRef:ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    this.renderer.setStyle(this.eleRef.nativeElement, 'background-color','green')
  }

}
