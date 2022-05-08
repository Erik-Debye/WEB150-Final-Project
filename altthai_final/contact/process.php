<!DOCTYPE html>
<html lang="en">
<head>
    <!--Meta Data-->
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!--CSS (Normally Bundled)-->
    <link rel="stylesheet" href="../parent/style.css" />
    <link rel="stylesheet" href="./contact.css" />
    <!--FONTS-->
    <script src="https://kit.fontawesome.com/fd19f12e7d.js" crossorigin="anonymous"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Lora&display=swap" rel="stylesheet" />
    <!--FAVICONS-->
    <link rel="shortcut icon" href="../favicons/favicon.ico" />
    <link rel="icon" sizes="16x16" href="../favicons/favicon-16x16.png" />
    <link rel="icon" sizes="32x32" href="../favicons/favicon-32x32.png" />
    <link rel="icon" sizes="192x192" href="../favicons/android-chrome-192x192.png" />
    <link rel="icon" sizes="512x512" href="../favicons/android-chrome-512x512.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="../favicons/apple-touch-icon.png" />
    <!--Title & Desc-->
    <title>Contact Form Submission Confirmation Page for Altthai - Arlington Heights</title>
    <meta name="description" content="The contact form submission confiramtion page for AltThai - a local Arlington Heights, IL restaurant">
  </head>
<body>
<header class="header__bar--alt">
      <!--LOGO & Buttons -->
      <a href="../index.html">
        <img
          src="../src/Logo_white--400w.png"
          alt="AltThai Logo"
          class="nav__bar__logo--alt"
          aria-roledescription="Link to Homepage"
        />
      </a>
      <nav id="main__nav">
        <div class="link__group">
          <a href="../gallery/gallery.html" class="nav__link nav__link__underline">Gallery</a>
          <a href="../about/about.html" class="nav__link nav__link__underline">About</a>
          <a href="../contact/contact.html" class="nav__link nav__link__underline">Contact</a>
        </div>
        <div class="cta__group">
          <a href="../menu/menu.html" class="nav__link cta__color">Menu</a>
          <button id="nav__btn" class="nav__btn cta__color cta__color--2" type="button">
            <a
              id="nav__link"
              href="https://www.toasttab.com/altthai/v2/online-order#!/"
              class="nav__btn--link"
              >Order Online</a
            >
          </button>
        </div>
        <div class="hamburger">
          <div class="line line--1"></div>
          <div class="line line--2"></div>
          <div class="line line--3"></div>
        </div>
        </div> 
      </nav>
      <nav class="ham__nav">
          <div class="ham__link__group">
            <a href="../gallery/gallery.html" class="ham__nav__link nav__link__underline">Gallery</a>
            <a href="../about/about.html" class="ham__nav__link nav__link__underline">About</a>
            <a href="../contact/contact.html" class="ham__nav__link nav__link__underline">Contact</a>
          </div>
          <div class="ham__cta__group">
            <a href="../menu/menu.html" class="nav__link cta__color">Menu</a>
            <button class="nav__btn cta__color cta__color--2" type="button">
              <a
                id="nav__link"
                href="https://www.toasttab.com/altthai/v2/online-order#!/"
                class="nav__btn--link"
                >Order Online</a
              >
            </button>
      </nav>
    </header>
<section class='contact'>
  <div class="contact__section">
    <div class="contact__col">
      <h1 class="contact__main">Message Received!</h1>
      <h3 class="contact__secondary">As promised, we'll get back to you as soon as we can!</h3>
    </div>
    <div class="contact__col">
      <img
        class="contact__img"
        src="../src/mailbox.png"
        alt="An illustration of a mailbox with an opened letter and papers coming out."
      />
    </div>
  </div>
  <div class='contact__table' >
	  <h2 class='contact__table__title' >Submitted Information</h2>
      <table>
          <tr>
            <th class='left col__title'>Form value</th>
            <th class='left col__title'>Form name</th>
          </tr>
<?php
foreach ($_POST as $n => $v) {
  echo "<tr>
         <th class='left'>$n</th>
          <th class='left'>$v</th>
        </tr>";
}
?>
      </table>
  </div>
</section>

<footer class="footer">
      <div class="footer__info">
        <address class="footer__text">
          <a href="https://goo.gl/maps/zzc9KWvadBaAdMKS9"
            >40 S. Arlington Heights Road <br />
            Arlington Heights, IL 60005</a
          >
        </address>
        <div class="footer__text">
          <a href="tel:+1 847 797 8442">Tel: (847) 797 8442</a>
        </div>
      </div>
      <div class="footer__socials">
        <a href="https://www.facebook.com/altThai">
          <i class="fa-brands fa-facebook-square" aria-label="Link to the AltThai Facebook Account"></i>
        </a>
        <a href="http://www.yelp.com/biz/altthai-arlington-heights">
          <i class="fa-brands fa-yelp" aria-label="Link to the AltThai Yelp Page"></i>
        </a>
        <a href="http://">
          <i class="fa-brands fa-instagram" aria-label="Link to the AltThai Instagram Page"></i>
        </a>
        <a
          href="http://www.tripadvisor.com/Restaurant_Review-g29277-d1007965-Reviews-AltThai-Arlington_Heights_Illinois.html"
        >
          <img src="../src/tripadvisor.png" alt="Trip Advisor Social Icon" />
        </a>
      </div>
      <div class="footer__links">
        <p class="footer__text">
          Want to work with us? <br />
          Email us at <a href="mailto:careers@altthai.co">careers@altthai.co</a>
        </p>
      </div>
    </footer>
</body>
<script src="../parent/parent.js"></script>
</html>