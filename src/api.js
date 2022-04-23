export const get = async() => {

    const method = 'GET';
    return (
        await fetch("https://superadmin.foodorder.rigt.org/api/global_settings.php?branchid=1", {
            method,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
        })
    ).json();
};