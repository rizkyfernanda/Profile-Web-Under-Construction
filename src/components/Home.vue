<template>
  <div class="home">
    <div class="container">
      
      <div class="row">    
    
        <div class="col-lg-6 col-md-12 logo">
          <!-- Picture -->
          <img src="../assets/picture.png" class ="img-responsive rotating" width = "75%" />
        </div>

        <div class= "col-lg-6 col-md-12 textColumn">
          <!--Logo title-->
          <img src="../assets/titleLogo.png" class ="titleLogo img-responsive my-4" width = "75%" />
          
          <!--Paragraph-->
          <p>
          Welcome to Fauzi Fernanda’s profile.<br>
          <span class="bolded">Loves to create</span> and always want to learn to. 
          Currently develop front-end websites and printed graphic designs. 
          Also loves Indonesian food, sci-fi movies, popular music, and hanging around. 
          </p>

          <!--Under Construction-->
          <div class="alert alert-warning underConstruction" role="alert">
            <i class="fa fa-wrench"></i>
            Website is currently under construction. Thank you.
          </div>

          <!-- Contacts -->
          <table class="contacts">
            <tr>
              <th class="faColumn"><span class="fa fa-envelope"></span></th>
              <th>fauzi.fernanda98@gmail.com</th>
            </tr>
            
            <tr>
              <th class="faColumn"><span class="fa fa-github"></span></th>
              <th>
                <a href="https://github.com/rizkyfernanda">
                fauzifernanda
              </a></th>
            </tr>

            <tr>
              <th class="faColumn"><span class="fa fa-instagram"></span></th>
              <th>
                <a href="https://instagram.com/fauzifernanda">
                @fauzifernanda
              </a></th>
            </tr>
            
            <tr>
            <th class="faColumn"><span class="fa fa-behance"></span></th>
            <th><a href="https://behance.net/fauzifernanda">
            fauzifernanda
            </a></th>
            </tr>

            <tr>
            <th class="faColumn"><span class="fa fa-twitter"></span>
            <th><a href="https://twitter.com/mrizfer">
            @fauzisstuff
            </a></th>
            </tr>

          </table>
      
        </div>  

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../assets/profile.css">
