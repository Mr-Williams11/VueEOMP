<template>
  <div class="contact-container">
    <div class="contact-info">
      <span>Contact Me:</span>
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

<style>
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

.contact-info span {
  font-size: 50px;
  text-decoration: underline;
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

@media (max-width: 300px) {
  .contact-container {
    flex-direction: column;
    align-items: stretch;
    height: auto;
    justify-content: center; /* Align items to the center for smaller screens */
  }

  .contact-info span {
    font-size: 30px;
  }

  .contact-info li {
    font-size: 16px;
  }

  .contact-form {
    width: 100%;
  }

  .form-label {
    font-size: 13px;
    text-align: left; /* Align labels to the left for smaller screens */
  }

  .form-control {
    font-size: 14px;
  }

  #send {
    font-size: 16px;
  }
}

</style>
