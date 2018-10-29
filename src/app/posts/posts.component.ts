import { Http } from '@angular/http';
import { Component } from '@angular/core';

@Component({
	selector: 'posts',
	templateUrl: './posts.component.html',
	styleUrls: ['./posts.component.css']
})
export class PostsComponent {
	posts: any[];
	private url = 'http://jsonplaceholder.typicode.com/posts';

	constructor(private http: Http) {
		http.get(this.url).subscribe(response => {
			this.posts = response.json();
			//console.log(this.posts);
		});
	}

	createPost(inputTitle: HTMLInputElement) {
		let post = { title: inputTitle.value }
		//console.log(JSON.stringify(post));
		this.http.post(this.url, JSON.stringify(post))
			.subscribe(response => {
				post['id'] = response.json().id;
				this.posts.unshift(post);
				//console.log(this.posts);
				//console.log(post);
			})

		inputTitle.value = '';
	}

	updatePost(post) {
		//this.http.put(this.url, JSON.stringify(post))
		this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }))
			.subscribe(response => {
				console.log(response.json());
			});
	}

	deletePost(post){
		this.http.delete(this.url + '/' + post.id)
			.subscribe(response => {
				let index = this.posts.indexOf(post);
				this.posts.splice(index,1);
			})
	}
}
