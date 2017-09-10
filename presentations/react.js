// Import React
import React from "react";

// Import Spectacle Core tags
import {
  ComponentPlayground,
  BlockQuote,
  Cite,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Quote,
  Markdown,
  Code,
  CodePane,
  Slide,
  Text
} from "spectacle";

import Terminal from "spectacle-terminal";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
// import createTheme from "spectacle/lib/themes/default";
import theme from "../themes/seattlejs/index.js";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("../themes/seattlejs/index.css");
// Best way to include fonts rite


const images = {
  bg: require("../assets/bg_skyline.svg"),
  logo: require("../assets/logo-seattlejsconference.svg"),
  logoAlexa: require("../assets/logo-alexa.svg"),
  logoImdb: require("../assets/logo-IMDb.svg"),
  logoFormidable: require("../assets/logo-formidable.svg"),
  logoMicrosoft: require("../assets/logo-microsoft.svg"),
  logoZillow: require("../assets/logo-zillow.svg"),
  logoGalvanize: require("../assets/logo-galvanize.svg"),
  logoAppSheet: require("../assets/logo-appsheet.svg"),
  logoGoDaddy: require("../assets/logo-godaddy.svg"),
  logoNpm: require("../assets/logo-npm.svg"),
  logoSitepen: require("../assets/logo-sitepen.svg"),
  logoIndeed: require("../assets/logo-indeed.png"),
  logoOpenDoor: require("../assets/logo-opendoor.svg"),
  logoSheCodesNow: require("../assets/logo-shecodesnow.png"),
  logoSendGrid: require("../assets/logo-sendgrid.svg"),
  logoTwitter: require("../assets/logo-twitter.svg"),
  logoUnbounce: require("../assets/logo-unbounce.png"),
  logoJquery: require("../assets/logo-jquery.svg"),
  logoGmail: require("../assets/logo-gmail.png"),
  logoBabel: require("../assets/logo-babel.png"),
  logoWebpack: require("../assets/logo-webpack.png")
};

preloader(images);

const Header = (props) => <Heading lineHeight={1.4} style={{ marginBottom: "10px" }} size={2} {...props} />;


export default class Presentation extends React.Component {
  render() {

    return (
      <Deck
        progress="none"
        theme={theme}
        transition={["fade"]}
        transitionDuration={500}
      >
        <Slide>
          <Heading size={2}>React a Fundo</Heading>
        </Slide>
        <Slide>
          <Heading size={2}>Felipe Amorim</Heading>
        </Slide>
        <Slide>
          <Header>Elementos React</Header>
          <CodePane lang="js" source={require("raw-loader!../examples/react/react-element.example")} />
        </Slide>
        <Slide>
          <Header>Render!</Header>
          <CodePane lang="js" source={require("raw-loader!../examples/react/react-render.example")} />
        </Slide>
        <Slide>
          <Header>Componentes</Header>
          <CodePane lang="js" source={require("raw-loader!../examples/react/react-component.example")} />
        </Slide>
        <Slide>
          <Header>Props</Header>
          <CodePane lang="js" source={require("raw-loader!../examples/react/react-props.example")} />
        </Slide>
        <Slide>
          <Header>Children</Header>
          <CodePane lang="js" source={require("raw-loader!../examples/react/react-children.example")} />
        </Slide>
        <Slide>
          <Header>State</Header>
          <CodePane lang="js" source={require("raw-loader!../examples/react/react-state-basic.example")} />
        </Slide>
        <Slide>
          <Header>Lifecycle</Header>
          <CodePane lang="js" source={require("raw-loader!../examples/react/react-state-lifecycle.example")} />
        </Slide>
        <Slide>
          <Header>Eventos</Header>
          <CodePane lang="js" source={require("raw-loader!../examples/react/react-state-events.example")} />
        </Slide>
        <Slide>
          <Header>SyntheticEvent</Header>
          <CodePane lang="js" source={require("raw-loader!../examples/react/react-state-synth-event.example")} />
        </Slide>
        <Slide>
          <Header>State Merge</Header>
          <CodePane lang="js" source={require("raw-loader!../examples/react/react-state-merge.example")} />
        </Slide>
        <Slide>
          <Header>Render Condicional</Header>
          <CodePane lang="js" source={require("raw-loader!../examples/react/react-conditional.example")} />
        </Slide>
        <Slide>
          <Header>Render Ternário</Header>
          <CodePane lang="js" source={require("raw-loader!../examples/react/react-ternary.example")} />
        </Slide>
        <Slide>
          <Header>Render Binário</Header>
          <CodePane lang="js" source={require("raw-loader!../examples/react/react-binary.example")} />
        </Slide>
        <Slide>
          <Header>Listas</Header>
          <CodePane lang="js" source={require("raw-loader!../examples/react/react-list.example")} />
        </Slide>
        <Slide>
          <Header>Key</Header>
          <CodePane lang="js" source={require("raw-loader!../examples/react/react-list-key.example")} />
        </Slide>
        <Slide>
          <Header>Form</Header>
          <CodePane lang="js" source={require("raw-loader!../examples/react/react-form.example")} />
        </Slide>
        <Slide>
          <Header>Form Change</Header>
          <CodePane lang="js" source={require("raw-loader!../examples/react/react-form-change.example")} />
        </Slide>
        <Slide>
          <Header>Refs</Header>
          <CodePane lang="js" source={require("raw-loader!../examples/react/react-refs.example")} />
        </Slide>
        <Slide align="flex-start flex-start">
          <Header>Constructor</Header>
          <Text>Definir estado inicial</Text>
          <CodePane lang="js" source={require("raw-loader!../examples/react/react-lifecycle-constructor.example")} />
        </Slide>
        <Slide align="flex-start flex-start">
          <Header>componentDidMount</Header>
          <Text>Acessar o DOM</Text>
          <Text>Chamadas de rede</Text>
          <CodePane lang="js" source={require("raw-loader!../examples/react/react-lifecycle-cdm.example")} />
        </Slide>
        <Slide align="flex-start flex-start">
          <Header>componentWillReceiveProps</Header>
          <Text>Atualizar state síncronamente</Text>
          <CodePane lang="js" source={require("raw-loader!../examples/react/react-lifecycle-cwrp.example")} />
        </Slide>
        <Slide align="flex-start flex-start">
          <Header>shouldUpdateComponent</Header>
          <Text>Otimizar performance</Text>
          <CodePane lang="js" source={require("raw-loader!../examples/react/react-lifecycle-scup.example")} />
        </Slide>
        <Slide align="flex-start flex-start">
          <Header>componentWillUpdate</Header>
          <Text>Disparar eventos</Text>
          <CodePane lang="js" source={require("raw-loader!../examples/react/react-lifecycle-cwu.example")} />
        </Slide>
        <Slide align="flex-start flex-start">
          <Header>componentDidUpdate</Header>
          <Text>Chamadas de rede (se necessário)</Text>
          <CodePane lang="js" source={require("raw-loader!../examples/react/react-lifecycle-cdu.example")} />
        </Slide>
        <Slide align="flex-start flex-start">
          <Header>componentWillUnmount</Header>
          <Text>Limpeza</Text>
          <CodePane lang="js" source={require("raw-loader!../examples/react/react-lifecycle-cwun.example")} />
        </Slide>
        <Slide align="flex-start flex-start">
          <Header>componentWillUnmount</Header>
          <Text>Pegadinha!</Text>
          <CodePane lang="js" source={require("raw-loader!../examples/react/react-lifecycle-cwun-gotcha.example")} />
        </Slide>
      </Deck>
    );
  }
}
