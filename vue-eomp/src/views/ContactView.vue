<template>
      <h1>{{ information }}</h1>
    <div class="form">
            <form  action="https://formspree.io/f/mjvqjgkr" method="POST">
              <div class="mb-3">
                <label for="exampleInputName1" class="form-label">Full name</label>
                <input type="name" class="form-control" id="exampleInputname1" aria-describedby="nameHelp" required>
              </div>
              <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="Email" required>
            </div>
            <div class="mb-3">
              <label for="exampleInputText1" class="form-label">Message</label>
              <input type="text" class="form-control" id="exampleInputText1" name="message" required>
            </div>
            <button id="send" type="submit" class="btn btn-primary">Send</button>
          </form>
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
.form {
  display: flex;
  width: 250px;
  box-sizing: border-box;
  margin: auto;
  background-color: black;
  border: 2px solid #00FF00;
  padding-bottom: 80px;
}

.form label {
  text-align: center;
}

.form-label {
  margin-left: 15px;
  color: #00FF00;
  font-size: 20px;
}

.form-control {
  margin-left: 12px;
  margin-bottom: 20px;
}

input {
  color: #00FF00;
  background-color: #000;
  outline: none;
  font-size: 15px;
  padding: 10px;
  border: 2px solid #00FF00;
}
form#send {
  padding: 20px;
  width: 100%;
  outline: none;
  border: 2px solid black;
}

#send:hover {
  background-color: #00FF00;
  color: black;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 0 10px #00FF00;
}
</style>