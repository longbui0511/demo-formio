import logo from './logo.svg';
import './App.css';
import { FormBuilder, Components, Form } from "react-formio";
import components from "./Custom";

Components.setComponents(components);

function App() {
  return (
    <div className="App">
      {/* <FormBuilder
        form={{ display: "form" }}
        onChange={(schema) => console.log(JSON.stringify(schema.components[0]))}
        options={{
          builder: {
            basic: {
              components: {
                textFieldCustomComp: true
              }
            },
            advanced: false
          }
        }}
      /> */}
      <Form
        form={{
          components: [
            JSON.parse(`
            {"label":"Default Label","myCustomSetting":"","labelPosition":"top","description":"","tooltip":"","customClass":"","tabindex":"","hidden":false,"hideLabel":false,"autofocus":false,"disabled":false,"tableView":false,"modalEdit":false,"multiple":false,"persistent":true,"protected":false,"dbIndex":false,"encrypted":false,"redrawOn":"","clearOnHide":true,"customDefaultValue":"","calculateValue":"","calculateServer":false,"allowCalculateOverride":false,"validateOn":"change","validate":{"required":false,"customMessage":"","custom":"","customPrivate":false,"json":"","strictDateValidation":false,"multiple":false,"unique":false},"unique":false,"errorLabel":"","key":"defaultLabel","tags":[],"properties":{},"customConditional":"","conditional":{"json":"","show":null,"when":null,"eq":""},"logic":[],"attributes":{},"overlay":{"style":"","page":"","left":"","top":"","width":"","height":""},"type":"textFieldCustomComp","input":true,"placeholder":"","prefix":"","suffix":"","refreshOn":"","widget":null,"showCharCount":false,"showWordCount":false,"allowMultipleMasks":false,"id":"e9n70uu","defaultValue":null}
            `)
          ]
        }}
      />
    </div>
  );
}

export default App;
