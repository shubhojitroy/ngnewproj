import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';



import { ConvertToSpacesPipe } from '../shared/pipe/convert-to-spaces.pipe';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    RouterModule.forChild([


    ]),
    FormsModule,
    SharedModule,
  ],
  declarations: [

    ConvertToSpacesPipe
  ]

})
export class ProductModule { }
