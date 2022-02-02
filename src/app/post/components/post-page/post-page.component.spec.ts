import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { BlogService } from 'src/app/shared/services/blog.service';
import { HttpService } from 'src/app/shared/services/http.service';
import { SnackBarService } from 'src/app/shared/services/snack-bar.service';
import { PostPageComponent } from './post-page.component';

describe('PostPageComponent', () => {
  let component: PostPageComponent;
  let fixture: ComponentFixture<PostPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [HttpClientTestingModule, RouterTestingModule, MaterialModule],
      declarations: [PostPageComponent],
      providers: [
        SnackBarService,
        {
          provide: BlogService,
          useValue: {
            filterPostData: () => {},
          },
        },
        {
          provide: HttpService,
          useValue: {
            deletePostById: () => {
              return of('');
            },
            removeComment: () => {
              return of('');
            },
            addComment: () => {
              return of('');
            },
            getPostById: () => {
              return of('');
            },
            getTags: () => {
              return of('');
            },
          },
        },
        {
          provide: AuthService,
          useValue: {
            isLoggedIn: () => {
              return of('');
            },
            user: () => {
              return of('');
            },
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
