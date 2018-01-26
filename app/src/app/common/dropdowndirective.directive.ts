import { Directive,ElementRef,HostListener,HostBinding,Renderer2  } from '@angular/core';

@Directive({
  selector: '[appDropdowndirective]'
})
export class DropdowndirectiveDirective {


  constructor(private el:ElementRef){

  }
  @HostBinding('class.open') hostclass:boolean=false;
  @HostListener('click') onClick() {
   this.Open();
  }

  private Open() {
      this.hostclass=!this.hostclass;
  }
}
