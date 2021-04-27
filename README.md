# Rotina de Commits
RepositórioTeste


## Pegar o link do repositório a ser clonado...

### clonar um repositório em uma pasta de sua escolha
```
git clone link do repositório
```

<hr/>

## As linhas abaixo são uma rotina...
### 1 - Começando o dia de trabalho, puxando as alterações da Main
```
git pull origin main

//mudando e criando uma nova branch para não alterar codigo alheio
git checkout -b minhaBranch
```
### 2 - Trabalhe como se não houvesse amanhã
## acabou?

### 3 - Vamos subir as modificações para o github, dentro da mesma branch
```
git add .
git commit -m "nome do commit"
git push --set-upstream origin minhBranch

//ou apenas git push e ele vai devolver a linha de codigo correta pra você
```

## Bonus - Mudando de branch
```git checkout nomeDaBranch```
