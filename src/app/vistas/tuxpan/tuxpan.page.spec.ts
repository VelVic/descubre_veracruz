import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TuxpanPage } from './tuxpan.page';

describe('TuxpanPage', () => {
  let component: TuxpanPage;
  let fixture: ComponentFixture<TuxpanPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TuxpanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
