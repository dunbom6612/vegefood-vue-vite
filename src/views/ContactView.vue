<template>
  <DefaultLayout>
    <section class="ftco-section contact-section bg-light">
      <div class="container">
        <div class="row d-flex mb-5 contact-info">
          <div class="w-100"></div>
          <div class="col-md-3 d-flex">
            <div class="info bg-white p-4">
              <p>
                <span>Address:</span> 198 West 21th Street, Suite 721 New York
                NY 10016
              </p>
            </div>
          </div>
          <div class="col-md-3 d-flex">
            <div class="info bg-white p-4">
              <p>
                <span>Phone:</span>
                <a href="tel://1234567920">+ 1235 2355 98</a>
              </p>
            </div>
          </div>
          <div class="col-md-3 d-flex">
            <div class="info bg-white p-4">
              <p>
                <span>Email:</span>
                <a href="mailto:info@yoursite.com">info@yoursite.com</a>
              </p>
            </div>
          </div>
          <div class="col-md-3 d-flex">
            <div class="info bg-white p-4">
              <p><span>Website</span> <a href="#">yoursite.com</a></p>
            </div>
          </div>
        </div>
        <div class="row block-9">
          <div class="col-md-6 order-md-last d-flex">
            <form @submit.prevent="onSubmit" class="bg-white p-5 contact-form">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Your Name"
                  v-model="name"
                />
                <p v-if="this.nameError" class="error">{{ this.nameError }}</p>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Your Email"
                  v-model="email"
                />
                <p v-if="this.emailError" class="error">
                  {{ this.emailError }}
                </p>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Subject"
                  v-model="subject"
                />
              </div>
              <div class="form-group">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="7"
                  maxlength="500"
                  class="form-control"
                  placeholder="Message"
                  v-model="message"
                ></textarea>
              </div>
              <div class="form-group">
                <input
                  type="submit"
                  value="Send Message"
                  class="btn btn-primary py-3 px-5"
                />
              </div>
            </form>
          </div>

          <div class="col-md-6 d-flex">
            <div id="map" class="bg-white"></div>
          </div>
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '../components/DefaultLayout.vue';

export default {
  name: 'Contact',
  components: { DefaultLayout },
  data() {
    return {
      name: '',
      email: '',
      subject: '',
      message: '',
      nameError: '',
      emailError: ''
    };
  },
  methods: {
    async onSubmit() {
      if (!this.name) {
        this.nameError = 'Name is required';
      }

      if (!this.email) {
        this.emailError = 'Name is required';
      }

      if (!this.emailError && !this.nameError) {
        const contact = {
          name: this.name,
          email: this.email,
          subject: this.subject,
          message: this.message
        };
        try {
          const response = await this.axios.post('/contact', contact);
          this.resetField();
          alert('Thanks for your contact.');
        } catch (error) {
          alert('Failed to save your contact.');
        }
      }
    },

    resetField() {
      this.name = '';
      this.email = '';
      this.subject = '';
      this.message = '';
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
