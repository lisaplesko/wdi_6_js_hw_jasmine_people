/* global describe, it, expect, Person */

describe("Player", function(){
  describe("initializer", function(){
    it("accepts a first name and last name", function(){
      var person = new Person("Lisa", "Plesko");

      expect(person.firstName).toEqual("Lisa");
      expect(person.lastName).toEqual("Plesko");
    });
  });
});
