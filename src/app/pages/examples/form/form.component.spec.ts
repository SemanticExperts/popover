import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PageExamplesFormComponent } from './form.component';
import {MdePopoverModule} from "@material-extended/mde";

describe('PageExamplesFormComponent', () => {
  let component: PageExamplesFormComponent;
  let fixture: ComponentFixture<PageExamplesFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PageExamplesFormComponent ],
      imports: [
        MdePopoverModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageExamplesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
