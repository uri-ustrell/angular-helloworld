
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { PostService } from './../services/post.service'

@Component({
	selector: 'posts',
	templateUrl: './posts.component.html',
	styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
	posts: any[];
	

	constructor(private service: PostService) {
	}

	ngOnInit(){
		this.service.getPosts()
			.subscribe(response => {
				this.posts = response.json();
			//console.log(this.posts);
			}, error => {
				alert('getPosts(): Anunexpected error accurred');
				console.log(error.json());
			});
	}

	createPost(inputTitle: HTMLInputElement) {
		let post = { title: inputTitle.value }
		//console.log(JSON.stringify(post));
		this.service.insertPost(inputTitle)
			.subscribe(response => {
				post['id'] = response.json().id;
				this.posts.unshift(post);
				//console.log(this.posts);
				//console.log(post);
			}, error => {
				alert('createPost(): Anunexpected error accurred');
				console.log(error.json());
			})

		inputTitle.value = '';
	}

	updatePost(post) {
		//this.http.put(this.url, JSON.stringify(post))
		this.service.updatePost(post)
			.subscribe(response => {
				console.log(response.json());
			}, error => {
				alert('updatePost(): An unexpected error has occurred');
				console.log(error.json());
			});
	}

	deletePost(post){
		this.service.deletePost(post.id)
			.subscribe(response => {
				let index = this.posts.indexOf(post);
				this.posts.splice(index,1);
			}, error => {
				alert('deletePost(): An unexpected error has occurred');
				console.log(error.json());
			});
	}
}
