import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioProjectPreviewComponent } from './portfolio-project-preview.component';

describe('PortfolioProjectPreviewComponent', () => {
  let component: PortfolioProjectPreviewComponent;
  let fixture: ComponentFixture<PortfolioProjectPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioProjectPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioProjectPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
