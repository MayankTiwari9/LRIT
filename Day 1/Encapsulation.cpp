#include <iostream>
#include <string>
//Encapsulation 
class Student {
private:
    std::string name;
    int age;

public:
    void setName(const std::string& n) {
        name = n;
    }

    void setAge(int a) {
        if (a > 0) {
            age = a;
        }
    }

    void displayInfo() const {
        std::cout << "Name: " << name << "\nAge: " << age << std::endl;
    }
};

int main() {
    Student student;
    student.setName("Rahul");
    student.setAge(25);
    student.displayInfo();

    return 0;
}