interface CanRun {
    run(): void;
}

interface  CanFly {
    fly(): void;
}

interface  CanSwim {
    swim(): void;
}

abstract class Human implements CanRun, CanFly, CanSwim {
    run():void{
        throw new Error();
    };
    fly(): void {
        throw new Error("Human of Nibiru and Earth can't fly");
    }
    swim():void {
        throw new Error("Human of Nibiru can't swim");
    };
}

class HumanOfNibiru extends Human{
    run():void {
        console.log("Run");
    };
}

class HumanOfEarth extends Human{
    run(): void {
        console.log("Run");
    }
    swim(): void {
        console.log("Swim");
    }
}

class HumanOfKrypton extends Human{
    run(): void {
        console.log("Run");
    }
    swim(): void {
        console.log("Swim");
    }
    fly(): void {
        console.log("Fly");
    }
}

let earthling:HumanOfEarth = new HumanOfEarth();
earthling.run()
earthling.fly()




