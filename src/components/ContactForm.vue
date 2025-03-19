<template>
  <div class="d-flex justify-content-center my-4">
    <form class="bg-white p-8 rounded-lg shadow-md w-75">
      <h2 class="mb-4 text-center">{{ title }}</h2>

      <div class="mb-3 row">
        <!-- <label for="name" class="col-sm-2 col-form-label text-start"
          >Name</label
        > -->
        <div class="col-lg-8 mx-auto">
          <input
            type="text"
            id="name"
            v-model="name"
            class="form-control"
            placeholder="Your Name"
          />
        </div>
      </div>

      <div class="mb-3 row">
        <!-- <label for="email" class="col-sm-2 col-form-label text-start"
          >Email</label
        > -->
        <div class="col-lg-8 mx-auto">
          <input
            type="email"
            id="email"
            v-model="email"
            class="form-control"
            placeholder="Your Email"
          />
        </div>
      </div>

      <div class="mb-3 row">
        <!-- <label for="message" class="col-sm-2 col-form-label text-start"
          >Message</label
        > -->
        <div class="col-lg-8 mx-auto">
          <textarea
            id="message"
            v-model="message"
            class="form-control"
            rows="4"
            placeholder="Your Message"
          ></textarea>
        </div>
      </div>
      <button type="submit" class="btn btn-primary d-grid col-6 mx-auto">
        {{ buttonText }}
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
  props: {
    title: {
      type: String,
      required: true,
    },
    buttonText: {
      type: String,
      required: true,
    },
    buttonHref: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
};
</script>
