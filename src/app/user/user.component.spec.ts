import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { UserService } from './user.service';

describe('UserComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserComponent ]
    })
  });

  it('should create the user', () => {
    let fixture=TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should use user name from userService',()=>{
    let fixture=TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let userService=fixture.debugElement.injector.get(UserService);
    fixture.detectChanges();
    expect(userService.user.name).toEqual(app.user.name);
  })

  it('it should display user name if logged in',()=>{
    let fixture=TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let userService=fixture.debugElement.injector.get(UserService);
    app.isLoggedIn=true
    fixture.detectChanges();
    let compile=fixture.debugElement.nativeElement;
    expect(compile.querySelector('p').textContent).toContain(app.user.name);  
  })
  it('it should not  display user name if not logged in',()=>{
    let fixture=TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let userService=fixture.debugElement.injector.get(UserService);
    fixture.detectChanges();
    let compile=fixture.debugElement.nativeElement;
    expect(compile.querySelector('p').textContent).not.toContain(app.user.name);  
  })

});
