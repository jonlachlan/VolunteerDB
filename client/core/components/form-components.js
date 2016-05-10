import Formsy from 'formsy-react';
import React from 'react';

export const Input = React.createClass({

  mixins: [Formsy.Mixin],

  componentWillMount() {
    let { initValue } = this.props;
    if(initValue) {
      this.setValue(initValue)
    }
  },

  changeValue(event) {
    this.setValue(event.currentTarget.value);
  },

  render() {
    let { type, name, label, placeholder, className, iconClass, actionClass, actionText} = this.props;
    return (
      <div className="field">
        {label ? <label>{label}</label> : null}
        <div className={className}>
          <input onChange={this.changeValue} type={type} name={name} placeholder={placeholder} />
          {iconClass ? <i className={iconClass}></i> : null }
          {actionClass || actionText ? <button className={actionClass}>{actionText}</button> : null}
        </div>
      </div>
    )
  }
});



export const TextArea = React.createClass({

  mixins: [Formsy.Mixin],

  changeValue(event) {
    this.setValue(event.currentTarget.value);
  },

  render() {
    let { name, label, placeholder, className, iconClass } = this.props;
    return (
      <div className="field">
        {label ? <label>{label}</label> : null}
        <div className={className}>
          <textarea onChange={this.changeValue} name={name} placeholder={placeholder} />
          {iconClass ? <i className={iconClass}></i> : null}
        </div>
      </div>
    )
  }
});

export const Checkbox = React.createClass({

  mixins: [Formsy.Mixin],

  componentDidMount() {
    $(this.refs.checkbox).checkbox()
  },

  getInitialState() {
    return { value: [], cmp: (a, b) => a === b };
  },

  componentDidMount() {
    const value = this.props.value || [];
    this.setValue(value);
    this.setState({ value: value, cmp: this.props.cmp || this.state.cmp });
  },

  componentDidReceiveProps(prevPros) {
    const { value } = this.props;
    this.setValue(value);
    this.setState({ value, cmp: this.props.cmp || this.state.cmp });
  },

  changeValue(value, event) {
    const checked = event.currentTarget.checked;

    let newValue = [];
    if (checked) {
      newValue = this.state.value.concat(value);
    } else {
      newValue = this.state.value.filter(it => !this.state.cmp(it, value));
    }

    this.setValue(newValue);
    this.setState({ value: newValue });
  },

  render() {
    let { type, name, label, tabindex, className } = this.props;
    return (
      <div className={className}>
        <div ref="checkbox" className="ui checkbox">
          <input onChange={this.changeValue} type="checkbox" name={name} tabindex={tabindex} />
          <label>{label}</label>
        </div>
      </div>
    )
  }
})

function contains(container, item, cmp) {
  for (const it of container) {
    if (cmp(it, item)) {
      return true;
    }
  }
  return false;
}

export const Radio = React.createClass({
  /* Based on example here: https://github.com/christianalfoni/formsy-react/blob/master/examples/components/RadioGroup.js
   Example Usage:
   <Radio name="availability" label="When are you available?" groupClass="inline fields" checkboxClass="ui radio checkbox"
   items={["Weekday Mornings", "Weekday Days", "Weekday Nights", "Weekday Mornings", "Weekend Days", "Weekend Nights"]} />

   */
  mixins: [Formsy.Mixin],

  componentDidMount() {
    $(this.refs.group).find('.checkbox').checkbox()
  },

  getInitialState() {
    let { items, initDefault } = this.props;
    let defaultValue = initDefault ? items[0].value : "";
    return { value: defaultValue, cmp: (a, b) => a === b };
  },

  componentDidMount() {
    const { value } = this.props;
    this.setValue(value);
    this.setState({ value });
  },

  componentDidReceiveProps(prevPros) {
    const { value } = this.props;
    this.setValue(value);
    this.setState({ value });
  },

  changeValue(value, event) {
    this.setValue(value);
    this.setState({ value });
  },

  render() {
    let { name, label, items, groupClass, itemClass, initDefault } = this.props;
    return (
      <div ref="group" className={groupClass}>
        <label>{label}</label>
        {items.map((item, i) => (
          <div className="field">
            <div className={itemClass} key={i}>
              <input
                type="radio"
                name={name}
                onChange={this.changeValue.bind(this, item.value)}
                checked={this.state.value === item.value || (i === 0 && initDefault)}
              />
              <label>{item.label}</label>
            </div>
          </div>
        ))}
      </div>
    )
  }
})

export const Checkboxes = React.createClass({
  /* Example:
   <Checkbox name="availability" label="When are you available?" groupClass="inline fields" checkboxClass="ui checkbox"
   items={["Weekday Mornings", "Weekday Days", "Weekday Nights", "Weekday Mornings", "Weekend Days", "Weekend Nights"]} />
   */
  mixins: [Formsy.Mixin],

  componentDidMount() {
    $(this.refs.group).find('.checkbox').checkbox()
  },

  getInitialState() {
    return { value: [], cmp: (a, b) => a === b };
  },

  componentDidMount() {
    const value = this.props.value || [];
    this.setValue(value);
    this.setState({ value: value, cmp: this.props.cmp || this.state.cmp });
  },

  componentDidReceiveProps(prevPros) {
    const { value } = this.props;
    this.setValue(value);
    this.setState({ value, cmp: this.props.cmp || this.state.cmp });
  },

  changeValue(value, event) {
    const checked = event.currentTarget.checked;

    let newValue = [];
    if (checked) {
      newValue = this.state.value.concat(value);
    } else {
      newValue = this.state.value.filter(it => !this.state.cmp(it, value));
    }

    this.setValue(newValue);
    this.setState({ value: newValue });
  },

  render() {
    let { name, label, items, groupClass, itemClass } = this.props;
    return (
      <div ref="group" className={groupClass}>
        <label>{label}</label>
        {items.map((item, i) => (
          <div className="field">
            <div className={itemClass} key={i}>
              <input
                type="checkbox"
                name={name}
                onChange={this.changeValue.bind(this, item.value)}
                checked={contains(this.state.value, item.value, this.state.cmp)}
              />
              <label>{item.label}</label>
            </div>
          </div>
        ))}
      </div>
    )
  }
})
