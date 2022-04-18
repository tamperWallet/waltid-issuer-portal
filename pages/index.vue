<template>
  <div>
    <!-- <<header>
      <div id="navbarHeader" class="collapse bg-dark">
        <div class="container">
          <div class="row">
            <div class="col-sm-8 col-md-7 py-4">
              <h4 class="text-white">
                About walt.id
              </h4>
              <p class="text-muted">
                <b>walt.id</b> is a European company that develops Self-
                Sovereign Identity (SSI) solutions for governments and
                businesses across industries.
                We offer an easy and fast way to adopt SSI - particularly
                Europe’s new decentralized digital identity ecosystem -
                based on robust open source products. To ensure client’s
                success our industry-leading experts provide holistic
                services ranging from conception and project planning
                over the implementation of proof-of-concepts and
                production system to enterprise support and managed
                cloud services..
              </p>
            </div>
            <div class="col-sm-4 offset-md-1 py-4">
              <h4 class="text-white">
                Coordinates
              </h4>
              <ul class="list-unstyled">
                <li><a href="https://walt.id" class="text-white">web: https://walt.id</a></li>
                <li><a href="https://docs.walt.id" class="text-white">docs: https://docs.walt.id</a></li>
                <li><a href="https://github.com/walt-id" class="text-white">src: https://github.com/walt-id</a></li>
                <li><a href="mailto:office@walt.id" class="text-white">mail: office@walt.id</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="navbar navbar-dark bg-dark shadow-sm">
        <div class="container">
          <a href="#" class="navbar-brand d-flex align-items-center"> -->

            <!--        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-bookmark-check" viewBox="0 0 16 16">-->
            <!--          <path fill-rule="evenodd" d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>-->
            <!--          <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>-->
            <!--        </svg>-->
            <!-- <img class="me-3" src="/waltid-white-logo.png" alt="" width="50px">
            <strong>walt.id</strong>
          </a>
          <ul class="nav navbar-nav navbar-right">
            <li>
              <a href="#" v-for="locale in availableLocales" :key="locale.code" @click.prevent.stop="$i18n.setLocale(locale.code)">
                <img :src="locale.flag" width="20px" height="15px" :alt="locale.iso" class="me-2 border border-white" />
              </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header> -->

    <header class="lightgreentop">
      <div>
      </div>
        <div class="container">
           <div class="row">
              <div class="col-md-2 midhead">
                  <a href="#" class="navbar-brand d-flex">       
                  <img class="me-3" src="https://ktu.edu/wp-content/uploads/2016/08/logo_ukrainos_veliava.svg" alt="" width="110px">
                  </a>
              </div>
              <div class="col-md-7 midhead3">
                <h1 class="mainf">ACADEMIC INFORMATION SYSTEM</h1>
              </div>
              <div class="col-md-3">
                <nav>
        <div class="dropdown midhead2">

  <button class="dropdown-toggle buttonktu" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    my KTU
  </button>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
   <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2131 rect-button">
     <a class="topmenu mainf" title="MOODLE aplinka" target="_blank" href="https://moodle.ktu.edu/?lang=en">MOODLE</a></li>

	<li class="menu-item">
    <a class="topmenu mainf" title="akademinÄ— sistema (AIS)" target="_blank" href="https://uais.cr.ktu.lt/ktuis/stp_prisijungimas?p_lang=LTU">academic IS</a></li>

	<li class="menu-item">
    <a class="topmenu mainf" title="office365 aplinka" target="_blank" href="https://live.ktu.lt">Office365</a></li>

	<li class="menu-item">
    <a class="topmenu mainf" title="intranetas &#8211; prisijungimas per KTU VPN" target="_blank" href="https://intranet.ktu.lt"><span class="glyphicon intranetas &#8211; prisijungimas per KTU VPN"></span>&nbsp;intranet</a></li>
  
	<li class="menu-item"><a class="topmenu mainf" title="darbuotojÅ³ paÅtas" target="_blank" href="https://pastas.ktu.lt">email for employees</a></li>
	<li class="menu-item"><a class="topmenu mainf" title="darbuotojo atmintinÄ—" target="_blank" href="https://en.ktu.edu/employee-guide/">employee guide</a></li>
	<li class="menu-item"><a class="topmenu mainf" title="praneÅk" target="_blank" href="https://pranesk.ktu.edu/en">report</a></li>
	<li class="menu-item"><a class="topmenu mainf" title="pagalba" target="_blank" href="https://help.ktu.edu/?lang=en">help</a></li>
