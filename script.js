

var app = new Vue({
  el: '#app',
   data: {
    setup: "",
    punchline: "",
    loading: false,
    error: false,
    showPunchline: false,
    showPLButton: false,
    firstJoke: true,
  },
  methods: {
    fetchJoke: function() {
      this.loading = true;
      this.error = false;
      this.showPunchline = false;
      fetch('https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke').then(response => {
            return response.json();
          }).then(json => {
            this.firstJoke = false;
            this.setup  = json.setup;
            this.punchline = json.punchline;     
            this.showPLButton = true;       
            //this.logJoke();
            return true;
      }).catch(err => {
        this.loading = false;
        this.error = true;
        console.log("error2");

      });
    },
    logJoke: function() {
      console.log(this.setup);
      console.log(this.punchline);
    },
    revealPunchline: function(){
      this.showPunchline = true;
      this.showPLButton = false;
    }
  }
});


