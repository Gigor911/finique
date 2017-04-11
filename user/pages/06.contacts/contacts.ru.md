---
title: 'Контакты FINIQUE STUDIO. Заказать дизайн интерьера, архитектурный проект дома'
metadata:
    description: 'Контакты компании. Консультация по тел. 096 77 45 002'
menu: Контакты
form:
    name: contact
    fields:
        -
            name: name
            label: Имя
            placeholder: 'Введите имя'
            autocomplete: 'on'
            type: text
            validate:
                required: true
        -
            name: email
            label: Email
            placeholder: 'Введите email'
            type: email
            validate:
                required: true
        -
            name: phone
            label: Телефон
            placeholder: 'Введите телефон'
            type: text
            validate:
                required: true
        -
            name: message
            label: Сообщение
            placeholder: 'Введите сообщение'
            type: textarea
            validate:
                required: true
        -
            name: g-recaptcha-response
            label: Captcha
            type: captcha
            recatpcha_site_key: 6LfSjRUUAAAAACdPPe8yixuPiuV7bodG851K1uRi
            recaptcha_not_validated: 'Captcha not valid!'
            validate:
                required: true
    buttons:
        -
            type: submit
            value: Submit
    process:
        -
            captcha:
                recaptcha_secret: 6LfSjRUUAAAAAAXgdsfllX3HY7F4jrEiYJ8M2h4D
        -
            email:
                subject: '[Форма с сайта] {{ form.value.name|e }}'
                body: '{% include ''forms/data.html.twig'' %}'
        -
            save:
                fileprefix: contact-
                dateformat: Ymd-His-u
                extension: txt
                body: '{% include ''forms/data.txt.twig'' %}'
        -
            message: 'Спасибо, что связались с нами. Мы постараемся ответить в ближайшее время.'
---

