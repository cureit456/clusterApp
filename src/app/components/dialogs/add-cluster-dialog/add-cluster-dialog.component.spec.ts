import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClusterDialogComponent } from './add-cluster-dialog.component';

describe('AddClusterDialogComponent', () => {
  let component: AddClusterDialogComponent;
  let fixture: ComponentFixture<AddClusterDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddClusterDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddClusterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
