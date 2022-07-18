import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdapterSettingsComponent } from './adapter-settings.component';

describe('AdapterSettingsComponent', () => {
  let component: AdapterSettingsComponent;
  let fixture: ComponentFixture<AdapterSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdapterSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdapterSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
