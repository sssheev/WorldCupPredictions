

import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatInputModule, MatFormFieldModule,MatCardModule} from '@angular/material'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { DataModelService } from './datamodel/datamodel-service';
@NgModule({
  declarations: [
  ],
  imports: [
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    NoopAnimationsModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [
      DataModelService,
    ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatCardModule,
    HttpClientModule,
]
})
export class SharedModule { }
