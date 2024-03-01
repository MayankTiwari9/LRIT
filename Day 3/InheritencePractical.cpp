#include <iostream>

class Animal {
public:
    void eat() {
        std::cout << "Animal is eating" << std::endl;
    }

    void sleep() {
        std::cout << "Animal is sleeping" << std::endl;
    }
};

class Dog : public Animal {
public:
    void bark() {
        std::cout << "Dog is barking" << std::endl;
    }
};

int main() {
    Dog myDog;
    myDog.eat();    // Inherited from Animal
    myDog.sleep();  // Inherited from Animal
    myDog.bark();   // Defined in Dog class

    return 0;
}
