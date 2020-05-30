/*
Getters and setters
*/



var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
    this.getFullName = function() {
      return firstAndLast;
    };
    this.getFirstName = function() {
        return firstAndLast.split(" ")[0];
    }
    this.getLastName = function() {
        return firstAndLast.split(" ")[1];
    }
    this.setFullName = function(fullName) {
        firstAndLast = fullName;
    }
    this.setFirstName = function(firstName) {
        firstAndLast = firstAndLast.replace(firstAndLast.split(" ")[0], firstName)
    }
    this.setLastName = function(lastName) {
        firstAndLast = firstAndLast.replace(firstAndLast.split(" ")[1], lastName)
    }
    return firstAndLast;
  };
  
  var bob = new Person('Bob Ross');
  bob.setFirstName("Mustafa")
  bob.setLastName("Alsoffi")
  console.log(bob.getFullName());
  