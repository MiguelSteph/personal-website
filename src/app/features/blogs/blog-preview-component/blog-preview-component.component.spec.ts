import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPreviewComponentComponent } from './blog-preview-component.component';

describe('BlogPreviewComponentComponent', () => {
  let component: BlogPreviewComponentComponent;
  let fixture: ComponentFixture<BlogPreviewComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPreviewComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPreviewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
