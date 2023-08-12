/* Данный код получает добавляет/удаляет класс в заданном элементе по клику на кнопке другого
* элемента. В стилях класса прописан параметр скрывающий элемент. */

let a = document.querySelectorAll('.course-program-button');

a.forEach((el) => {
    el.addEventListener('click', function () {
       return  (
           el.parentNode.parentNode.childNodes[3].classList.toggle('item-dn'),
         el.parentNode.parentNode.childNodes[5].classList.toggle('item-dn')
       );
    })
})

