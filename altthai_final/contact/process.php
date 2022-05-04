<!DOCTYPE html>
<html lang="en">
<head>	
<title>AltThai Submission Confirmation</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" type="text/css" href="./contentCSS/contact.css">
<link rel="stylesheet" href="style.css" />
</head>
<body>
<header class="header__bar--alt">
    <!--LOGO & Buttons -->
    <a href="./index.html">
        <img
          src="./src/Logo_white--400w.png"
          alt="AltThai Logo"
          class="header__bar__logo--alt"
          aria-roledescription="Link to Homepage"
        />
      </a>
      <nav>
          <a href="./content/gallery.html" class="header__link animation--underline">Gallery</a>
          <a href="./content/about.html" class="header__link animation--underline">About</a>
          <a href="./content/contact.html" class="header__link animation--underline">Contact</a>
          <a href="./content/menu.html" class="header__link animation--cta">Menu</a>
          <button class="header__btn animation--cta animation--cta--btn" type="button">
          <a href="https://www.toasttab.com/altthai/v2/online-order#!/" class="header__link--btn">Order Online</a>
        </button>
        </nav>
</header>
<main>
    <div>
	    <h2>Submitted Information</h2>
        <table>
            <tr>
                <th>Form value</th>
                <th>Form name</th>
            </tr>
<?php

foreach ($_POST as $n => $v) {

    echo "<tr>
                <th>$n</th>
                <th>$v</th>
            </tr>";
}

?>
        </table>
    </div>
</main>
<footer class="footer">
      <div class="footer__info">
        <address class="footer__text">
          <a href="http://"
            >40 S. Arlington Heights Road <br />
            Arlington Heights, IL 60005</a
          >
        </address>
        <div class="footer__text">
          <a href="tel:+1 847 797 8442">Tel: (847) 797 8442</a>
        </div>
      </div>
      <div class="footer__socials">
        <a href="http://">
          <i class="fa-brands fa-facebook-square" aria-label="Link to the AltThai Facebook Account"></i>
        </a>
        <a href="http://">
          <i class="fa-brands fa-yelp" aria-label="Link to the AltThai Yelp Page"></i>
        </a>
        <a href="http://">
          <i class="fa-brands fa-instagram" aria-label="Link to the AltThai Instagram Page"></i>
        </a>
        <a href="http://">
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
</html>