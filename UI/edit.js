Load();
var user = location.search.split('user=')[1];
    user=decodeURI(user);
var id = location.search.split('guid=')[1];
var obj = null;

function Init() {
    if (id != undefined) {
        for (let i = 0; i < photoPosts.length; i++) {
            if (photoPosts[i].id == id) {
                obj = photoPosts[i];
                break;
            }
        }
        document.getElementById("name").value = obj.name;
        document.getElementById("country").value = obj.country;
        document.getElementById("dosage").value = obj.dosage;
        document.getElementById("price").value = obj.price;
        document.getElementById("photoLink").value = obj.photoLink;
    }
    else if (id == undefined) {
        obj = new Object();
        obj.createdAt=new Date();
        id = Math.floor(Math.random() * 100000);

        for (let i = 0; i < photoPosts.length; i++) {
            if (photoPosts[i].id == id) {
                id = Math.floor(Math.random() * 100000);
                break;
            }
        }

        obj.id = id;
        obj.author = document.getElementsByClassName("name_surname")[0].innerHTML;
        photoPostsSource.push(obj);
        photoPosts.push(obj);
        document.getElementById("name").value = ArrOfNames;
        document.getElementById("country").value = 'Беларусь';
        document.getElementById("dosage").value = obj.dosage;
        document.getElementById("price").value = '10';
        document.getElementById("photoLink").value = 'url link';
    }
}

function Save(ss){
    obj.name = document.getElementById("name").value;
    obj.country = document.getElementById("country").value;
    obj.dosage = document.getElementById("dosage").value;
    obj.price = document.getElementById("price").value;
    obj.photoLink = document.getElementById("photoLink").value;
    obj.author=user;
    console.log(obj);
    PP.saveToStorage();
    alert('Пост сохранен.')
}
Init();
