import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlighted]'
})
export class Highlighted {

  constructor(private el: ElementRef) { }


  @HostBinding("style.cursor") cursor = "pointer";
  @HostBinding("style.backgroundColor") bgColor="red"

  @HostListener("mouseenter") changeFontSize(){
      console.log("Mouse Enter") 
      this.el.nativeElement.style.fontSize="50px"
    }

  @HostListener("mouseleave") ResetFontSize(){
    console.log("mouse leave")
          this.el.nativeElement.style.fontSize="20px"
  }
}
