type mobileStatus = {
  mobileView: boolean | null,
  portraitView: boolean | null
}
export type { mobileStatus };


export default class ResponsiveViewHandler
{
  mobileStatus: mobileStatus;
  responsiveMinWidth: number;
  callbackFunction: Function;
  
  constructor(minWidth: number, onMobileViewChange: Function)
  {
    this.mobileStatus = { mobileView: null, portraitView: null };
    this.responsiveMinWidth = minWidth;
    this.callbackFunction = onMobileViewChange;
    window.addEventListener("resize", this.Response);
    window.addEventListener("orientationchange", this.Response);
    this.Response = this.Response.bind(this);
    this.Response();
  }

  Response = () =>
  {
    const mView: boolean = this.responsiveMinWidth > window.innerWidth;
    const portraitMode: boolean = window.innerWidth <= window.innerHeight
    let hasChange = false;
    if ( mView !== this.mobileStatus.mobileView )
    {
      this.mobileStatus.mobileView = mView;
      hasChange = true;
    }
    if (portraitMode !== this.mobileStatus.portraitView)
    {
      this.mobileStatus.portraitView = portraitMode;
      hasChange = true;
    }
    if (hasChange)
      {
        this.callbackFunction(mView,portraitMode);
      }
  }

}