//spy on element to which it is applied
//Usage: <div mySpy>...</div>
@Directive({selector:'[mySpy]'})
export class SpyDirective implements OnInit, OnDestroy{
  constructor(private logger:LoggerService){}
  ngOnInit(){this.logIt('onInit');}
  ngOnDestroy(){this.logIt('onDestroy');}

  private logIt(msg:String){
    this.logger.log('Spy #$(nextId++) ${msg}');
  }
}
