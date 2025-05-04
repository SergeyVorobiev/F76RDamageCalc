let resources = null;
const useData = () => {
    console.log("useData");
    if (!resources) {
        resources = wrapPromise(new Promise((resolve, reject) => {
        console.log("Promise Created");
        setTimeout(() => {
            console.log("Promise resolving");
            resolve("success");
        }, 5000);
        }).catch((error) => {
            console.log("Error");
            throw error;
        })
    );
    }

    return resources.read();
};

function wrapPromise(promise) {
    let status = "pending";
    let result;
    const suspender = promise.then((r) => {
            status = "success";
            result = r;
        },
        (e) => {
            status = "error";
            result = e;
        }
    );
    return {
        read() {
            if (status === "pending") {
                console.log("pending");
                throw suspender;
                //return suspender;
            }
            if (status === "error") {
                console.log("error");
                return result;
            }
            console.log("Wrap Promise");
            return result;
        },
    };
}

export default function AsyncComponent() {
    console.log("AsyncComponent");
    const data = useData();

    console.log("AsyncComponentLoaded");
    return <h1>Loaded Content: {"g"}</h1>;
}