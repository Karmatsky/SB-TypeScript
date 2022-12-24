class Job{
    constructor(private role:string, private _salary:number){
        this.role = role;
        this._salary = _salary;
    }

    public get salary():number{
        return this._salary
    }

    public work(personeName:string):string{
        return personeName + " сейчас работает как " + this.role;
    }
}

class Person{
    private _Job:Job;
    constructor (private name:string){
        this.name = name;
    }
    
    set Job(job:Job){
        if (job.salary < 0){
            throw new Error("Salary cannot be negative")
        }
        this._Job = job;
    }

    public getSalary():number{
        return this._Job.salary;
    }

    work(){
        return this._Job.work(this.name);
    }
}

let employee1:Person = new Person("Daniil");
let employee2:Person = new Person("Alex");
let job1:Job = new Job("footballer", 1000000);
let job2:Job = new Job("medic", 100);
employee1.Job = job1;
employee2.Job = job1;
console.log(employee2.getSalary(), job1.salary, employee1.work())
employee2.Job = job2;
console.log(employee2.getSalary(), job2.salary, employee2.work())




