<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm @submit="onSubmitted" />
    </section>
  </div>
</template>

<script>
import Axios from "axios";
import AdminPostForm from "@/components/admin/AdminPostForm";

export default {
  layout: "admin",
  components: {
    AdminPostForm
  },
  methods: {
    onSubmitted(postData) {
      Axios.post("https://nuxt-blog-f461c.firebaseio.com/posts.json", {
        ...postData,
        updatedDate: Date.now()
      })
        .then(result => console.log(result))
        .catch(e => console.log(e));
    }
  }
};
</script>

<style <style scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>
