# emails-input

`emails-input` is an alternative for normal input type email with the following features

- Interactive adding emails to the input.
- Automatically validating inputs
- Generating removable email blocks
- Getting emails as an array from the API
- Adding emails to the component throw API
- No dependency to external libs

## Demo

the component [demo page](https://javadkh2.github.io/emails-input)

## installation

`emails-input` is available as an [npm package](https://www.npmjs.com/package/another-emails-input).

```
npm install another-emails-input
```

## Usage

It is possible to use the component as a global object.

```HTML
<script src="node_modules/another-emails-input/dist/emailInput.js"></script>
<div id="emails-input"></div>
<script>
    var container = document.getElementById('emails-input');
    var myEmailInput = EmailInput(container, { name:"my-email-input" });
    myEmailInput.addEmail("my@email.com");
    var count = myEmailInput.getEmailsCount();
    var list = myEmailInput.getEmails();
</script>
```

Using in forms

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

It is also possible to use the component as a module in your JS file

```javascript
import EmailInput from 'another-emails-input';

function subscribe(emails){
    console.log(emails)
}

const { addEmail, getEmailsCount, getEmails } = EmailInput(container, { name: 'my-email-input', subscribe });
```

## Parameters
`container` : its the container element that the component will be rendered there.
`options` : extra options to work with the component.
### Options
| name | type | default | description
|------|------|---------|------------
| name | string| `''` | input element name for sending data as form-data or reding input value in submit function
| list | string[]| `[]` | the initial emails list
| placeholder | `'add more people...'` |string | the place holder text 
| validator | `(email)=>boolean` | general email validator | overriding default email validator and pass your function
| baseClass | random name |string| override default style by passing base-class - *Note: the component doesn't support partial styling at the current version. So you should take care of all stylings if you pass baseClass*
| onChange | `(string[])=>void` | null | Subscribe to the email changes, you might need this functionality if you want to connect your component with frameworks state changes 

### Custom styling
if you pass baseClass the component you should add style based on the following classes. if you don't pass the baseClass then the component with generate a random class to prevent conflict with other styles.
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

