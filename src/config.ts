import * as vscode from 'vscode';
import * as path from 'path';

export interface KotlinLanguageServerConfig {
    enabled: boolean;
    jvmTarget: '11' | '17';
    jvmOpts: string[];
    languageServerInstallPath: string;
    languageServerVersion: string;
    javaHome: string;
    languageServerLocalPath: string | null;
    debugAttachEnabled: boolean;
    debugAttachPort: number;
}


interface Config {
    kotlinLanguageServer: KotlinLanguageServerConfig;
}

export class ConfigurationManager {
    private static readonly SECTION = 'srmocher';
    private languageServerInstallPath: string;
    private config: vscode.WorkspaceConfiguration;

    constructor(storagePath: string) {
        this.languageServerInstallPath = path.join(storagePath, 'languageServer');
        this.config = vscode.workspace.getConfiguration(ConfigurationManager.SECTION);
    }

    getConfig(): Config {
        return {
            kotlinLanguageServer: {
                enabled: this.config.get('kotlinLanguageServer.enabled', true),
                jvmTarget: this.config.get('kotlinLanguageServer.compiler.jvmTarget', '11'),
                jvmOpts: this.config.get('kotlinLanguageServer.jvmOpts', []),
                languageServerInstallPath: this.languageServerInstallPath,
                languageServerVersion: this.config.get('kotlinLanguageServer.languageServerVersion', 'v1.3.14-bazel'),
                javaHome: this.config.get('kotlinLanguageServer.javaHome', ''),
                languageServerLocalPath: this.config.get('kotlinLanguageServer.path', null),
                debugAttachEnabled: this.config.get('kotlinLanguageServer.debugAttach.enabled', false),
                debugAttachPort: this.config.get('kotlinLanguageServer.debugAttach.port', 5005)
            }
        };
    }

    public async update(settings: Partial<Config>): Promise<void> {
        for (const [key, value] of Object.entries(settings)) {
            if (key === 'kotlinLanguageServer') {
                const kotlinSettings = value as KotlinLanguageServerConfig;
                for (const [kotlinKey, kotlinValue] of Object.entries(kotlinSettings)) {
                    await this.config.update(`kotlinLanguageServer.${kotlinKey}`, kotlinValue, vscode.ConfigurationTarget.Global);
                }
                continue;
            }
            await this.config.update(key, value, vscode.ConfigurationTarget.Global);
        }
    }

    public onDidChangeConfiguration(callback: (e: vscode.ConfigurationChangeEvent) => void): vscode.Disposable {
        return vscode.workspace.onDidChangeConfiguration(e => {
            if (e.affectsConfiguration(ConfigurationManager.SECTION)) {
                callback(e);
            }
        });
    }
}
