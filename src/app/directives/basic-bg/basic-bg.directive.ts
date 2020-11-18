import {Directive, ElementRef, OnInit} from "@angular/core"
@Directive({
    selector: '[appBasicBg]'
})
export class BasicBgDirective implements OnInit{
    constructor(private elementRef: ElementRef){}
   ngOnInit(){
       this.elementRef.nativeElement.style.backgroundColor = "red";
   }
}