import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PageExamplesBuilderComponent } from './builder.component';
import {MdePopoverModule} from "@material-extended/mde";
import {MatButtonToggleModule} from "@angular/material/button-toggle";

describe('PageExamplesBuilderComponent', () => {
  let component: PageExamplesBuilderComponent;
  let fixture: ComponentFixture<PageExamplesBuilderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PageExamplesBuilderComponent ],
      imports: [
        MatButtonToggleModule,
        MdePopoverModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageExamplesBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
