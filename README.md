# 環境セットアップの下拵え
## windowsの場合
　WSLの環境とVScodeの環境を整えましょう．<br>
　- 参考リンク：https://qiita.com/matarillo/items/61a9ead4bfe2868a0b86<br>
　VScodeの環境を整えよう（関係ない部分はスキップ）<br>
　- 参考リンク：https://tenshoku-miti.com/takeshi/windows10-vscode-ternimal-ubuntu/<br>
## macの場合
　homebrewを使えるようにしましょう．brewコマンドが使えれば問題ないです．基本的にはXcodeをインストールした後ならbrewを標準で使えると思います．<br>

# HUGOのインストール
## windows/linux系の場合
```sh
 sudo apt update
 sudo apt upgrade
 sudo apt-get install hugo
```
## macの場合
```zch
 brew update
 brew upgrade
 brew install hugo
```

# gitのインストール
## windows/linux系の場合
```sh
 sudo apt-get install git
```
## macの場合
```zch
 brew install git
```

# githubに登録しよう
https://github.co.jp/ よりアカウントを作成してください．<br>
登録後，メールアドレスとユーザ名をぎてふに教えてください．
メールアドレスにinvitationが届くので，必ず承認してください．（承認後でないとログインできません）

# gitのアカウント設定
```
git config --global user.name "ユーザー名"
git config --global user.email メールアドレス
```

# 作業用リポジトリの作成
1. 作業をするフォルダでVScodeを開きましょう
1. `git clone https://github.com/Tofunology/web_workspace.git`する

# これで完了です！
作業時はクローンしたフォルダをVscodeで開いて作業しましょう．また，作業前にぎてふに作業をしていいか確認を取りましょう．

*****

# 新規記事作成
まずは，以下のコマンドで情報を更新します．<br>
`git pull`<br>
`git fetch origin master`<br>
次に，情報を最新のものにリセットします．<br>
`git reset --hard origin/master`<br>
web_workspaceディレクトリにいる状態で，以下のコマンドを打ちましょう．<br>
`hugo new post/記事名.md`

# 記事確認方法
`hugo server -w`でサーバーを起動できます．その後に`http://localhost:1313/site/`にアクセスしてみましょう．

# 記事のアップロード方法
まずは作成/変更した記事をaddしましょう．<br>
`git add 作成/変更したファイル名`<br>
次に変更を保存します．<br>
`git commit -m "好きなコメント"`<br>
最後にアップロード<br>
`git push`<br>
終えたら，ぎてふに更新した旨を伝えましょう．

# もしpushできなかったら
`git pull`してからもう一度
