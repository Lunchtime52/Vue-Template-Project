<template>
  <div class="my-4 section-padding">
    <form class="bg-white p-5 rounded-lg shadow-md col-md-8 mx-auto">
      <h2 class="mb-4">{{ title }}</h2>

      <div class="mb-3">
        <div>
          <div>
          <input
            type="text"
            id="name"
            v-model="name"
            placeholder="Your Name"
          />
          </div>
        </div>
      </div>

      <div class="mb-3">
        <div>
          <div>
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="Your Email"
          />
          </div>
        </div>
      </div>

      <div class="mb-3">
        <div>
          <div>
          <textarea
            id="message"
            v-model="message"
            rows="4"
            placeholder="Your Message"
          ></textarea>
          </div>
        </div>
      </div>
      <button type="submit" class="btn btn-primary btn-block">
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
