# insomnia-1password-variables
Insomnia plugin which allows providing secrets from 1password vaults


## Installation

* Install [1Password CLI](https://developer.1password.com/docs/cli/get-started/)


## Usage

Use a template tag named `1Password - Fetch secret`, then you'd need to provide 3 elements - Vault name, Secret name and the field of the secret.

The plugin would ask to unlock 1Password only during sending the requests. Secrets won't be decoded before they are needed.

![image](https://user-images.githubusercontent.com/1754812/232144502-6484d489-f96c-4d50-a439-4fba0bfb9945.png)



