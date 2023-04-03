<template>
  <div class="col-lg-4">
    <a class="portfolio-item" :href="'#portfolioModal' + id" data-toggle="modal">
      <span class="caption">
        <span class="caption-content">
          <h4>{{title}}</h4>
          <p class="mb-0">{{description}}</p>
        </span>
      </span>
      <img class="img-fluid portfolio-img" :src="image" :alt="title">
    </a>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  }
}
</script>