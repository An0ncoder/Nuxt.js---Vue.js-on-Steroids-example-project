<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from "@/components/Posts/PostList";

export default {
  components: {
    PostList
  },
  data() {
    return {
      loadedPosts: [
        { id:'1',  title: "First post", previewText: "This is our first post", thumbnail: 'https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg', text: 'just some text' },
        { id:'2',  title: "Second post", previewText: "This is our second post", thumbnail: 'https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg', text: 'just some text' },
        { id:'3',  title: "Third post", previewText: "This is our third post", thumbnail: 'https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg', text: 'just some text' }
      ]
    }
  }
};
</script>

<style>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url("~assets/images/coffee.jpg");
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}
</style>






