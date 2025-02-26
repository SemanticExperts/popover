import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SupportComponent } from './support.component';
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import {RouterTestingModule} from "@angular/router/testing";
import {MdePopoverModule} from "@jaguards/material-extended-mde";

describe('SupportComponent', () => {
  let component: SupportComponent;
  let fixture: ComponentFixture<SupportComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    declarations: [SupportComponent],
    imports: [RouterTestingModule,
        MdePopoverModule],
    providers: [provideHttpClient(withInterceptorsFromDi())]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
