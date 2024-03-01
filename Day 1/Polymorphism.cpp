#include <iostream>
#include <string>

class Shape {
public:
    virtual void draw() const {
        std::cout << "Drawing a shape" << std::endl;
    }
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
    Shape* shapes[2];
    Circle circle;
    Square square;

    shapes[0] = &circle;
    shapes[1] = &square;

    for (int i = 0; i < 2; ++i) {
        shapes[i]->draw();
    }

    return 0;
}