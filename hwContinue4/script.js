// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.

// const fromIn = document.querySelector("#from");
// const spanFromIn = document.querySelector("span");

// fromIn.addEventListener("input", () => {
//   spanFromIn.textContent = fromIn.value;
// });

// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.
const messageBtn = document.querySelector(".messageBtn");
const message = document.querySelector(".message");
messageBtn.addEventListener("click", () => {
  message.classList.add("animate_animated");
  message.classList.add("animate_fadeInLeftBig");
  message.style.visibility = "visible";
});

// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.

const formControlEl = document.querySelectorAll(".form-control");
const button = document.querySelector(".subForm");
const error = ["Не заполнено поле 1", "Не выбрано значение в пункте 2"];
const form = document.querySelector("form");
console.log(form);

formControlEl[0].addEventListener("input", () => {
  if (formControlEl[0].value == "") {
    formControlEl[0].style.border = "3px solid green";
  }
});

formControlEl[1].addEventListener("input", () => {
  if (formControlEl[1].value == "") {
    formControlEl[1].style.border = "3px solid green";
  }
});

button.addEventListener("click", (e) => {
  let i = 0;
  e.preventDefault;
  formControlEl.forEach((element) => {
    if (element.value == "") {
      const errorText = document.createElement("p");
      errorText.textContent = error[i];
      element.insertAdjacentElement("afterend", errorText);
      element.style.border = "3px solid red";
      element.classList.add("error");
    }
    i++;
    element.classList.remove("error");
  });
  form.submit();
});
