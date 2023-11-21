import { ComponentFixture, TestBed } from '@angular/core/testing';
import { first } from 'rxjs';
import { post } from 'src/app/model/post';
import { RouterTestingModule } from '@angular/router/testing';
import { PostComponent } from './post.component';
import { By } from '@angular/platform-browser';

describe('PostComponent', () => {

  // fixture is a wrapper for a component and its template.
  let fixture: ComponentFixture<PostComponent>;
  let comp: PostComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostComponent],
      imports: [RouterTestingModule], // without this line anchor  element test case failed and give an error 
    });

    fixture = TestBed.createComponent(PostComponent);
    comp = fixture.componentInstance;
  })

  // this is normal test case , there is no relation beetween before each and this test case
  it('should raise an event when delete post is click', () => {
    const com = new PostComponent();
    const post: post = { id: 1, body: "this is body", title: "this is title" }
    com.post = post;
    com.delete.pipe(first()).subscribe((selectedPost) => {
      expect(selectedPost).toEqual(post);
    });
    com.OnDeletePost(new MouseEvent('click'));
  });


  // same as above test case but using TestBed 
  it('should raise an event when delete post is click', () => {
    const post: post = { id: 1, body: "this is body", title: "this is title" }
    comp.post = post;
    comp.delete.pipe(first()).subscribe((selectedPost) => {
      expect(selectedPost).toEqual(post);
    });
    comp.OnDeletePost(new MouseEvent('click'));
  });

  // this is test case using TestBed
  it('should create post component using TestBed', () => {
    expect(comp).toBeDefined();
  })

  //   Angular creates a DebugElement tree that wraps the native elements for the runtime platform. 
  // The nativeElement property unwraps the DebugElement and returns the platform-specific element object.
  it('should render he post title in the  anchor  element By native element', () => {
    const post: post = { id: 1, body: "this is body", title: "this is title" };
    comp.post = post;
    fixture.detectChanges();
    const postElement = HTMLElement = fixture.nativeElement;
    const a = postElement.querySelector('a');
    expect(a?.textContent).toContain(post.title);
  })


  it('should render he post title in the  anchor  element by debug element', () => {
    const post: post = { id: 1, body: "this is body", title: "this is title" };
    comp.post = post;
    fixture.detectChanges();
    const postDebugElement = fixture.debugElement;
    const aElement: HTMLElement = postDebugElement.query(By.css('a')).nativeElement;
    expect(aElement.textContent).toContain(post.title);
  })


});
