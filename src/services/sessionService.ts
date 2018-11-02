export function tryLogOn(username: string, password: string): Promise<void> {
    console.log("Trying to log on");
    return new Promise<void>((resolve, reject) => {
        setTimeout(() => {
            if (username === "admin" && password === "") {
                console.log("Success");
                resolve();
            } else {
                console.log("Failed");
                reject();
            }
        }, 2000)
    })
}