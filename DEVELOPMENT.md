
# Conventions

## React Components

There are three ways to create a react component:

Pure function:
```
export default MyComponent = ({prop1, prop2}) => (
  <div>Hello {prop1} {prop2}</div>
)
```

React class:
```
export default class MyComponent extends React.Component {

  componentDidMount() {

  } // <-- Don't use commas

  render() {
    let { prop1, prop2 } = this.props;
    return (
      <div>Hello {prop1} {prop2}</div>
    )
  }
}
```

Alternative API to create a React class (required for using Mixins):
```
export default MyComponent = React.createClass({

  mixins: ['MyMixin'], // Mixins are only supported using React.createClass

  componentDidMount() {

  }, // <-- Don't forget commas

  render() {
    let { prop1, prop2 } = this.props;
    return (
      <div>Hello {prop1} {prop2}</div>
    )
  }
});
```

## Forms

Use the Formsy library `formsy-react`, which makes it easy to submit and validate data from forms.

Example:

```
<Formsy.Form onSubmit={(data)=>submitRegistration(data)} className="ui large form" >
  <Input name="email" placeholder="E-mail Address" iconClass="mail outline icon" className="ui left icon input" />
  <Checkboxes name="availability" label="When are you available?" groupClass="inline fields" checkboxClass="ui checkbox"
              items={[""]} />
  <Checkbox />
  <Radio name="color" label="What is your favorite color?" groupClass="inline fields" checkboxClass="ui radio checkbox"
                      items={["Red", "Green", "Blue"]} />
  <button className="ui fluid large teal submit button" type="submit">Login</button>
</Formsy.Form>
```

