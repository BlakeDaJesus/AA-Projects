const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);

const Employee = require('./employee');
const Manager = require('./manager');
const { beforeEach } = require('mocha');

describe('The calculateBonus(employee) method:', () => {
    let hobbes;
    let calvin;
    let susie;
    let lily;
    let clifford;

    beforeEach(() => {
        hobbes = new Manager('hobbes', 1000000, 'Founder');
        calvin = new Manager('calvin', 130000, 'Director', hobbes);
        susie = new Manager('susie', 100000, 'TA Manager', calvin);
        lily = new Employee('lily', 90000, 'TA', susie);
        clifford = new Employee('clifford', 90000, 'TA', susie);
    });

    describe('Employee.calculateBonus()', () => {
        it('should multiply the Employee\'s salary by a passed in multiplier', () => {
            expect(clifford.calculateBonus(0.05)).to.equal(4500);
        });
    })

    describe('Manager.calculateBonus()', () => {
        it('should multiply the Manager\'s salary + a total sub salary of employees under them by a passed in multiplier', () => {
            expect(susie.calculateBonus(0.05)).to.eql(14000);
            expect(calvin.calculateBonus(0.05)).to.eql(20500);
        });
    });

    describe('Manager._totalSubSalary()', () => {
        it('should be called in calculateBonus()', () => {
            const spy = chai.spy.on(hobbes, '_totalSubSalary');
            hobbes.calculateBonus();
            expect(spy).to.have.been.called();
        });

        context('if element in this.employees array is an instance of Manager', () => {
            it('should recursively call itself adding all sub-employee\'s salaries to a running sum', () => {
                const totalSubSalary = calvin._totalSubSalary();

                expect(totalSubSalary).to.eql(280000)
            });
        });
        context('if element in this.employees array is an instance of Employee', () => {
            it('should add the employee\'s salary to a running sum', () => {
                const totalSubSalary = susie._totalSubSalary();

                expect(totalSubSalary).to.eql(180000)
            });
        });
    });
})
