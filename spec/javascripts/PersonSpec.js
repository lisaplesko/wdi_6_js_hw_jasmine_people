/* global describe, it, expect, Person */

describe("Person", function(){

  beforeEach(function() {
    this.person = new Person("Lisa", "Plesko");
  });

  describe("initializer", function(){
    it("accepts a first name and last name", function(){

      expect(this.person.firstName).toEqual("Lisa");
      expect(this.person.lastName).toEqual("Plesko");
    });



    it("can also accept age, weight, height and friends", function(){
      var height = (Math.floor(Math.random() * 50 + 150 ));

      expect(this.person.age).toEqual(30);
      expect(this.person.weight).toEqual(80);
      expect(this.person.height).toBeGreaterThan(150);
      expect(this.person.height).toBeLessThan(200);
      expect(this.person.friends.length).toBe(0);
    });
  });

  describe("#fullName", function(){
    it("returns a first and last name", function() {

      expect(this.person.fullName()).toBe("Lisa Plesko");
    });
  });

  describe("#weightInStone", function(){

  });

  xdescribe("#addFriend", function(){

  });

  xdescribe("#removeFriend", function(){

  });

  xdescribe("#greetPeople", function(){

  });


});




// I should also be able to call these functions on a Person:

// fullName should return the person's first name plus their last name
// weightInStone should return the person's weight in stone
// addFriend should take a Person object and add it to the person's friends
// removeFriend should take a name string and remove the person with that name from the person's friends, if there is such a friend
// greetPeople should return a string that greets an optional array of Person objects
// (default to the person's friends) by their full names, with an optional greeting (default to "Hi"). If no people are provided and the person has no friends, the function should throw an error.
