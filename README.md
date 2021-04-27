# RepositórioTeste Café no Bule 
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRimgwN0yxiKDLmKa5dHz8Z8jq8IupAxz_3kQ&usqp=CAU" width="60px" alt="">


### Clonar um reposítório...
1 - Criar uma pasta nova e nomear com algo que faça sentido rs
2 - Pegar o link do repositório a ser clonado. 
3 - Abrir um terminal do windows ou gitbash apontado para essa pasta.
4 - Usar o código abaixo para clonar o repositório dentro dessa pasta.
```
git clone link do repositório
```


## -----Rotina de Commits no git
### 1 - Começando o dia de trabalho, puxando as alterações da Main.
```
git pull origin main

//sair da Main e trocar de branch para não alterar codigo alheio
git checkout nomeDaMinhaBranch
git merge main
```
### 2 - Trabalhe como se não houvesse amanhã...  acabou?

### 3 - Vamos subir as modificações para o github, dentro da **mesma branch**.
```
git add .
git commit -m "nome do commit"
git push 

//Caso ele dê erro, observe que o próprio terminal te dá uma linha com o codigo correto parecida com essa abaixo:
git push --set-upstream origin nomeDaMinhaBranch

//Basta copiar e colar no terminal que ele envia as modificações...
```

## Bonus - Criando uma nova branch
```git checkout -b nomeDaBranch```
