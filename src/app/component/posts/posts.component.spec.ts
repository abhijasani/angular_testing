import { assertInInjectionContext, Component, Input } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { post } from "src/app/model/post"
import { PostService } from "src/app/services/Post/post.service";
import { PostsComponent } from "./posts.component";

describe('posts components', () => {
    let POSTS: post[];
    let component: PostsComponent;
    let mockPostServices: any;

    // posts component have one child component is called post so how to test child component 
    // for that create fake component 
    @Component({
        selector: 'app-post',
        template: '<div></div>',
    })

    class FakePostComponent {
        @Input() post!: post;
    }
    beforeEach(() => {
        POSTS = [
            { id: 0, body: "this is body", title: "this is title" },
            { id: 1, body: "this is body 1", title: "this is title 1" },
            { id: 2, body: "this is body 2", title: "this is title 2" },
        ];

        mockPostServices = jasmine.createSpyObj(['getpost', 'deletepost']);

        TestBed.configureTestingModule({
            declarations: [PostsComponent, FakePostComponent],
            providers: [
                PostsComponent,
                {
                    provide: PostService,
                    useValue: mockPostServices,
                },
            ],
        });



        component = TestBed.inject(PostsComponent);




        // this is example of jasmine createSPy test case 
        //  mockPostServices = jasmine.createSpyObj(['getpost', 'deletepost']);
        // component = new PostsComponent(mockPostServices); // befor we did like this when TestBed Not use in testing
    });



    describe('delete', () => {

        beforeEach(() => {
            mockPostServices.deletepost.and.returnValue(of(true));
            component.posts = POSTS;
        })
        it('should delete the selected post from he posts', () => {

            component.delete(POSTS[1]);
            expect(component.posts.length).toBe(2);
        });

        it('should delete actual value or not ', () => {
            component.delete(POSTS[1]);

            for (let post of component.posts) {
                expect(post).not.toBe(POSTS[1]);
            }
        })

        it('should call delete method in post services only once', () => {
            component.delete(POSTS[1]);
            expect(mockPostServices.deletepost).toHaveBeenCalledTimes(1);
        })


    });

});