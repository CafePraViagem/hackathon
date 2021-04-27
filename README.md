# Rotina de Commits no git
RepositórioTeste Café no Bule 
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRimgwN0yxiKDLmKa5dHz8Z8jq8IupAxz_3kQ&usqp=CAU" width="60px" alt="">


### Pegar o link do repositório a ser clonado e clonar o repositório em uma pasta de sua escolha
```
git clone link do repositório
```

<hr/>

## As linhas abaixo são uma rotina...
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
