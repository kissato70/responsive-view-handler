# Responsive view change handler class for Javascript
In certain cases you may want to have more control than just use the CSS @media queries. This class makes it possible to have a callback function fired in case of change in the view (resize or orientation change).  
The callback function will be called ONLY if the orientation has changed or the screen size has crossed the given width parameter. 

Input (constructor) parameters:
|parameter | values |Description|
|--------- | :------:| --------|
|`minWidth`| pixels | The screen width, where the event fires. |
|`mobileViewHandler`| function | A callback function for the event of resize trigger. |

The two return parameters are:  
|parameter | values |Description|
|--------- | :------:| --------| 
| `mobileView`| true\|false | Sends TRUE if the screen width is smaller than `minWidth`.|  
| `portraitView` | true\|false | TRUE = portrait, FALSE = landscape arrangement.|  
<br>  



Use the class in VanillaJs:
```javascript
import ResponsiveViewHandler from 'responsive-view-handler';

const minWidth = 1024;
new ResponsiveViewHandler(minWidth, mobileViewHandler);

function mobileViewHandler(mobileView: boolean, portraitView: boolean){
  // add or remove CSS class names and do the other things...
}
```

In case of React : 
```javascript
import ResponsiveViewHandler from 'responsive-view-handler';

export default class myClassComponent extends Component{
  
  construct (props) {
    super(props);
    ...
    this.mobileViewHandler = this.mobileViewHandler.bind(this);
  }

  componentDidMount() {
    const minWidth = 1024;
    new ResponsiveViewHandler(minWidth, this.mobileViewHandler);
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
## Please note:
For normal usage it is always possible to use @media queries, it gives you more possibilities.


<br><br>
>Written by: __Attila Kiss__, [e-LET Kft](https://e-let.hu), Hungary  ( GitHub: [kissato70](https://github.com/kissato70) )

 > Licence:  MIT

> Report issues [here](https://github.com/kissato70/dist-upload-s3/issues).

<br>  

## Support the project >>> [Donation](https://bit.ly/kissato70_paypal_donate)  
_Please support the further releases, if you like this script! **Thank you!**_  
<br/>