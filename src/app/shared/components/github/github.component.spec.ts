import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GithubComponent } from './github.component';
import {MdePopoverModule} from '@jaguards/material-extended-mde';
import {RouterTestingModule} from '@angular/router/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('GithubComponent', () => {
  let component: GithubComponent;
  let fixture: ComponentFixture<GithubComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [GithubComponent],
      imports: [
        RouterTestingModule,
        MdePopoverModule
      ],
      providers: [provideHttpClient(withInterceptorsFromDi())]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
