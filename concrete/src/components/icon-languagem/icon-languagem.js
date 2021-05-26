import "./icon-languagem.scss";

export default function iconLang(props) {
  const icon_url = [
    'angular',
    'babel',
    'clojure',
    'cobol',
    'dart',
    'elixir',
    'elm',
    'erlang',
    'go',
    'graphql',
    'grunt',
    'handlebars',
    'haskell',
    'html',
    'java',
    'javascript',
    'typescript',
    'swift',
    'vue',
    'react',
    'node',
    'json',
    'sass',
    'scss',
    'shell',
    'less',
    'python',
    'kotlin',
    'ruby',
    'docker',
    'dockerfile',
    'csharp',
  ];

  const _type = props.type.toLowerCase().trim().replace(/\s/g, "_");
  const type = icon_url.includes(_type) ? _type : "shell";

  const size = props.size || "30";

  const _class = `icon-lang icon-lang--${type} icon-lang--${size}`;
  return <div className={_class} title={type}></div>;
}
