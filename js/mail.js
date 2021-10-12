    // валидация и отправка формы

// window.addEventListener('DOMContentLoaded', function() {
// function validateForms(selector, rules, successModal, yaGoal) {
//   new window.JustValidate (selector, {
//     rules: rules,
//     submitHandler: function(contacts__form) {
//       let formData = new formData (contacts__form);

//       let xhr = new XMLHttpRequest ();

//       xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//           if (xhr.status === 200) {
//             console.log('Отправлено');
//           }
//         }
//       }

//       xhr.open('POST', 'mail.php', true);
//       xhr.send(formData);
//       contacts__form.reset();
//     }
//   })
// }

// validateForms('.contacts__form', { name: {required: true, minLength: 2, maxLength: 30, strength: {custom: '^[a-zA-Zа-яА-Я]+$'}}, tel: {required: true} }, { name: {required: 'Обязательное поле для заполнение'}, tel: {required: 'Обязательное поле для заполнение'} } );

// });