</ul>
</div>
                </nav>
              </div>
            </div>
        
        </div>
</header>

    <main>
      <section class="py-5 text-center container">
        <div class="row py-lg-5">
          
          <div class="col-lg-6 col-md-8 mx-auto">
            <h1 class="fw-normal">
              {{$t('CLAIM_CREDENTIALS')}}
            </h1>
            <p class="lead text-muted fw-normal mb-4">
              {{$t('SELECT_CREDENTIALS_MSG')}}
            </p>
              <form>
                <div class="d-flex flex-column align-items-md-center align-items-sm-start text-start">
                  <div class="form-check col-md-9 col-sm-12 mb-3" v-for="issuable in issuables.credentials" :key="issuable.type">
                    <input class="form-check-input me-4" type="checkbox" :id="'issuable-' + issuable.type" :name="'issuable-' + issuable.type" :value="issuable.type" v-model="checkedCredentials">
                    <label class="form-check-label">{{/*issuable.type*/}}{{$t(issuable.type)}} |</label>
                    <button type="button" data-bs-toggle="modal" :data-bs-target="'#credentilModal'+issuable.type" class="text-primary _view-btn mb-2"><i class="bi bi-box-arrow-up-right p-1"></i></button>
                    <!--Credendtial Modal -->
                    <div class="modal fade" :id="'credentilModal' + issuable.type" tabindex="-1" :aria-labelledby="'credentilModal'+issuable.type" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">{{$t('EDIT_CREDENTIAL')}}</h5>
                            <div class="col _edit-btn d-flex flex-column align-items-right justify-content-right text-end">
                              <a @click="enableCredentialEditor ? disableInput() : enableInput()" href="#enable" :class="enableCredentialEditor ? 'p-0 text-success fst-italic' : 'p-0 text-primary fst-italic' "><i :class="enableCredentialEditor ? 'bi bi-check-square' : 'bi bi-pencil-square'"></i></a>
                            </div>
                          </div>
                          <credential-editor :issuable="issuable" :enableEditor="enableCredentialEditor" class="modal-body" />
                          <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="reset">{{$t('CLOSE')}}</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <button @click="goToWallet(wallets[0].id)" class="btn btn-primary py-2 px-5 _cbtn" :disabled="this.checkedCredentials.length > 0 ? false : true"><img v-if="btnLoading" src="loader.gif" width="20px"/><span v-else>{{$t('CONFIRM')}}</span></button>
          </div>
        </div>
      </section>
    </main>
    <footer >
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="footer-border"></div>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-md-5" id="icons">
               <p><strong>Kaunas University of Technology</strong> įm. k. 111950581<br />
               company code 111950581, VAT code LT119505811<br />
address K. Donelaičio St. 73, 44249 Kaunas, Lithuania<br />
+370 (37) 300 000, 300 421, fax +370 (37) 324 144<br />
email <a href="mailto:ktu@ktu.lt">ktu@ktu.lt</a></p>
                      <div class="social-icons">
                      <a href="https://www.facebook.com/ktu.lt" target="_blank"><img src="https://ktu.edu/wp-content/themes/ktu/images/social/Social_media-facebook.svg" alt="Facebook" title="Facebook"></a>
                      <a href="https://www.linkedin.com/company/ktu" target="_blank"><img src="https://ktu.edu/wp-content/themes/ktu/images/social/Social_media-linkedin.svg" alt="Linkedin" title="Linkedin"></a>
                      <a href="https://www.youtube.com/user/ktuvideo" target="_blank"><img src="https://ktu.edu/wp-content/themes/ktu/images/social/Social_media-youtube.svg" alt="YouTube" title="YouTube"></a>
                      <a href="https://www.instagram.com/ktuspace/" target="_blank"><img src="https://ktu.edu/wp-content/themes/ktu/images/social/Social_media-instagram.svg" alt="Instagram" title="Instagram"></a>
                    </div>
              </div>
        
            <div class="col-md-2">
              <div class="menufooter">


                <div class="dropdown">
  <a class="dropdown-toggle buttonktu" id="buttonfooter2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Quick Links
  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li class="footerli"><a class="downmenu mainf" title="COVID-19" href="https://en.ktu.edu/covid-19/">COVID-19</a></li>
	                    <li class="footerli"><a class="downmenu mainf" title="Bendrabučiai" target="_blank" href="https://dormitory.ktu.edu">Dormitories</a></li>

                      <li class="footerli"><a class="downmenu mainf" title="Akademiniai mainai" href="https://en.ktu.edu/erasmus/">Academic exchange</a></li>
	                    <li class="footerli"><a class="downmenu mainf" title="Darbas KTU" href="https://en.ktu.edu/work-at-ktu/">Work at KTU</a></li>
	                    <li class="footerli"><a class="downmenu mainf" title="Dokumentai" href="https://en.ktu.edu/documents/">Documents</a></li>
	                    <li class="footerli"><a class="downmenu mainf" title="Kontaktai" href="https://en.ktu.edu/contacts/">Contacts</a></li>
	                    <li class="footerli"><a class="downmenu mainf" title="KTU virtualus turas" target="_blank" href="https://tour.ktu.edu/#EN">Virtual KTU tour</a></li>
  </ul>
  </div></div>
      
