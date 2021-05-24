let Views = new View();
class PostList {
    constructor(ArrOfNames) {
        this.ArrayOfNames = new Array(ArrOfNames);
    }
    saveToStorage() {
        localStorage.clear();
        for (let i = 0; i < photoPosts.length; i++) {
            let key =i;
            var serialItem = JSON.stringify(photoPosts[i]);
            localStorage.setItem(key, serialItem);
        }
    }
}

