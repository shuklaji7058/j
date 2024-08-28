function toggle(e) {
  e.target.classList.toggle("danger");
}

const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post two", body: "This is post two" },
];

function createPost(post, cb) {
  setTimeout(() => {
    posts.push(post);
    cb();
  }, 2000);
}

function getPosts() {
  setTimeout(() => {
    posts.forEach(function (post) {
      const div = document.createElement("div");
      div.innerHTML = `<strong>${post.title}</strong>-${post.body}`;
      document.querySelector("#posts").appendChild(div);
    });
  }, 1000);
}

createPost({ title: "Post three", body: "This is post three" }, getPosts);
