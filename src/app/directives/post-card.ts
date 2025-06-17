import { Directive, ElementRef, HostListener, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[productCard]',
  standalone: true
})
export class ProductCardDirective implements OnChanges {
  // @Input() productCard: any;
  @Input() color1:string='red'
  private defaultShadow = '0 1em 2em rgba(0,0,0,0.1)';
  private hoverShadow = '0 2em 4em rgba(0,0,0,0.2)';

  constructor(private el: ElementRef, private renderer: Renderer2) {
    
    this.applyCardStyles();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.el.nativeElement.style.border='20px solid ${this.color}';

    // React to changes in the input property
    if (changes['productCard']) {
      this.applyCardStyles();
    console.log("onchange");

    }
  }

  private applyCardStyles(): void {
    
    this.renderer.setStyle(this.el.nativeElement, 'border-radius', '1em');
    // this.renderer.setStyle(this.el.nativeElement, 'color', 'cyan');
    console.log("apply");
    
    this.renderer.setStyle(this.el.nativeElement, 'box-shadow', this.defaultShadow);

    this.renderer.setStyle(this.el.nativeElement, 'transition', 'box-shadow 0.3s ease');

    this.renderer.setStyle(this.el.nativeElement, 'overflow', 'hidden');

  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    console.log("mouse enter");
    
    this.renderer.setStyle(this.el.nativeElement, 'box-shadow', this.hoverShadow);
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    
    this.renderer.setStyle(this.el.nativeElement, 'box-shadow', this.defaultShadow);
  }
}


// import { Directive, ElementRef, HostListener, input, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';

// @Directive({
//   selector: '[appProductCard]', 
//   standalone: true 
// })

// // export class ProductCardDirective implements OnInit,OnChanges{
// //   @input() borderColor: string ='#ddd';
// //   @Input() initialShadow: string = '2px 2px 5px rgba(0,0,0,0.1)';
// //   @Input() hoverShadow: string = '4px 4px 10px rgba(0,0,0,0.2)';
// //   private borderRadius: string = '8px'
// // }

// export class ProductCardDirective implements OnInit, OnChanges {
//   // Input property to demonstrate ngOnChanges, e.g., allow customizing the border color
//   @Input() borderColor: string = '#ddd'; // Default border color
//   @Input() initialShadow: string = '2px 2px 5px rgba(0,0,0,0.1)';
//   @Input() hoverShadow: string = '4px 4px 10px rgba(0,0,0,0.2)';
//   private borderRadius: string = '50px';

//   constructor(private el: ElementRef, private renderer: Renderer2) {
//     console.log("construc");

//   }

//   ngOnInit() {
//     // Apply initial styles
//     this.renderer.setStyle(this.el.nativeElement, 'border', `1px solid ${this.borderColor}`);
//     this.renderer.setStyle(this.el.nativeElement, 'border-radius', this.borderRadius);
//     this.renderer.setStyle(this.el.nativeElement, 'box-shadow', this.initialShadow);
//     this.renderer.setStyle(this.el.nativeElement, 'padding', '15px'); // Add some padding for better appearance
//     this.renderer.setStyle(this.el.nativeElement, 'transition', 'box-shadow 0.3s ease-in-out'); // Smooth transition for shadow
//     console.log("oninit");

//   }

//   ngOnChanges(changes: SimpleChanges) {
//     // b. Use ngOnChanges in custom directives.
//     // This will be called if any @Input() property changes.
//     if (changes['borderColor']) {
//       // If borderColor input changes, update the border style
//       this.renderer.setStyle(this.el.nativeElement, 'border', `100px solid ${this.borderColor}`);
//     }
//     if (changes['initialShadow']) {
//       console.log("dddd");
      
//       // If initialShadow input changes, update the base shadow
//       // (Only if not currently hovered, or re-apply after hover ends)
//       // For simplicity here, we'll just set it.
//       // A more robust solution might check a hover state flag.
//       this.renderer.setStyle(this.el.nativeElement, 'box-shadow', this.initialShadow);
//     }
//     // Note: If hoverShadow is also an input, you'd handle its changes here too.
//   }

//     // a. Use @HostListener to handle hover effects
//     @HostListener('mouseenter') onMouseEnter() {
//       this.renderer.setStyle(this.el.nativeElement, 'box-shadow', this.hoverShadow);
//     console.log("hostenter");

//     }
  
//     @HostListener('mouseleave') onMouseLeave() {
//       this.renderer.setStyle(this.el.nativeElement, 'box-shadow', this.initialShadow);
//     console.log("host leave");

//     }
//   }



