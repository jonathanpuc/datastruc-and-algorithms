var Stack = function() {
  this.storage = "";
};

Stack.prototype.push = function(val) {
  // stack frames will be separated by ---
  this.storage = this.storage.concat(`---${val}`);
};

Stack.prototype.pop = function() {
  // temp array to contain stack frames without separator
  var arr = this.storage.split("---");
  // remove the last stack frame and save it into popped to return
  var popped = arr.splice([arr.length - 1]);
  // reassign storage with updated stack frames with separator
  this.storage = arr.join("---");

  return popped;
};

Stack.prototype.size = function() {
  var size =
    this.storage === ""
      ? // simply return 0 if storage is empty
        0
      : // expose stack frames without seperator, filtering out any unnecessary data like trim() but with an array
        // and assign its length to variable
        this.storage.split("---").filter(val => val !== "").length;
  return size;
};

var myWeeklyMenu = new Stack();

myWeeklyMenu.push("RedBeans");
