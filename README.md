# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Contributing

We welcome contributions, feel free to open a Pull Request with your suggested changes.  

## Instructions

### Installation

```
$ pnpm install
```

### Local Development

```
$ pnpm dev
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ pnpm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service (including `pnpm serve`).

### Deployment

Every push to the `master` branch will trigger the GitHub Actions workflow, thus building the site and deploying it a few minutes later.