</div>
<div class="col-md-2">
  <a class="dropdown-toggle buttonktu" id="buttonfooter2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
   Privacy
  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li class="footerli"><a class="downmenu mainf" title="Privacy" href="https://en.ktu.edu/privacy/">Privacy</a></li>
    <li class="footerli"><a class="downmenu mainf" title="Cookies" href="https://en.ktu.edu/privacy/cookies/">Cookies</a></li>
  </ul>
    </div>
<div class="col-md-3">
  <a class="buttonktu" id="buttonfooter2" href="https://en.ktu.edu/media-enquiries/" role="button" aria-expanded="false">
   For media enquiries
  </a>
</div>
        </div>
</div>
             


    
</footer>
  </div>
</template>

<script>
import CredentialEditor from '../components/CredentialEditor.vue'

export default {
  components: { CredentialEditor },
  data () {
    return {
      checkedCredentials: [],
      enableCredentialEditor: false,
      btnLoading: false
    }
  },
  computed: {
    availableLocales () {
      console.log("locales", this.$i18n.locales)
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    },
    sessionId() {
      console.log("SESSION ID", this.$route.query)
      return this.$route.query.sessionId
    }
  },
  async asyncData ({ $axios, query }) {
    const wallets = await $axios.$get('/issuer-api/wallets/list')
    const issuables = await $axios.$get('/issuer-api/credentials/listIssuables', { params: query })
    console.log("cia issuables:")
    console.log(issuables)
    console.log(issuables.credentials)

    return { wallets, issuables }
  },
  methods: {
    reset(){
      this.enableCredentialEditor=false
      console.log(this.issuables[0])
    },
    enableInput(){
      this.enableCredentialEditor=true;
      this.btnDisabled=false;
    },
    disableInput(){
      this.enableCredentialEditor=false;
      this.btnDisabled=true;
    },
    
    async goToWallet (walletId) {
      this.btnLoading = true;

      console.log("pasirinkom ID")

      console.log("checked credentials:")
      console.log(this.checkedCredentials)
      console.log("checked credentials:", this.checkedCredentials)
      console.log(this.checkedCredentials)
      console.log("wallet id :")
      console.log(walletId)
      console.log(this.issuables.credentials.VerifiableId)
      let arrayIssuables = Array.from(this.issuables.credentials)
      console.log("array issuables:")
      console.log(arrayIssuables)

      let arr = []

      if(this.issuables.credentials.VerifiableId){
          arr.push(this.issuables.credentials.VerifiableId)
      }
      if(this.issuables.credentials.VerifiableDiploma){
          arr.push(this.issuables.credentials.VerifiableDiploma)
      }
      console.log("arr :")
      console.log(arr)



      
      console.log("legth :  ", Array.isArray(this.issuables.credentials));
      console.log("checked: ", Array.isArray(this.checkedCredentials));

      // for (let i = 0; i < issuables.credentials; i++) {
      //     text += cars[i] + "<br>";
      // }

      // this.issuables.credentials.forEach(elem => console.log(elem))
      // let isssus = 
      // let selectedIssuables = {
      //   credentials: this.issuables.credentials.filter(c => this.checkedCredentials.findIndex(cc => cc == c.type) >= 0)
      // }
      let newMap = new Map();
      let dict = {};
      console.log("type: " + this.issuables.credentials['VerifiableId'])
      //newMap.set(this.issuables.credentials['VerifiableId'].type,this.issuables.credentials['VerifiableId']);
      console.log("newMap: ");
      console.log(newMap);

      for (var m in this.issuables.credentials){
        newMap.set(this.issuables.credentials[m].type,this.issuables.credentials[m]);
        dict[m] = this.issuables.credentials[m];
        
        
        
      }
     // let filtered = new Map([...arr].filter(([k, v]) => this.checkedCredentials.findIndex(cc => cc=v.type)))

      //let filtered = new Map([...this.issuables.credentials])

      let o = Array.from(this.issuables.credentials)
      console.log(o)
      //let filtered = new Map(arr.map(s => [s.]))
      // console.log("filtered")
      // console.log(filtered)


      //console.log(this.issuables.credentials["VerifiableId"])
      
      // let selectedIssuables = {
      //   credentials: arr.filter(c => this.checkedCredentials.findIndex(cc => cc == c.type) >= 0)
      // }

      // let selectedIssuables = {
      //   credentials: newMap.filter(c => this.checkedCredentials.findIndex(cc => cc==c.type) >= 0 )
      // }

      console.log("dict :")
      console.log(dict)
      
      let cred = this.issuables.credentials;
      let tarkim = Object.keys(cred).filter((key) => key.includes('VerifiableId')).reduce((cur, key) => { return Object.assign(cur, { [key]: cred[key] })}, {})

      console.log("tarkim: ")
      console.log(tarkim)
      console.log(cred)
  //     let selectedIssuables = {
  //       credentials: Object.keys(cred).
  // filter((c) => this.checkedCredentials.findIndex(cc => cc==c) >= 0).
  // reduce((cur, key) => { return Object.assign(cur, { [key]: cred[key] })}, {})
  //     }
      

      // let selectedIssuables = {
      //   credentials: this.checkedCredentials.filter(c => this.checkedCredentials.findIndex(cc => cc == c.type) >= 0)
      // }
      let selectedIssuables = {
        credentials: this.issuables.credentials.filter(c => this.checkedCredentials.findIndex(cc => cc == c.type) >= 0)
      }
    
      console.log("credentials:")
      console.log(selectedIssuables.credentials)
      console.log("Selected issuables:", selectedIssuables)
      console.log("sessionid : " + this.sessionId)
      console.log(this.sessionId)
      
      const params = this.sessionId != null ? { "sessionId": this.sessionId } : { "walletId": walletId }
      const walletUrl = await this.$axios.$post('/issuer-api/credentials/issuance/request', selectedIssuables, { params: params })
      console.log(walletUrl)
      setTimeout(()=>{window.location = walletUrl}, 2000)
    },
    tester(){
      console.warn(this.issuables.credentials)
    }
  }
}
</script>

