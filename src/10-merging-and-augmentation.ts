import * as React from 'react';
/*
  Module augmentation
*/

// TODO: augment the module 'react', the 'Component<P, S>' interface with the property
//  hiddenProperty: string;


class BadClass extends React.Component {
  constructor(props: any) {
    super(props);

    // Uncomment this line to validate your augmentation
    // this.hiddenProperty = 'lol';
  }
}

/*--------------------------------------------------------------------*/


// TODO: augment the global Array type with the property
//  isValid: boolean;



// Uncomment this line to validate your augmentation
// [].isValid=false;

/*======================================================================================================*/

/*
  Declaration Merging
*/
// just demonstrate with interface

/*======================================================================================================*/

export {};
