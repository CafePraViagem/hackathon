# Rotina de Commits no git
RepositórioTeste


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

### 3 - Vamos subir as modificações para o github, dentro da mesma branch.
```
git add .
git commit -m "nome do commit"
git push --set-upstream origin nomeDaMinhaBranch

//ou apenas git push e ele vai devolver a linha de codigo correta pra você
```

## Bonus - Criando uma nova branch
```git checkout -b nomeDaBranch```
