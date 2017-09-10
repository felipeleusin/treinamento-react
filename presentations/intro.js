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
          <Heading size={2}>JavaScript Moderno</Heading>
        </Slide>
        <Slide>
          <Heading size={2}>Felipe Amorim</Heading>
        </Slide>
        <Slide>
          <Header>Um pouco de história...</Header>
          <Text>Desenvolvimento web era simples</Text>
          <Image src={images.logoJquery} />
        </Slide>
        <Slide align="flex-start flex-start">
          <Header>Uma página simples</Header>
          <CodePane lang="markup" source={require("raw-loader!../examples/old-web.html")} />
        </Slide>
        <Slide align="flex-start flex-start">
          <Header>Para uma internet simples?</Header>
          <Image width="100%" src={require("../assets/screens/globo-old.png")} />
        </Slide>
        <Slide align="flex-start flex-start">
          <Header>Uma página real</Header>
          <CodePane lang="markup" source={require("raw-loader!../examples/old-web-real.html")} />
        </Slide>
        <Slide>
          <Header>E a web mudou</Header>
          <Text>Saíram as páginas web</Text>
          <Text>Vieram as aplicações web</Text>
        </Slide>
        <Slide>
          <Header>Aplicações Web</Header>
          <Text>GMail, Google Docs, Cartola</Text>
        </Slide>
        <Slide>
          <Header>Frameworks</Header>
          <Text>Knockout, Angular, Backbone</Text>
        </Slide>
        <Slide>
          <Header>JavaScript</Header>
          <Text>Preso no passado.</Text>
          <Cite>"Eu programo jQuery"</Cite>
        </Slide>
        <Slide>
          <Header>Node.JS</Header>
          <Text>JavaScript no Servidor</Text>
          <Text>JavaScript na linha de comando!</Text>
        </Slide>
        <Slide>
          <Terminal title="1. felipe@mclovinbook" output={[
            "node",
            "const foo = (value) => value * 2;",
            "foo(2);",
            "4"
          ]}
          />
        </Slide>
        <Slide align="flex-start flex-start">
          <Header>ES 2015</Header>
          <CodePane lang="js" source={require("raw-loader!../examples/es-2015.example")} />
          <Text>E muito mais...</Text>
        </Slide>
        <Slide align="flex-start flex-start">
          <Header>Mas e o IE11?</Header>
          <Heading size={6}>(Safari 7, Android Browser)</Heading>
          <Text>Não dá para abandonar...</Text>
          <Image width="50%" src={images.logoBabel} />
          <Text>Ao resgate</Text>
        </Slide>
        <Slide>
          <Header>"Transpilation"</Header>
          <Image width="100%" src={require("../assets/screens/babel-es2015.png")} />
        </Slide>
        <Slide>
          <Header>JavaScript Compilado</Header>
          <Text>Permite usar funcionalidades mais modernas</Text>
          <Text>Vamos aprender o que podemos utilizar</Text>
        </Slide>
        <Slide align="flex-start flex-start">
          <Header>ES6 a fundo</Header>
          <Heading size={6}>Arrow Functions</Heading>
          <CodePane lang="js" source={require("raw-loader!../examples/es-arrow.example")} />
        </Slide>
        <Slide align="flex-start flex-start">
          <Header>ES6 a fundo</Header>
          <Heading size={6}>const</Heading>
          <CodePane lang="js" source={require("raw-loader!../examples/es-const.example")} />
        </Slide>
        <Slide align="flex-start flex-start">
          <Header>ES6 a fundo</Header>
          <Heading size={6}>Block Scope</Heading>
          <CodePane lang="js" source={require("raw-loader!../examples/es-block.example")} />
        </Slide>
        <Slide align="flex-start flex-start">
          <Header>ES6 a fundo</Header>
          <Heading size={6}>Template Strings</Heading>
          <CodePane lang="js" source={require("raw-loader!../examples/es-template.example")} />
        </Slide>
        <Slide align="flex-start flex-start">
          <Header>ES6 a fundo</Header>
          <Heading size={6}>Parâmetros de Funções</Heading>
          <CodePane lang="js" source={require("raw-loader!../examples/es-parameters.example")} />
        </Slide>
        <Slide align="flex-start flex-start">
          <Header>ES6 a fundo</Header>
          <Heading size={6}>Atalhos de Propriedades</Heading>
          <CodePane lang="js" source={require("raw-loader!../examples/es-shorthand.example")} />
        </Slide>
        <Slide align="flex-start flex-start">
          <Header>ES6 a fundo</Header>
          <Heading size={6}>Deestruturamento</Heading>
          <CodePane lang="js" source={require("raw-loader!../examples/es-destructuring.example")} />
        </Slide>
        <Slide align="flex-start flex-start">
          <Header>ES6 a fundo</Header>
          <Heading size={6}>Promises</Heading>
          <CodePane lang="js" source={require("raw-loader!../examples/es-promises.example")} />
        </Slide>
        <Slide align="flex-start flex-start">
          <Header>ES6 a fundo</Header>
          <Heading size={6}>Classes</Heading>
          <CodePane lang="js" source={require("raw-loader!../examples/es-classes.example")} />
        </Slide>
        <Slide align="flex-start flex-start">
          <Header>Babel + ES 2016</Header>
          <Text>A linguagem não ficou mais presa ao navegador</Text>
          <Text>TC39 <Link href="https://github.com/tc39/proposals" target="_blank">Propostas</Link></Text>
        </Slide>
        <Slide align="flex-start flex-start">
          <Header>ES 2016</Header>
          <Heading size={6}>Rest Properties</Heading>
          <CodePane lang="js" source={require("raw-loader!../examples/es-rest-properties.example")} />
        </Slide>
        <Slide align="flex-start flex-start">
          <Header>ES 2016</Header>
          <Heading size={6}>Async/Await</Heading>
          <CodePane lang="js" source={require("raw-loader!../examples/es-async-await.example")} />
        </Slide>
        <Slide align="flex-start flex-start">
          <Header>Webpack!</Header>
          <Image width="40%" src={images.logoWebpack} />
        </Slide>
        <Slide align="flex-start flex-start">
          <Header>Bundler</Header>
          <Image width="100%" src={require("../assets/screens/webpack-model.png")} />
        </Slide>
        <Slide>
          <Header>Módulos</Header>
          <CodePane lang="js" source={require("raw-loader!../examples/webpack.example")} />
        </Slide>
        <Slide>
          <Header>NPM</Header>
          <Text>Centenas de milhares de módulos</Text>
          <CodePane lang="js" source={require("raw-loader!../examples/webpack-npm.example")} />
        </Slide>
        <Slide>
          <Header>Loaders</Header>
          <CodePane lang="js" source={require("raw-loader!../examples/webpack-loader.example")} />
        </Slide>
        <Slide>
          <Header>Uma pausa</Header>
        </Slide>
        <Slide>
          <Header>React</Header>
          <CodePane lang="js" source={require("raw-loader!../examples/react-createelement.example")} />
        </Slide>
        <Slide>
          <Header>React + JSX</Header>
          <CodePane lang="js" source={require("raw-loader!../examples/react-intro.example")} />
        </Slide>
        <Slide align="flex-start flex-start">
          <Header>DOM</Header>
          <Image width="80%" src={require("../assets/screens/dom.png")} />
        </Slide>
        <Slide align="flex-start flex-start">
          <Header>VirtualDOM</Header>
          <Image width="80%" src={require("../assets/screens/virtual-dom.png")} />
        </Slide>
        <Slide align="flex-start flex-start">
          <Header>Component</Header>
          <CodePane lang="js" source={require("raw-loader!../examples/react-component.example")} />
        </Slide>
        <Slide align="flex-start flex-start">
          <Header>Props</Header>
          <CodePane lang="js" source={require("raw-loader!../examples/react-props.example")} />
        </Slide>
        <Slide align="flex-start flex-start">
          <Header>Eventos</Header>
          <CodePane lang="js" source={require("raw-loader!../examples/react-events.example")} />
        </Slide>
        <Slide align="flex-start flex-start">
          <Header>State</Header>
          <CodePane lang="js" source={require("raw-loader!../examples/react-state.example")} />
        </Slide>
        <Slide align="flex-start flex-start">
          <Header>Lifecycle</Header>
          <CodePane lang="js" source={require("raw-loader!../examples/react-lifecycle.example")} />
        </Slide>
        <Slide align="flex-start flex-start">
          <Header>Stateless</Header>
          <CodePane lang="js" source={require("raw-loader!../examples/react-intro.example")} />
        </Slide>
        <Slide align="flex-start flex-start">
          <Header>Input</Header>
          <CodePane lang="js" source={require("raw-loader!../examples/react-input.example")} />
        </Slide>
        <Slide align="flex-start flex-start">
          <Header>Playground</Header>
          <ComponentPlayground code={`
            function Button({ title }) {
              return (<button onClick={() => alert('Oi!')} type="button">{title}</button>)
            }
            render(<Button title="Clique em mim!" />, mountNode);
          `}
          />
        </Slide>
        <Slide align="flex-start flex-start">
          <Header>Composição</Header>
          <CodePane lang="js" source={require("raw-loader!../examples/react-composition.example")} />
        </Slide>
      </Deck>
    );
  }
}
