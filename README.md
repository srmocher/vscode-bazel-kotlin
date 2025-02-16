# vscode-bazel-kotlin README
[![Bazel][bazel-img]][bazel-url] [![Kotlin][kotlin-img]][kotlin-url] [![VSCode][vscode-img]][vscode-url]

[bazel-img]: https://img.shields.io/badge/build%20with-Bazel-43A047.svg
[bazel-url]: https://bazel.build
[kotlin-img]: https://img.shields.io/badge/kotlin-%237F52FF.svg?style=flat&logo=kotlin&logoColor=white
[kotlin-url]: https://kotlinlang.org
[vscode-img]: https://img.shields.io/badge/VSCode-0078D4?style=flat&logo=visual%20studio%20code&logoColor=white
[vscode-url]: https://code.visualstudio.com

This extension is used to integrate a Bazel project with the [Kotlin language server](https://github.com/srmocher/kotlin-language-server-bazel). It's still early and work-in-progress.

## Features

- Automatically download the language server and keep it up to date.
- Sync Bazel packages on demand, and notify the language server
- Support auto-completion, Go-to-defintion, hover with source jars.
- Test explorer integration for Kotest based tests written with `DescribeSpec` style.

## Usage

Right-click on a directory and select "Bazel/Kotlin Sync". This will trigger a bazel build and activate the language server.

![image](./resources/usage.png)



## Configuration options

- `srmocher.kotlinLanguageServer.enabled`: Whether to enable the language server.
- `srmocher.kotlinLanguageServer.languageServerVersion`: The version of the language server to use. Defaults to `v0.0.1-rc` for now.
- `srmocher.kotlinLanguageServer.jvmOpts`: The JVM options to use when starting the language server.
