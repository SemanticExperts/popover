import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PageExamplesComponent } from './examples.component';
import {MdePopoverModule} from "@brandonfl/material-extended-mde";
import {HttpClientModule} from "@angular/common/http";
import {RouterTestingModule} from "@angular/router/testing";
import {MatButtonModule} from "@angular/material/button";

describe('PageExamplesComponent', () => {
  let component: PageExamplesComponent;
  let fixture: ComponentFixture<PageExamplesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PageExamplesComponent ],
      imports: [
        MatButtonModule,
        MdePopoverModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
