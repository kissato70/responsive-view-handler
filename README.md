# Responsive view change trigger class for Javascript
In certain cases you may want to have more control than just use the CSS @media queries. This class makes it possible to have a callback function fired in case of change in the view (resize or orientation change).  
The callback function will be called ONLY if any of the two output parameters has changed. 

Input (constructor) parameters:
|parameter | values |Description|
|--------- | :------:| --------|
|`minWidth`| pixels | The screen width, where the event fires. |
|`mobileViewHandler`| function | A callback function for the event trigger. |
  
<br/>  
The two return parameters are:  

|parameter | values |Description|
|--------- | :------:| --------| 
| `mobileView`| true\|false | Sends TRUE if the screen width is smaller than `minWidth`.|  
| `portraitView` | true\|false | TRUE = portrait, FALSE = landscape arrangement.|  
<br>  



Use the class in VanillaJs:
```javascript
import ResponsiveViewTrigger from 'responsive-view-trigger';

const minWidth = 1024;
new ResponsiveViewTrigger(minWidth, mobileViewHandler);

function mobileViewHandler(mobileView: boolean, portraitView: boolean){
  // add or remove CSS class names and do the other things...
}
```

In case of React : 
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
    new ResponsiveViewTrigger(minWidth, this.mobileViewHandler);
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
Typescript type import option :
```javascript
import {mobileStatus} from 'responsive-view-trigger';

myState = {
  ...
} & mobileStatus
```
## Personal note:
Consider to use @media queries, it gives you more possibilities.


<br><br>
>Written by: __Attila Kiss__, [e-LET Kft](https://e-let.hu), Hungary  ( GitHub: [kissato70](https://github.com/kissato70) )

 > Licence:  MIT

> Report issues [here](https://github.com/kissato70/dist-upload-s3/issues).

<br>  

## Future version enhancement plans:
- Multi-step triggering (gives you several steps of screen resize events)
- Screen turning triggering (fires an event at a certain angle)
## Support the project >>> [Donation](https://bit.ly/kissato70_paypal_donate)  
_Please support the further releases, if you like this class! **Thank you!**_  
<br/>