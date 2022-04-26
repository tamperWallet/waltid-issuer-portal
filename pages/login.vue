<template>
  <section class="text-center login-body">
    <main class="form-signin">
     <form form action="" id="login-form" class="my-4" @submit.prevent="login">
      <img class="mb-4" src="https://ktu.edu/wp-content/uploads/2016/08/logo_ukrainos_veliava.svg" alt="" width="150">
      <!-- <img class="mb-4" src="https://static.intercomassets.com/avatars/5059525/square_128/custom_avatar-1628056261.png?1628056261" alt="" width="72"> -->
      <h1 class="h3 mb-3 fw-normal">Please sign in to the <b>Demo Issuer Portal</b></h1>
      <br />
      <div class="form-floating">
        <input
          type="email"
          id="floatingInput"
          class="form-control"
          autocomplete="off"
          name="email"
          v-model="email"
          :placeholder="$t('EMAIL_ADDRESS')"/>
        <label for="floatingInput">{{$t('EMAIL_ADDRESS')}}</label>
      </div>
      <div class="form-floating">
        <input
         type="password"
         class="form-control"
         id="floatingPassword"
         :placeholder="$t('PASSWORD')"
         name="password"
         autocomplete="off"
         v-model="password"/>
        <label for="floatingPassword">{{$t('PASSWORD')}}</label>
      </div>
      <div class="checkbox mb-3">
       <label>
         <input type="checkbox" value="remember-me"> {{$t('REMEMBER_ME')}}
       </label>
      </div>
      <!--<button class="mb-3 w-100 btn btn-lg btn-primary _animation-fade" button type="submit" name="submit">{{$t('SIGN_IN')}}</button>-->
      <button class="buttonktu mb-3 w-100 btn btn-lg btn-primary _animation-fade" button type="submit" name="submit">{{$t('SIGN_IN')}}</button>
      <!--<a href="#" v-for="locale in availableLocales" :key="locale.code" @click.prevent.stop="$i18n.setLocale(locale.code)">
        <img :src="locale.flag" width="20px" height="15px" :alt="locale.iso" class="me-2 border border-white" />
      </a>-->
      <!--<p class="mt-3 mb-3 text-muted">&copy; 2021 walt.id </p>-->
     </form>
    </main>
  </section>
</template>

<script>
export default {
  name: "login",
  data () {
    return {
      email: "",
      password: "",
      error: null
    }
  },
  computed: {
    availableLocales () {
      console.log("locales", this.$i18n.locales)
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  },
  methods: {
    async login () {
      try {
        const loginResponse = await this.$auth.loginWith("local", {
          data: {
            id : this.email,
            //email: this.email,
            password: this.password
          }
        })
        console.log(loginResponse)
        this.$auth.setUser(loginResponse.data)
        this.$router.push("/dashboard")
      } catch (e) {
        this.error = e.response.data.message
      }
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.cdnfonts.com/css/pf-dintext-pro-medium');
.buttonktu:hover, .buttonktu:focus {
  background-color: #000000; /* Green */
  color: white;
  transition-duration: 0.5s;
}
.buttonktu{
      position: relative;
    background: transparent;
    float: none !important;

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
    width: 100%;

}
  .login-body {
    height: 100vh;
    display: flex;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: white;

  }
  .form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
  }
  .form-signin .checkbox {
    font-weight: 400;
  }
  .form-signin .form-floating:focus-within {
    z-index: 2;
  }
  .form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    }
  .form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  .bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }
  @media (min-width: 768px) {
    .bd-placeholder-img-lg {
      font-size: 3.5rem;
    }
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
    width: 100%;

}
</style>
