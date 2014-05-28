/* global describe, it, expect, Person */

describe("Person", function(){
  describe("initializer", function(){
    it("accepts a first name and last name", function(){
      var person = new Person("Lisa", "Plesko");

      expect(person.firstName).toEqual("Lisa");
      expect(person.lastName).toEqual("Plesko");
    });



    it("can also accept age, weight, height and friends", function(){
      var height = (Math.floor(Math.random() * 50 + 150 ));
      var person = new Person("Lisa", "Plesko");

      expect(person.age).toEqual(30);
      expect(person.weight).toEqual(80);
      expect(person.height).toBeGreaterThan(150);
      expect(person.height).toBeLessThan(200);
      expect(person.friends.length).toBe(0);
    });
  });
});


// age (in years, default to 30)
// weight (in kilograms, default to 80)
// height (in centimeters, default to a random value between 150 and 200)
// friends (an array of other Person objects, default to empty)


//
