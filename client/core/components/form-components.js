import Formsy from 'formsy-react';
import React from 'react';

export const Input = React.createClass({

  mixins: [Formsy.Mixin],

  changeValue(event) {
    this.setValue(event.currentTarget.value);
  },

  render() {
    let { type, name, placeholder, className, iconClass } = this.props;
    return (
      <div className="field">
        <div className={className}>
          <input onChange={this.changeValue} type={type} name={name} placeholder={placeholder} />
          <i className={iconClass}></i>
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
    return { value: [], cmp: (a, b) => a === b };
  },

  componentDidMount() {
    const value = this.props.value;
    this.setValue(value);
    this.setState({ value });
  },

  changeValue(value, event) {
    this.setValue(value);
    this.setState({ value });
  },

  renderItems(items) {
    return items.map((item, i) => (
      <radioItem item={item} i={i} value={this.state.value} changeValue={this.changeValue} />
    ))
  },

  render() {
    let { name, label, items, groupClass, radioClass } = this.props;
    return (
      <div ref="group" className={groupClass}>
        <label>{label}</label>
        {items.map((item, i) => (
          <div className="field">
            <div className={radioClass} key={i}>
              <input
                type="radio"
                name={name}
                onChange={this.changeValue.bind(this, item)}
                checked={this.state.value === item}
              />
              <label>{item}</label>
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
    let { name, label, items, groupClass, checkboxClass } = this.props;
    return (
      <div ref="group" className={groupClass}>
        <label>{label}</label>
        {items.map((item, i) => (
          <div className={checkboxClass} key={i}>
            <input
              type="checkbox"
              name={name}
              onChange={this.changeValue.bind(this, item)}
              checked={contains(this.state.value, item, this.state.cmp)}
            />
            <label>{item}</label>
          </div>
        ))
        }
      </div>
    )
  }
})

