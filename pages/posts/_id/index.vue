<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="post-title">{{ loadedPost.title }}</h1>
      <div class="post-details">
        <div class="post-detail">{{ loadedPost.updatedDate }}</div>
        <div class="post-detail">{{ loadedPost.author }}</div>
      </div>
      <p class="post-content">{{ loadedPost.content }}</p>
    </section>
    <section class="post-feedback">
      Let me know what you think about the post, send a mail to
      <a
        href="mailto:feedback@my-awesome-domainzz.com"
      >feedback@my-awesome-domainzz.com</a>
    </section>
  </div>
</template>

<script>
export default {
  asyncData(context, callback) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          loadedPost: {
            id: "1",
            title: "First post (ID: " + context.params.id + ")",
            previewText: "This is our first post",
            author: "Anon",
            updatedDate: new Date(),
            content:
              "Some dummy text which is definitely not the preview text.",
            thumbnail:
              "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg",
            text: "just some text"
          }
        });
      }, 1000);
    })
    then((data) => {

    })
    .catch((e) => {
      context.error(new Error());
    })
  }
};
</script>


<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>
