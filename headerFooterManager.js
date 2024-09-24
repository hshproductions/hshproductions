class specialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
            '<nav class="navbar"><div class="container"><div class="logo"><a href="home.html"><img src="images/Logo (No Name) with White.png" alt="logo" width="80px"><span class="logo-name"><font color="#FFFFF">HSH</font> <font color="#0171BB">Productions</font></span></a></div></div></nav >';
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