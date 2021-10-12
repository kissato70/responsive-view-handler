# Responsive view change trigger class for Javascript
In certain cases you may want to have more control than just use the CSS @media queries. This class makes it possible to have a callback function fired in case of change in the view (resize or orientation change).  
The callback function will be called ONLY if any of the two components of the output parameter object has changed.  
For `React` consider using the [@kekalma/responsive](https://www.npmjs.com/package/@kekalma/responsive) package.

Input (constructor) parameters:
|parameter | values |Description|
|--------- | :------:| --------|
|`minWidth`| pixels | The screen width, where the event fires. |
|`minHeight`| pixels | The screen height, where the event fires. |
|`mobileViewHandler`| function | A callback function for the event trigger. |
  
<br/>  
The return object is:  

```javascript
type mobileStatusType = {
  mobileView    :  boolean | null,
  portraitView  :  boolean | null,
  width         :  pixels  | null,
  height        :  pixels  | null
}
```

|components | values |Description|
|--------- | :------:| --------| 
| `mobileView`| true\|false | Sends TRUE if the screen width is smaller than `minWidth` and/or the screen height is smaller than `minHeight`.|  
| `portraitView` | true\|false | TRUE = portrait, FALSE = landscape arrangement.|  
<br>  



Use the class in __VanillaJs__:
```javascript
import ResponsiveViewTrigger from 'responsive-view-trigger';

const minWidth = 1024;
new ResponsiveViewTrigger(minWidth, , mobileViewHandler);

function mobileViewHandler(mobileStatus){
  // add or remove CSS class names and do the other things...
}
```
the same code, __VanillaJS with Typescript__ :
```javascript
import ResponsiveViewTrigger, {mobileStatusType} from 'responsive-view-trigger';

const minWidth : number = 1024;
new ResponsiveViewTrigger(minWidth, , mobileViewHandler);

function mobileViewHandler(mobileStatus : mobileStatusType){
  // add or remove CSS class names and do the other things...
}
```
<br/>  

Class example using __React__ : 
```javascript
import ResponsiveViewTrigger from 'responsive-view-trigger';

export default class myClassComponent extends Component{
  construct (props) {
    super(props);
    ...
    this.mobileViewHandler = this.mobileViewHandler.bind(this);
  }

  componentDidMount() {
    const minWidth = 1024;
    new ResponsiveViewTrigger(minWidth, , this.mobileViewHandler);
  }

  mobileViewHandler = (mobileView: boolean, portraitView: boolean)=> {
    // change states depending on the incoming parameters, etc.
  }

  render() {
    return (
      ...
    )
  }
};
```
the same code, __React with Typescript__ :
```javascript
import ResponsiveViewTrigger, {mobileStatusType} from 'responsive-view-trigger';

type myProps = { ... }
type myState = {
  ...
  mobileState: mobileStatusType
}

export default class myClassComponent extends Component<myProps,myState>{
  construct (props : myProps) {
    super(props);
    ...
    this.state = {
      ...
      mobileState: {mobileView: null, portraitView:null}
    }
    this.mobileViewHandler = this.mobileViewHandler.bind(this);
  }

  componentDidMount() {
    const minWidth : number = 1024;
    new ResponsiveViewTrigger(minWidth, , this.mobileViewHandler);
  }

  mobileViewHandler = ( newMobileState : mobileStatusType)=> {
    this.setState({
      mobileState : newMobileState
    })
    // change other states, styles etc. depending on the incoming status, etc.
  }

  render() {
    return (
      ...
    )
  }
};
```

## ___Personal note:___
Consider to use plain CSS @media queries, as it gives you more possibilities.

<br>

## __`Changelog:`__

|Version|What's new, description|
|:---:|:---|
|2.0.1|`minHeight` property.<br>Returning `width` and `height` of the screen.|

<br>


<br><br>
>Written by: __Attila Kiss__, [e-LET Kft](https://e-let.hu), Hungary  ( GitHub: [kissato70](https://github.com/kissato70) )

 > Licence:  MIT

> Report issues [here](https://github.com/kissato70/responsive-view-trigger/issues).

<br>  

## Future version enhancement plans:
- Screen turning triggering (fires an event at a certain angle)
## Support the project >>> [Donation](https://bit.ly/kissato70_paypal_donate)  
_Please support the further releases, if you like this class! **Thank you!**_  
<br/>