import "../css/style.css";
import tick from "../assets/images/icon-list.svg"
import success from "../assets/images/icon-success.svg"
import cardimageDesktop from "../assets/images/illustration-sign-up-desktop.svg"
import cardimageMobile from "../assets/images/illustration-sign-up-mobile.svg"
import { dismissClick,  submitClick } from "./submit";

document.querySelector("#app").innerHTML = /*html*/ `

<main>
  <section class="scard">
    <!-- Sign-up form start -->
    <aside class="scard__text">
      <p class="scard__heading">Stay updated!</p>
      <article class="scard__article">
        <p class="scard__para">Join 60,000+ product managers receiving monthly updates on:
        </p>
        <ul class="scard__ul">
          <li class="scard__li">
            <img src="${tick}" alt="tick" class="scard__liimg">
            Product discovery and building what matters
          </li>
          <li class="scard__li">
            <img src="${tick}" alt="tick" class="scard__liimg">
            Measuring to ensure updates are a success
          </li>
          <li class="scard__li">
            <img src="${tick}" alt="tick" class="scard__liimg">
            And much more!
          </li>
        </ul>
      </article>
      <div class="scard__mail">
        <div class="scard__labels">
          <label for="email" class="scard__maillabel">Email address</label>
          <span class="scard__mailerror">Valid email required</span>
        </div>
        <input type="email" name="email" id="email" class="scard__mailbox"placeholder="email@company.com">
        <button class="scard__button scard__button--hover">Subscribe to monthly newsletter</button>
      </div>
    </aside>
    <aside>
      <img src="${cardimageDesktop}" alt="description-image" class="scard__dimg scard__img--desktop">

      <img src="${cardimageMobile}" alt="description-image" class="scard__mimg scard__img--mobile">
    </aside>
  </section>
  <!-- Sign-up form end -->

  <!-- Success message start -->
  <section class="mcard">
    <aside class="mcard__text">
      <img src="${success}" alt="tick" class="mcard__img">
      <h2 class="mcard__heading">Thanks for subscribing!</h2>
      <p class="mcard__para">
        A confirmation email has been sent to <span class="mcard__email">.</span>
        Please open it and click the button inside to confirm your subscription.
      </p>
    </aside>
    <button class="mcard__button mcard__button--hover">Dismiss message</button>
  </section>
  <!-- Success message end -->
</main>
`;

const subimit = document.querySelector(".scard__button") 
const dismiss = document.querySelector(".mcard__button") 
subimit.onclick = () => submitClick(); 
dismiss.onclick = () => dismissClick(); 
