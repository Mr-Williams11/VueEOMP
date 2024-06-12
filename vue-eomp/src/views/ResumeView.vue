<template>
  <h2>Experience:</h2>
  <div class="resume-container" ref="resumeContainer">
    <div class="resume-section">
      <div class="resume-task">
        <h3 class="task-title">Education</h3>
        <ul class="task-details">
          <h4><b>Schools:</b></h4>
              <li>Life Choices Academy: September 2023 - March 2024</li>
              <li>Pinelands High School: 2016 - 2020</li>
              <li>Pinelands Primary School: 2008 - 2015</li>
          <h4><b>Skills:</b></h4>
              <li>HTML  |  CSS  | Bootstrap  |  Javascript |  Node.JS  |  MySQL  |  Vue.Js  |  GitHub  |  Linux  </li>
          <h4><b>Badges:</b></h4>
              <li>Operating system basics</li>
              <li>LC Scrum Challenge</li>
              <li>Junior Cybersecurity Analyst</li>
              <li>Ethical Hacker</li>
            </ul>
      </div>
    </div>
    <div class="resume-section">
      <div class="resume-task">
        <h3 class="task-title">Work Experience</h3>
        <ul class="task-details">
          <li>
            <h4>Life Choices Studio:</h4> April 2024 - Current
          </li>
          <li>
            <h4>Department of Cultural Affairs and Sport (Internal Control):</h4>April 2022 - March 2023
          </li>
          <li>
            <h4>Zone Fitness:</h4> May 2018 - September 2018
          </li>
          <li>
            <h4>NMC:</h4> March 2017 - April 2017
          </li>
</ul>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
h2{
  position: relative;
  -webkit-text-stroke: 4px black;
  left:0px;
  transform: rotate(-40deg);
  font-size: 6em;
  top: 35px;
}

h3{
  color: black;
  font-size: 60px;
  font-weight: bold;
}

.resume-container {
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  display: flex;
}

.fade-in {
  opacity: 1;
}

.resume-section {
  display: flex;
  flex-direction: row;
  gap: 50px;
  top: 20%;
  left: 18%;
  position: relative;
}

.resume-task {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 8px;
  color: white;
  width: 400px;
  height: auto;
  position: relative;
  left: 300px;
}

.task-title {
  align-content: center;
  width: 100%;
  height: 30px;
  font-size: 1.2rem;
  margin-bottom: 5px;
  border: 1px solid #ccc;
  color: white;
}

.task-details li {
  margin-bottom: 5px;
  font-size: 0.8rem;
  list-style: none;
  text-align: left;
  position: relative;
}

h4{
  text-align: left;
  text-decoration: underline;
}


@media screen and (min-width: 480px) and (max-width: 720px) {
h2{
  font-size: 3em;
  top: 27px;
  -webkit-text-stroke: 2px black;
}

  .resume-section {
    margin-top: 85px;
    left: 120px;
  }

  .resume-task {
    width: 230px;
    left: 0px;
  }

  .task-title {
    font-size: 15px;
  }

  .task-details li {
    font-size: 8px;
    text-align: left;
  }
}

/* Media query for 320px */
@media screen and (min-width: 300px) and (max-width: 460px) {
h2{
  font-size: 2em;
  top: 0px;
  transform: rotate(0deg);
  -webkit-text-stroke: 2px black;
}

  .resume-section {
    left: 0;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .resume-task {
    width: 120px;
    height: 320px;
    left: 0px;
    top: 70px
  }

  .task-title {
    font-size: 12px;
    padding: 0;
  }

  .task-details li, h4, h3 {
    font-size: 7px;
    text-align: left;
    left: 0px;
    margin-right: 20px;
    padding: 0;
  }
  ul{
    padding: 0;

  }
}

.fade-in {
  opacity: 1;
}
</style>
