# adquirencia
It is necessary to install the Cypress framework
What is this?
Cypress comes packaged as an npm module, which is all you need to get started.

After installing you'll be able to:

Open Cypress from the CLI
Run Cypress from the CLI
require Cypress as a module
Install
Requires Node version >= 4.0.0

npm install --save-dev cypress

npm-install

Install a package

SYNOPSIS

npm install (with no args, in package dir)
npm install [<@scope>/]<name>
npm install [<@scope>/]<name>@<tag>
npm install [<@scope>/]<name>@<version>
npm install [<@scope>/]<name>@<version range>
npm install <git-host>:<git-user>/<repo-name>
npm install <git repo url>
npm install <tarball file>
npm install <tarball url>
npm install <folder>

aliases: npm i, npm add
common options: [-P|--save-prod|-D|--save-dev|-O|--save-optional] [-E|--save-exact] [-B|--save-bundle] [--no-save] [--dry-run]
DESCRIPTION§
This command installs a package, and any packages that it depends on. If the package has a package-lock or shrinkwrap file, the installation of dependencies will be driven by that, with an npm-shrinkwrap.json taking precedence if both files exist. See package-lock.json and npm-shrinkwrap.

A package is:

a) a folder containing a program described by a package.json file
b) a gzipped tarball containing (a)
c) a url that resolves to (b)
d) a <name>@<version> that is published on the registry (see npm-registry) with (c)
e) a <name>@<tag> (see npm-dist-tag) that points to (d)
f) a <name> that has a “latest” tag satisfying (e)
g) a <git remote url> that resolves to (a)
Even if you never publish your package, you can still get a lot of benefits of using npm if you just want to write a node program (a), and perhaps if you also want to be able to easily install it elsewhere after packing it up into a tarball (b).

npm install (in package directory, no arguments):

Install the dependencies in the local node_modules folder.

In global mode (ie, with -g or --global appended to the command), it installs the current package context (ie, the current working directory) as a global package.

By default, npm install will install all modules listed as dependencies in package.json.

With the --production flag (or when the NODE_ENV environment variable is set to production), npm will not install modules listed in devDependencies.

Nesse documento estão listados as funções de login, cadastro de EC pessoa física e juridica bem como ativar os mesmos e ainda cadastrar vendedor.
