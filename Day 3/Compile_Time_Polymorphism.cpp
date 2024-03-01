#include <iostream>

class MathOperations {
public:
    int add(int a, int b) {
        return a + b;
    }

    double add(double a, double b) {
        return a + b;
    }
};

int main() {
    MathOperations math;
    std::cout << math.add(5, 7) << std::endl;        // Calls int add(int a, int b)
    std::cout << math.add(3.5, 2.7) << std::endl;    // Calls double add(double a, double b)

    return 0;
}
