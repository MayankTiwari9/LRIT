#include <iostream>
#include <string>

class Shape {
public:
    virtual void draw() const = 0; 
};

class Circle : public Shape {
public:
    void draw() const override {
        std::cout << "Drawing a circle" << std::endl;
    }
};

class Square : public Shape {
public:
    void draw() const override {
        std::cout << "Drawing a square" << std::endl;
    }
};

int main() {
    Circle circle;
    Square square;


    circle.draw();
    square.draw();

    return 0;
}