<style scoped>
@import url('http://fonts.cdnfonts.com/css/pf-dintext-pro-medium');

.dropdown-menu{
  margin: 0px;
    padding: 0px;
    border: 0px;
    background-color: rgb(243, 242, 238);
    
    box-shadow: 0px 0px 0px 0px;
    border-radius: 0px;
}
.downmenu{
  
    
    padding: 10px 15px 10px 15px;
    display: block;
    color: black;
    background-color: transparent;
    transition: all 0.25s ease-in-out;
}
.footerli{
     width: 100%;
    padding: 0 20px;
    font-family: "PF DinText Pro Medium", sans-serif;
    color: black;
    font-size: 16px;
    line-height: 35px;
    display: block;
    background-color: #f3f2ee;
    
}
.footerli:hover{
  background-color: rgb(252, 251, 248);
}
#buttonfooter1{
  margin-left: 100px;
      background-color: #f3f2ee;
    border-radius: 3px;
    border-color: #f3f2ee;
    color: black;
    font-size: 16px;
    font-weight: 500;
    padding: 10px 20px;
    text-decoration: none;
    display: block;
    font-family: "PF DinText Pro Medium", sans-serif;
    width: 205px;
}
#buttonfooter2{
      margin-left: 100px;
      background-color: #f3f2ee;
    border-radius: 3px;
    border-color: #f3f2ee;
    color: black;
    font-size: 16px;
    font-weight: 500;
    padding: 10px 20px;
    text-decoration: none;
    display: block;
    font-family: "PF DinText Pro Medium", sans-serif;
    width: 100%;
}
#icons{
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
}
footer{
    padding: 0;
    padding-bottom: 20px;
    width: 100%;
    float: left;
    display: block;
}
.container{
  width: 1170px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
footer{

  display: block;

  position: fixed;

  right: 0;

  left: 0;

  /*z-index: 1030;*/

  bottom: 0;

}


footer .social-icons img {
    width: 24px;
}
footer .social-icons{
    position: absolute;
    top: 30px;
    right: 0;
    transform: translate(80%, 0);
     z-index: 20;
}
.social-icons{
  display: block;
  height: auto;
  max-width: 100%;
  border: 0;
}
.social-icons:hover{
  display: block;
  height: auto;
  max-width: 100%;
  border: 0;
}

.dropdown-menu{
       background: transparent;
       border:none;
}
.topmenu:hover {
  background-color: #000000; /* Green */
  color: white;
  transition-duration: 0.5s;
}
.topmenu{
  border-radius: 3px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
    margin-top: 1px;

        padding: 10px 15px 10px 15px;
    display: block;
    color: black;
    background: #fff;
    border: 1px solid;
        white-space: initial;
            clear: both;
    font-weight: normal;
    line-height: 1.42857143;
}
.mainf{
  font-family: "PF DinText Pro Medium", sans-serif;
  font-weight: normal;
}
.labelfon{
  font-weight: 10;
}
.buttonktu:hover, .buttonktu:focus {
  background-color: #000000; /* Green */
  color: white;
  transition-duration: 0.5s;
}
.buttonktu{
      position: relative;
    background: transparent;
    float: none !important;
    margin: 20px;
    bottom: initial;
    right: initial;
    min-width: 90px;
    min-height: 32px;
    border-radius: 4px;

    font-size: 16px !important;
    padding: 8px 20px 8px 19px;
    border: 2px solid #000101;
    text-align: center;
    color: #000101;
    font-family: "PF DinText Pro Medium";
    
}
.lightgreentop{
      background: #e1f1ec;
}
.midhead{
  display: flex;
  justify-content: center;
  align-items: center;
}
.midhead2{
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.midhead3{
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.mainktufont{
      color: #000101;
    font-family: "pf_dintext_promedium", sans-serif;
    font-size: 36px;
    font-weight: 500;
    line-height: 24px;
    margin-bottom: 20px;
}
/* label{
  font-size: 20px;
  margin-top: -3px;
  font-weight: 600;
}
button._view-btn{
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
  font-size: 18px;
  font-weight: 600;
}
.left-inner-addon {
    position: relative;
}
.left-inner-addon input {
    padding-left: 35px !important;
}
.left-inner-addon i {
    position: absolute;
    padding: 17px 15px;
    pointer-events: none;
}
.right-inner-addon {
    position: relative;
}
.right-inner-addon input {
    padding-right: 35px !important;
}
.right-inner-addon i {
    position: absolute;
    right: 0px;
    padding: 17px 15px;
    pointer-events: none;
}
.left-and-right-inner-addon {
    position: relative;
}
.left-and-right-inner-addon input {
    padding-right: 35px !important;
    padding-left: 35px !important;
}
.left-and-right-inner-addon i.right {
    position: absolute;
    right: 0px;
    padding: 17px 15px;
    pointer-events: none;
}
.right-inner-addon-b {
    position: relative;
}
.right-inner-addon-b input {
    padding-right: 35px !important;
}
.right-inner-addon-b i {
    position: absolute;
    right: 0px;
    padding: 17px 15px;
    pointer-events: none;
}
._forms input {
    width: 100%;
		padding: 1em !important;
		margin: 0em !important;
		box-sizing: border-box;
}
._edit-btn button{
  background-color: transparent;
  border: none;
}
._cbtn{
  width: 165px;
  height: 45px
}
._cbtn img{
  margin-top: -3px
}
@media only screen and (max-width: 600px) {
  label{
  font-size: 14px;
  margin-top: -3px;
  font-weight: 600;
}
button._view-btn{
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
  font-size: 13px;
  font-weight: 600;
}
} */
</style>