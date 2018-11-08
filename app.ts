class HelloWorld {
    constructor(public message: string) {}
}

const hello = new HelloWorld('Hello TypeScript');
console.log(hello.message);
console.log('Hello Visual Studio Code');