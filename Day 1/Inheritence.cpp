#include <iostream>
#include <string>

class Vehicle {
protected:
    std::string brand;

public:
    void setBrand(const std::string& b) {
        brand = b;
    }

    void displayInfo() const {
        std::cout << "Brand: " << brand << std::endl;
    }
};

class Car : public Vehicle {
private:
    int numWheels;

public:
    void setNumWheels(int num) {
        if (num >= 0) {
            numWheels = num;
        }
    }

    void displayCarInfo() const {
        displayInfo(); 
        std::cout << "No. of Wheels: " << numWheels << std::endl;
    }
};

int main() {
    Car myCar;
    myCar.setBrand("Audi");
    myCar.setNumWheels(4);
    myCar.displayCarInfo();

    return 0;
}