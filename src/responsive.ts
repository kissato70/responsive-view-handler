type mobileStatusType = {
  mobileView: boolean | null,
  portraitView: boolean | null
}
export type { mobileStatusType };


export default class ResponsiveViewTrigger
{
  mobileStatus: mobileStatusType;
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
    const mobileView: boolean = this.responsiveMinWidth > window.innerWidth;
    const portraitView: boolean = window.innerWidth <= window.innerHeight
    let hasChange = false;
    if ( mobileView !== this.mobileStatus.mobileView )
    {
      this.mobileStatus.mobileView = mobileView;
      hasChange = true;
    }
    if (portraitView !== this.mobileStatus.portraitView)
    {
      this.mobileStatus.portraitView = portraitView;
      hasChange = true;
    }
    if (hasChange)
    {
      let newStatus: mobileStatusType = {
        mobileView: this.mobileStatus.mobileView,
        portraitView: this.mobileStatus.portraitView
      }
      this.callbackFunction(newStatus);
    }
  }

}