/* Magic Mirror
 * Module: MMM-Quotes
 *
 * By wokandroll https://github.com/wokandroll
 * MIT Licensed.

 */

 Module.register("MMM-Quotes",{
     // Default module config.
     defaults: {
         text: "Hello World!",
     },

     // Define required scripts.
     getScripts: function() {
       return ["moment.js"];
     },

     // Define start sequence.
     start: function() {
       Log.info("Starting module: " + this.name);

       this.lastComplimentIndex = -1;

       // Schedule update timer.
       var self = this;
       setInterval(function() {
         self.updateDom(self.config.fadeSpeed);
       }, this.config.updateInterval);
     },

     /* randomIndex(compliments)
      * Generate a random index for a list of compliments.
      *
      * argument compliments Array<String> - Array with compliments.
      *
      * return Number - Random index.
      */
     randomIndex: function(compliments) {
       if (compliments.length === 1) {
         return 0;
       }

       var generate = function() {
         return Math.floor(Math.random() * compliments.length);
       };

       var complimentIndex = generate();

       while (complimentIndex === this.lastComplimentIndex) {
         complimentIndex = generate();
       }

       this.lastComplimentIndex = complimentIndex;

       return complimentIndex;
     },


     /* complimentArray()
      * Retrieve a random compliment.
      *
      * return compliment string - A compliment.
      */
      randomCompliment: function() {
    		 var mw =self.config.quotes;// this.file('quotes.json');
    		var index = this.randomIndex(mw);

    		return quotes[index];
    	},

     // Override dom generator.
     getDom: function() {
       var complimentText = this.randomCompliment();

       var compliment = document.createTextNode(complimentText.body);
       var wrapper = document.createElement("div");
       wrapper.className = "thin xlarge bright";
       wrapper.appendChild(compliment);

       return wrapper;
     }
 });
