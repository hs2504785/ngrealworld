# How to manage multiple GitHub accounts on a single machine with SSH keys

https://www.freecodecamp.org/news/manage-multiple-github-accounts-the-ssh-way-2dadc30ccaca/

```
ssh-keygen -t rsa -C "hksinghgl@gmail.com"
pbcopy < ~/.ssh/id_rsa_gl.pub
ssh-add ~/.ssh/id_rsa_gl

// update /Users/hemant/.ssh/config
# Personal account, - the default config
Host github.com
   HostName github.com
   User git
   IdentityFile ~/.ssh/id_rsa

# Work account-1
Host github-gl
   HostName github.com
   User git
   IdentityFile ~/.ssh/id_rsa_gl

# Work Account 2
Host github-rekha
	  HostName github.com
	  User git
	  IdentityFile ~/.ssh/id_rsa_rekha

// configure user
git config user.name "Hemant"
git config user.email "hksinghgl@gmail.com"
```
