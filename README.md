# Angular Popover

[![npm version](https://badge.fury.io/js/@jaguards%2Fmaterial-extended-mde.svg)](https://badge.fury.io/js/@jaguards%2Fmaterial-extended-mde)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fjoejordanbrown%2Fpopover.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fjoejordanbrown%2Fpopover?ref=badge_shield)

Forked version of https://github.com/joejordanbrown/popover with add of support for new Angular versions.

#### Versions


| Angular version | Popover version |
|-----------------|-----------------|
| v19             | 19.x            |
| v18             | 18.x            |
| v17             | 17.x            |
| v16             | 16.x            |
| v15             | 15.x            |
| v9 - v14        | 3.0.3           |


#### Links
[Popover Demo](https://uixd.co.uk/open-source-software/material-extended/demo) | [StackBlitz Template](https://stackblitz.com/edit/mde-popover)

### Project status
Angular Popover is production ready.

This was originally created as an example for a `@angular/material` issue feature request.
Issue can be found at [angular/material2#2691](https://github.com/angular/material2/issues/2691)

If you'd like to contribute please create an issue or pull request.



### Examples

**Material theme picker**

[![Material theme picker](https://media.giphy.com/media/jsxheZJXN1346GD5St/giphy.gif)](https://stackblitz.com/edit/angular-popover-demo)

**Standard popover**

![image](https://cloud.githubusercontent.com/assets/10200431/22394189/02e9b21e-e511-11e6-9f91-c6b470a6b212.png)


![image](https://cloud.githubusercontent.com/assets/10200431/22394186/e21a235c-e510-11e6-9cde-948b1a4382bc.png)

**Google+ style popover**

![image](https://cloud.githubusercontent.com/assets/10200431/22397870/4f27ddba-e573-11e6-943f-2d737b59d39e.png)





### Installation
Install npm package using:

`yarn add @jaguards/material-extended-mde`
or
`npm install @jaguards/material-extended-mde`

Install required packages @angular/cdk

`yarn add @angular/cdk`
or
`npm install @angular/cdk`

### Initial setup
The CDK overlays depend on a small set of structural styles to work correctly. If you're using Angular Material, these styles have been included together with the theme, otherwise if you're using the CDK on its own, you'll have to include the styles yourself. You can do so by importing the prebuilt styles in your global stylesheet:

@import '~@angular/cdk/overlay-prebuilt.css';

### Import module

app.module.ts
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MdePopoverModule } from '@jaguards/material-extended-mde';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MdePopoverModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### Todo
1. A design document needs creating to finalise requirements and API specifications.
Once a document is created the component can be refactored and released as beta for testing.
2. Refactor now that @angular/cdk is released.


### Available features

| Feature | Notes                                                                                | Docs                                                                        |
|---------|--------------------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| popover | In-progress ([popover demo](https://uixd.co.uk/open-source-software/material-extended/demo)) | [Docs](https://github.com/material-extended/mde/blob/master/projects/material-extended/mde/src/lib/popover/popover.md) |


### Issues

Please report bugs and issues [here](https://github.com/material-extended/mde/issues).

### 

### License
MIT © [Joe Jordan Brown](https://github.com/joejordanbrown)

[Angular Popover by UIXD](https://uixd.co.uk)


[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fjoejordanbrown%2Fpopover.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fjoejordanbrown%2Fpopover?ref=badge_large)
