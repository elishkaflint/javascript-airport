# Airport Challenge in Javascript

___

## Summary

A project to learn Javascript by re-doing a previous weekend challenge which was originally written in Ruby - the Airport Challenge.</br>
[Full instructions here.](https://github.com/makersacademy/course/blob/master/individual_challenges/bank_tech_test.md)
___

## Credits

Developed by Elishka Flint and Cornelis Heuperman.

___

## Technical

### Tech/Frameworks Used

Javascript, Jasmine

**All tests passing**

### Using the Application

#### Clone the repo and launch:

```
$ git clone https://github.com/elishkaflint/javascript-airport.git
$ cd javascript-airport
$ open SpecRunner.html
```

#### Example usage:

In the browser console (right click > inspect > console)

```
# create a new airport with capacity for 10 airplanes
> airport = new Airport(10);

# create a plane
> plane = new Plane();

# land a plane
> airport.land(plane)

# release a plane
> airport.takeOff(plane)
```
___

## Implemented User Stories

```

As an air traffic controller
So I can get passengers to a destination
I want to instruct a plane to land at an airport

As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy

As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport

As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy

As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate
```
