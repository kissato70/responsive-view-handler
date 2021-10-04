type mobileStatusType = {
  mobileView: boolean | null,
  portraitView: boolean | null,
  width: number | null,
  height: number | null
}
export type { mobileStatusType };


export default class ResponsiveViewTrigger
{
  mobileStatus: mobileStatusType;
  responsiveMinWidth: number;
  responsiveMinHeight: number;
  callbackFunction: Function;
  
  constructor(minWidth: number = 0, minHeight: number = 0, onMobileViewChange: Function)
  {
    this.mobileStatus = { mobileView: null, portraitView: null, width: null, height: null };
    this.responsiveMinWidth = minWidth;
    this.responsiveMinHeight = minHeight
    this.callbackFunction = onMobileViewChange;
    window.addEventListener("resize", this.Response);
    window.addEventListener("orientationchange", this.Response);
    this.Response = this.Response.bind(this);
    this.Response();
  }

  Response = () =>
  {
    const width = window.innerWidth
    const height = window.innerHeight
    const mobileView: boolean = this.responsiveMinWidth > width || this.responsiveMinHeight > height;
    const portraitView: boolean = width <= height
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
        portraitView: this.mobileStatus.portraitView,
        width,
        height
      }
      this.callbackFunction(newStatus);
    }
  }

}