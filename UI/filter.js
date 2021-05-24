function Sorting(tt) {
    var filterConfig = new Object();
    if (document.getElementById("name").value.length > 0) filterConfig.name = document.getElementById("name").value;
    if (document.getElementById("country").value.length > 0) filterConfig.country = document.getElementById("country").value;
    if (document.getElementById("dosage").value.length > 0) filterConfig.dosage = document.getElementById("dosage").value;
    if (document.getElementById("price").value.length > 0) filterConfig.price = document.getElementById("price").value;
    let result = [];
    let kkey = Object.keys(filterConfig);

    for (let i = 0; i < photoPosts.length; i++) {
        let sum = 0;
        for (let k of kkey) {
                if (photoPosts[i][k] == filterConfig[k]) sum++;
        }
        if (sum == kkey.length)
            result.push(photoPosts[i]);
    }
    var dd = document.getElementsByClassName("right-list")[0];
    let tmp = "";
    for (let i = 0; i < result.length; i++) {
        tmp += Views.view(result[i]);
    }
    if (result.length == 0) dd.innerHTML = '<h1>По вашему запросу ничего не найдено</h1>';
     else dd.innerHTML = tmp;
}

