<template>
    <div id="app">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-12 logo">
              <img src="../assets/profileAnimate.png" width="75%" class="img-responsive rotating">
            </div>
            <div class="col-lg-6 col-md-12 textColumn">
            <img src="../assets/titleLogo.png" width="75%" class="titleLogo img-responsive my-4">
              <p> Welcome to Fauzi Fernanda’s profile. <br>
                <span class="bolded">Loves to create</span> and always want to learn to. Currently develop front-end websites and printed graphic designs. Also loves Indonesian food, sci-fi movies, popular music, and hanging around.
              </p>
              <div role="alert" class="alert alert-warning underConstruction">
                <i class="fa fa-wrench"></i> Website is currently under construction. Thank you.
              </div>
              <table class="contacts">
                <tr>
                  <th class="faColumn justify-content-center">
                    <span class="fa fa-envelope"></span>
                  </th>
                  <th>
                    <div class="ms-2">fauzi.fernanda98@gmail.com</div>
                  </th>
                </tr>
                <tr>
                  <th class="faColumn">
                    <span class="fa fa-brands fa-github"></span>
                  </th>
                  <th>
                    <a href="https://github.com/rizkyfernanda" class="ms-2"> fauzifernanda </a>
                  </th>
                </tr>
                <tr>
                  <th class="faColumn">
                    <span class="fa fa-brands fa-instagram"></span>
                  </th>
                  <th>
                    <a href="https://instagram.com/fauzifernanda" class="ms-2"> @fauzifernanda </a>
                  </th>
                </tr>
                <tr>
                  <th class="faColumn">
                    <span class="fa fa-brands fa-behance"></span>
                  </th>
                  <th>
                    <a href="https://behance.net/fauzifernanda" class="ms-2"> fauzifernanda </a>
                  </th>
                </tr>
                <tr>
                  <th class="faColumn">
                    <span class="fa fa-brands fa-twitter"></span>
                  </th>
                  <th>
                    <a href="https://twitter.com/fauzisstuff" class="ms-2"> @fauzisstuff </a>
                  </th>
                </tr>
              </table>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
