import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'movie-search'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('movie-search');
  });

  it('should render heading', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#heading')?.textContent).toContain('Which movie are you looking for?');
  });

  // it('should', async(() => {
  //   spyOn(AppComponent, 'onSubmit');
  //   const fixture = TestBed.createComponent(AppComponent);
  //   let button = fixture.debugElement.nativeElement.querySelector('button');
  //   button.click();
  
  //   fixture.whenStable().then(() => {
  //     expect(AppComponent.onEditButtonClick).toHaveBeenCalled();
  //   });
  // }));


});
