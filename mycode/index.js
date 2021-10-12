function hello() {
    setTimeout(() => {
        console.log("Hello from docker node v2");
        hello();
        
    }, 5000);
}

hello();