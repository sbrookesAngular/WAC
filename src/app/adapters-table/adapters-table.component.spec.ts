import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdaptersTableComponent } from './adapters-table.component';

describe('AdaptersTableComponent', () => {
  let component: AdaptersTableComponent;
  let fixture: ComponentFixture<AdaptersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdaptersTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdaptersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});