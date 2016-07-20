export module con {
    export let log = (...obj: any[]) => {
        if (console === undefined) {
            return;
        }
        obj.map(function (elem) {
            switch (typeof elem) {
                case "number":
                    console.log(elem);
                    break;
                case "string":
                    console.log(elem);
                    break;
                default:
                    console['table'](elem) + console.log(JSON.stringify(elem));
                    break;
            }
        })

    }
}

