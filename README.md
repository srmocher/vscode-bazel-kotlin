# vscode-bazel-kotlin README
[![Bazel][bazel-img]][bazel-url] [![Kotlin][kotlin-img]][kotlin-url] [![VSCode][vscode-img]][vscode-url]

[bazel-img]: https://img.shields.io/badge/build%20with-Bazel-43A047.svg
[bazel-url]: https://bazel.build
[kotlin-img]: https://img.shields.io/badge/kotlin-%237F52FF.svg?style=flat&logo=kotlin&logoColor=white
[kotlin-url]: https://kotlinlang.org
[vscode-img]: https://img.shields.io/badge/VSCode-0078D4?style=flat&logo=visual%20studio%20code&logoColor=white
[vscode-url]: https://code.visualstudio.com

This experimental extension is used to integrate a Bazel project with the [Kotlin language server](https://github.com/srmocher/kotlin-language-server-bazel). It's still early and work-in-progress.

## Features

- Automatically download the language server and keep it up to date.
- Sync Bazel packages on demand, and notify the language server
- Support auto-completion, Go-to-defintion, hover with source jars.
- Test explorer integration for Kotest based tests written with `DescribeSpec` style.

## Usage

Right-click on a directory and select "Bazel/Kotlin Sync". This will trigger a bazel build and activate the language server.

<img width="1161" alt="image" src="https://github.com/user-attachments/assets/5a65d23b-1d35-4238-8a8d-c09fa81bdbac" />


### Auto-completion

<img width="1154" alt="image" src="https://github.com/user-attachments/assets/734e927e-8abc-42e9-a538-a38977416a01" />


### Go-to-Definition

<img width="1154" alt="image" src="https://github.com/user-attachments/assets/7e843c41-acdf-47d0-911b-a1c6942b7201" />

### Hover

Also has support for showing KDoc.

<img width="1154" alt="image" src="https://github.com/user-attachments/assets/0297c883-7a1d-4d5f-bb51-0428426a6e51" />


## Configuration options

- `srmocher.kotlinLanguageServer.enabled`: Whether to enable the language server.
- `srmocher.kotlinLanguageServer.languageServerVersion`: The version of the language server to use. Defaults to `v1.3.14-bazel` for now.
- `srmocher.kotlinLanguageServer.jvmOpts`: The JVM options to use when starting the language server.
