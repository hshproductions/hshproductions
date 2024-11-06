class specialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
          '<nav class="navbar"><div class="container"><div class="logo"><a href="index.html"><img src="images/logos/Logo (No Name) with White.png" alt="logo" width="80px"><span class="logo-name"><font color="#FFFFF">HSH</font> <font color="#0171BB">Productions</font></span></a></div><div class="social-icons"><a href="https://www.facebook.com/hshprods/?locale=en_GB" target="_blank"><img src="images/social-icons/Facebook.png" alt="facebook" width = "40px"></a><a href="https://www.instagram.com/hshproductions" target="_blank"><img src="images/social-icons/Instagram.png" alt="instagram" width="40px"></a><a href="https://www.youtube.com/channel/UCDdtufxHuoa5i3v1yOod6_Q" target="_blank"><img src="images/social-icons/Youtube.png" alt="youtube" width="40px"></a><a href="tel:02084322310"><img src="images/social-icons/call.png" alt="call" width="40px"></a></div></div></nav>';
    }
}

class specialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
          '<footer><div class="footer"><hr width="100%" height="2px" color="white"><a href="tel:02084322310"><p><strong>Phone:</strong> 020 8432 2310</p></a><a href="mailto:info@hshproductions.co.uk"><p><strong>Email:</strong> info@hshproductions.co.uk</p></a><br><a href="https://maps.app.goo.gl/M7TCqr6KL96xPxgP8" target="_blank"><p>Unit 18, Vicarage Farm</p><p>Halliford Road</p><p>Sunbury-On-Thames</p><p>TW16 6DW</p></a></div></footer>';
    }
}

customElements.define('special-header', specialHeader)
customElements.define('special-footer', specialFooter)