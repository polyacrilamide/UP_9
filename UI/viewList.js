class View {
    view(post) {
        let dt = new Date(post.createdAt);
        let tmp = '<div class="item">' +
            '<div class="item-top">' +
                '<img src="images/account.png">' +
                    '<span class="fio">' + post.author + '</span>' +
                    '<span class="date">' + dt.getDay()+'/'+(dt.getMonth()+1)+'/'+dt.getFullYear() + '</span>' +
            '</div>' +
            '<div class="item-middle">' +
                '<div class="photo">' +
                    '<img src=" ' + post.photoLink + '">' +
                '</div>' +
                '<div class="text">' +
                    '<div class="p">Название:</div>' +
                    '<div classe="i">' + post.name + '</div>' +

                   '<div class="p">Страна:</div>' +
                   '<div class="i">' + post.country + '</div>' +

                    '<div class="p">Дозировка:</div>' +
                    '<div class="i">' + post.dosage + '</div>' +

                    '<div class="p">Цена:</div>' +
                    '<div class="i">' + post.price + '</div>' +
                '</div>' +
                '<div class="discription">' + post.description +
                '</div>' +
            '</div>' +
            '<div class="item-bottom">' +
                 '<img src="images/like.png" class="item_like" onclick="Like(this)">' +
                    '<a href="send_email.html"><img src="images/send.png"></a>';
         let el = document.getElementsByClassName("name_surname")[0];
         if (el.innerHTML ===post.author){
                 tmp += '<a href="post_edit.html?guid=' + post.id + '"><img src="images/edit.png"></a>' +
                 '<img src="images/delete.png" class="item_delete" onclick="del(this)">';
         }
        tmp += '</div>' + '</div>';
        return tmp;
    }

    showTenEl(first,last) {
        let tmp = '';
        for(let i=first;i<last;i++) {
            tmp += this.view(photoPosts[i]);
        }
        document.getElementsByClassName("right-list")[0].innerHTML = tmp;
    }
    showNew10El(){
        let el = document.getElementsByClassName("right-list")[0];
        let tmp = "";
        let size=el.childNodes.length;
        for(let i=size;i<Math.min(size+10, photoPosts.length);i++) {
                tmp += this.view(photoPosts[i]);
            }
        if(tmp.length>0) el.innerHTML += tmp;
    }

}


