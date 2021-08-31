import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySongsListComponent } from './my-songs-list.component';

describe('MySongsListComponent', () => {
  let component: MySongsListComponent;
  let fixture: ComponentFixture<MySongsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySongsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MySongsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
