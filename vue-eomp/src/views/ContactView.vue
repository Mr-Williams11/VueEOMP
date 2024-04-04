<template>
  <h2>Contact Me:</h2>
  <div class="contact-container">
    <div class="contact-info">
      <div>
        <ul>
          <li>Email: joelwilliams742@gmail.com</li>
          <li>Phone: 062 771 3590</li>
          <li>Address: Maitland Garden Village</li>
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

</script>

<style scoped>
.contact-container {
  display: flex;
  justify-content: flex-end; /* Align everything to the right */
  align-items: center;
  position: relative;
  left: 500px;
}

.contact-info {
  text-align: left; /* Align text to the right */
  color: white;
  padding: 30px;
}

h2{
  position: relative;
  -webkit-text-stroke: 4px black;
  left: 0px;
  transform: rotate(-40deg);
  font-size: 6em;
  top: 45px;
}

.contact-info ul {
  list-style: none;
  padding: 0;
  margin-right: 20px; /* Adjust margin */
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
  color: white;
  font-size: 25px;
  margin-bottom: 5px;
  display: block;
  text-align: left; /* Align labels to the right */
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
  background-color: lightblue;
  color: black;
  font-weight: bold;
  cursor: pointer;
}

#send:hover {
  background-color: #1E90FF;
}

@media screen and (min-width: 480px) and (max-width: 720px) {
  h2{
  font-size: 2.5em;
  top: 55px;
  -webkit-text-stroke: 2px black;
}

  .contact-container {
    flex-direction: column;
    align-items: center;
    left: 200px;
    top: 50px;
  }

  .contact-info {
    padding: 3px; /* Adjusted padding */
  }

  .contact-info li {
    font-size: 11px; /* Further reduced font size */
  }

  .form-label {
    font-size: 12px; /* Further reduced font size */
  }

  .form-control {
    font-size: 12px; /* Further reduced font size */
  }
  .form-group {
  margin-bottom: 5px;
  }

  #send {
    font-size: 10px; /* Adjusted font size */
  }
}

/* Media query for 320px */
@media (min-width: 300px) and (max-width: 460px) {
  h2{
  font-size: 2em;
  top: 0px;
  transform: rotate(0deg);
  -webkit-text-stroke: 2px black;
}

  .contact-container {
    flex-direction: column;
    align-items: center;
    left: 45px;
    top: 50px;
    width: 210px;
  }

  .contact-info {
    padding: 2px;
  }
  .contact-info li {
    font-size: 8px;
    text-align: right;

  }
  .contact-form{
    width: 270px;
  }
  
  .form-label {
    font-size: 12px;
    text-align: right;
  }

  .form-control {
    font-size: 12px;
  }
  .form-group {
  margin-bottom: 5px;
  }

  #send {
    font-size: 10px;
    width: 145px;
  }
}

</style>
