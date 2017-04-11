---
title: Contacts
metadata:
    description: 'Контакты компании. Консультация по тел. 096 77 45 002'
menu: Contacts
form:
    name: contact
    fields:
        -
            name: name
            label: Name
            placeholder: 'Enter your Name'
            autocomplete: 'on'
            type: text
            validate:
                required: true
        -
            name: email
            label: Email
            placeholder: 'Enter email'
            type: email
            validate:
                required: true
        -
            name: phone
            label: Phone
            placeholder: 'Enter Phone number'
            type: text
            validate:
                required: true
        -
            name: message
            label: Message
            placeholder: 'Enter message'
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
                subject: '[Form from EN site] {{ form.value.name|e }}'
                body: '{% include ''forms/data.html.twig'' %}'
        -
            save:
                fileprefix: contact-
                dateformat: Ymd-His-u
                extension: txt
                body: '{% include ''forms/data.txt.twig'' %}'
        -
            message: 'Thank you for contacting us! We will reply soon'
---

