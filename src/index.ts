import {read, validateCli } from "@1password/op-js";

let onePasswordAvailable = false;


module.exports.templateTags = [{
    name: 'onePasswordSecret',
    displayName: '1Password - Fetch secret',
    description: 'Securely fetch secret from 1Password Vault',
    args: [
        {
            displayName: "Vault name",
            type: 'string',
            defaultValue: ""
        },
        {
            displayName: "Secret name",
            description: "provide secret name",
            type: 'string',
            defaultValue: ""
        },
        {
            displayName: "Secret component",
            description: "provide secret name",
            type: 'string',
            defaultValue: "credential"
        }
    ],

    async run (context, vaultPath, secretName, secretElement) {
        const {renderPurpose} = context;

        let secretPath = null;

        if (vaultPath && secretName && secretElement) {
            secretPath = `op://${vaultPath}/${secretName}/${secretElement}`;
        }

        if (renderPurpose == undefined) {
            return secretPath;
        }
        else if (renderPurpose === 'send' && secretPath) {
            console.log("Sending credential")
            return read.parse(secretPath);
        }


        if (secretPath) {
            try {
                return read.parse(secretPath);
            }
            catch(e) {
                return null
            }
        }
        return "Missing parameters";
    }
}];

let opIsValid = validateCli()

opIsValid.then(() => {
    console.log("op CLI is valid")
    onePasswordAvailable = true;
}
);
