# another-emails-input

**another-emails-input** is an `<input type="email" multiple>` but more fancy .

## Features

- Easily adding and removing emails.
- Automatically validating emails
- Easy API to use and to control
- No dependency 

## Demo

[Demo page](https://javadkh2.github.io/emails-input)

## installation

`another-emails-input` is available as an [npm package](https://www.npmjs.com/package/another-emails-input).

```
npm install another-emails-input
```

## Usage

Using the component as a global function.

```HTML
<script src="node_modules/another-emails-input/dist/emailInput.js"></script>
<div id="emails-input"></div>
<script>
    var container = document.getElementById('emails-input');
    var myEmailInput = EmailInput(container, { name:"my-email-input" });
    myEmailInput.addEmail("my@email.com");
    var count = myEmailInput.getValidEmailsCount();
    var list = myEmailInput.getValidEmails();
</script>
```

Using the component in forms

```HTML
<form onsumbit="onSubmit(e)">
    <label>first name:</label>
    <input name="first-name" />
    <label>Emails</label>
    <div id="emails-input"></div>
</form>
<script>
    EmailInput(document.getElementById('emails-input'), { name:"emails-input" });
    function onSumbit(e){
        var form = e.target;
        console.log({
            firstName: form['first-name'].value,
            emails: form['emails-input'].value,
        })
    }
</script>
```

using the component as a module

```javascript
import EmailInput from 'another-emails-input';

function onChange(emails){
    console.log(emails)
}

const { addEmail, getValidEmailsCount, getValidEmails, getItems } = EmailInput(container, { name: 'my-email-input', onChange });
```

## Parameters
* `container` : the component will be rendered there.
* `options` : extra options.
### Options
| name | type | default | description
|------|------|---------|------------
| name | string| `''` | input element name for sending data as form-data or reding input value in submit function
| list | string[]| `[]` | the initial emails list
| placeholder | `'add more people...'` |string | the place holder text 
| validator | `(string)=>boolean` | general email validator | overriding default email validator and pass your function
| baseClass | random name |string| override default style by passing base-class - *Note: the component doesn't support partial styling at the current version. So you should take care of all stylings if you pass baseClass*
| onChange | `(string[])=>void` | null | Email changes callback, you might need this functionality if you want to use the component in UI frameworks, 

## Output
the component return a tuple with folwoing items
* **addEmail** : it adds email to the component `(string)=> void`
* **getValidEmailsCount** : it returns emails count `()=> number`
* **getValidEmails** : it returns emails as an list `()=>string[]`
* **getItems** : it returns all items as an list `()=>Array<{email, isValid}>`


## Custom styling
By passing baseClass to the component you can override the default style. use the following classes to apply the custom style.
* `ei-component-wrapper` : main component wrapper 
* `ei-email-input` : the email input
* `ei-emails-wrapper`: emails part wrapper
* `ei-email-block` : each email block
* `ei-email-block.invalid`: invalid email block
* `ei-text` : email block text
* `ei-close`: close icon
* `ei-text-input`: main text input

```HTML
<style>
    .my-base-class .ei-component-wrapper {
        background: red;
    }
</style>
<script>
    var myEmailInput = EmailInput(container, { name:"my-email-input", baseClass: 'my-base-class' });
</script>
```

