<template>
  <section class="post-list">
    <PostPreview
      id="1"
      thumbnail="https://c.pxhere.com/images/34/c8/619932b8b89cf09feb0278e64624-1589287.jpg!d"
      title="Hello there!"
      previewText="This is my first post!"
      text="An example text."
    />
    <PostPreview
      id="2"
      thumbnail="https://c.pxhere.com/images/34/c8/619932b8b89cf09feb0278e64624-1589287.jpg!d"
      title="Hello there!"
      previewText="This is my second post!"
      text="An example text."
    />
    <PostPreview
      id="3"
      thumbnail="https://c.pxhere.com/images/34/c8/619932b8b89cf09feb0278e64624-1589287.jpg!d"
      title="Hello there!"
      previewText="This is my first post!"
      text="An example text."
    />
  </section>
</template>

<script>
import PostPreview from "@/components/Posts/PostPreview";

export default {
  components: {
    PostPreview
  }
};
</script>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>

