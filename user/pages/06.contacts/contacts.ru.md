---
title: 'Форма с картой'
metadata:
    description: 'Свяжитесь с нами. Здесь вы найдете все наши контактные данные и способы связи.'
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
    buttons:
        -
            type: submit
            value: Submit
    process:
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

