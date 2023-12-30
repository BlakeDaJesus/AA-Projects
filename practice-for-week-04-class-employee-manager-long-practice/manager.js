const Employee = require('./employee.js');

class Manager extends Employee {
    constructor(name, salary, title, manager, employees = []) {
        super(name, salary, title, manager);
        this.employees = [...employees];
    }

    addEmployee(employee) {
        return this.employees.push(employee)
    };

    calculateBonus(multiplier) {
        let bonus = this._totalSubSalary()
        let salary = this.salary;
        return (salary + bonus) * multiplier;
    }

    _totalSubSalary() {
        let subBonus = 0;
        let employees = this.employees;
        for (let i = 0; i < employees.length; i++) {
            let managedEmp = this.employees[i]

            if (managedEmp instanceof Manager) {
                subBonus +=  managedEmp.salary + managedEmp._totalSubSalary();
            } else if (managedEmp instanceof Employee) {
                subBonus += managedEmp.salary;
            }
        }
        return subBonus;
    }
};

module.exports = Manager;
