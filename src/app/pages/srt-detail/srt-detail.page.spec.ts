import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SrtDetailPage } from './srt-detail.page';

describe('SrtDetailPage', () => {
  let component: SrtDetailPage;
  let fixture: ComponentFixture<SrtDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SrtDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
