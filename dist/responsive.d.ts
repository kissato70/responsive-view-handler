declare type mobileStatus = {
    mobileView: boolean | null;
    portraitView: boolean | null;
};
export type { mobileStatus };
export default class ResponsiveViewHandler {
    mobileStatus: mobileStatus;
    responsiveMinWidth: number;
    callbackFunction: Function;
    constructor(minWidth: number, onMobileViewChange: Function);
    Response: () => void;
}
//# sourceMappingURL=responsive.d.ts.map