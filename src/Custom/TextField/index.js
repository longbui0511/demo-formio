import { TextField } from "@material-ui/core";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { ReactComponent } from "react-formio";
import settingsForm from "./TextFieldCT.settingsForm";

/**
 * An example React component
 *
 * Replace this with your custom react component. It needs to have two things.
 * 1. The value should be stored is state as "value"
 * 2. When the value changes, call props.onChange(null, newValue);
 *
 * This component is very simple. When clicked, it will set its value to "Changed".
 */
const TextFieldCustomComp = class extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      value: props.value,
      label: props.component.label
    };
    this.onChangeValue = props.onChange;
  }

  // setValue = (e) => {
  //   this.setState(
  //     (prevState) => e.target.value,
  //     () => this.props.onChange(null, this.state.value)
  //   );
  // };

  render() {
    return (
      <TextField
        label={this.state.label}
        value={this.state.value}
        onChange={this.onChangeValue}
        variant="outlined"
        fullWidth
      />
    );
  }
};

export default class TextFieldCT extends ReactComponent {
  /**
   * This function tells the form builder about your component. It's name, icon and what group it should be in.
   *
   * @returns {{title: string, icon: string, group: string, documentation: string, weight: number, schema: *}}
   */
  static get builderInfo() {
    return {
      title: "TextFieldCT",
      icon: "square",
      group: "Data",
      documentation: "",
      weight: -10,
      schema: TextFieldCT.schema()
    };
  }

  /**
   * This function is the default settings for the component. At a minimum you want to set the type to the registered
   * type of your component (i.e. when you call Components.setComponent('type', MyComponent) these types should match.
   *
   * @param sources
   * @returns {*}
   */
  static schema() {
    return ReactComponent.schema({
      type: "textFieldCustomComp",
      label: "Default Label"
    });
  }

  /*
   * Defines the settingsForm when editing a component in the builder.
   */
  static editForm = settingsForm;

  /**
   * This function is called when the DIV has been rendered and added to the DOM. You can now instantiate the react component.
   *
   * @param DOMElement
   * #returns ReactInstance
   */
  attachReact(element) {
    return ReactDOM.render(
      <TextFieldCustomComp
        component={this.component} // These are the component settings if you want to use them to render the component.
        value={this.dataValue} // The starting value of the component.
        onChange={this.updateValue} // The onChange event to call when the value changes.
      />,
      element
    );
  }

  /**
   * Automatically detach any react components.
   *
   * @param element
   */
  detachReact(element) {
    if (element) {
      ReactDOM.unmountComponentAtNode(element);
    }
  }
}
