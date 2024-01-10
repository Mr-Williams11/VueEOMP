<template>
  <div class="contact-container">
    <div class="contact-info">
      <span>{{ information }}</span>
      <div>
        <ul>
          <li>Email: joelwilliams742@gmail.com</li>
          <li>Phone: 062 771 3590</li>
        </ul>
      </div>
    </div>
    <div class="contact-form">
      <form action="https://formspree.io/f/mjvqjgkr" method="POST">
        <div class="form-group">
          <label for="exampleInputName1" class="form-label">Full name:</label>
          <input type="name" class="form-control" id="exampleInputname1" aria-describedby="nameHelp" required>
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1" class="form-label">Email:</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="Email" required>
        </div>
        <div class="form-group">
          <label for="exampleInputText1" class="form-label">Message:</label>
          <textarea class="form-control" id="exampleInputText1" name="message" required></textarea>
        </div>
        <button id="send" type="submit" class="btn btn-primary">Send</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    information() {
      return this.$store.state.Contact;
    },
  },
  mounted() {
    this.$store.dispatch('fetchData');
  },
};
</script>

<style>
.contact-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
}

.contact-info {
  text-align: center;
}

.contact-info span {
  font-size: 50px;
  text-decoration: underline;
  padding-right: 20px;
}

.contact-info ul {
  list-style: none;
  padding: 0;
}

.contact-info li {
  font-size: 20px;
  margin-bottom: 10px;
}

.contact-form {
  width: 400px;
  box-sizing: border-box;
}

.form-group {
  margin-bottom: 20px;
}

.form-label {
  color: black;
  font-size: 18px;
  margin-bottom: 5px;
  display: block;
}

.form-control {
  width: 100%;
  padding: 10px;
  font-size: 16px;
}

#send {
  padding: 10px;
  width: 100%;
  outline: none;
  border: 2px solid black;
  background-color: black;
  color: white;
  font-weight: bold;
  cursor: pointer;
}

#send:hover {
  background-color: #1E90FF;
}
</style>
