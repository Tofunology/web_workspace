# &diams;注意！&diams;
### 環境構築が重要です！
まだ環境構築をしていない人は，下の方にある「環境セットアップの下拵え」から順に環境構築をしましょう．<br>
環境構築は以下を参考にどうぞ．<br>

*****

<br>

# &clubs;基本的な作業手順
以下の手順を作業毎にやりましょう．<br>
なお，2,3に関しては繰り返しても構いませんが，<br>
1→2→3→2→4とかやると当然NGです．
1. masterへ移動して，最新の情報を取得
2. 作業ブランチを作って作業ブランチへ移動
3. 作業
4. ローカルの変更/追加をリモートに反映
5. masterへ戻る
6. プルリクを出す
7. ぎてふへ報告

# 1. masterへ移動して，最新の情報を取得
## 1-A. 情報を更新
`git pull`<br>
`git fetch origin master`
## 1-B. 各ファイルを最新の情報にリセット
`git reset --hard origin/master`<br>
<br>

# 2. 作業ブランチを作って作業ブランチへ移動
## 2-A. 作業するブランチ名の決定
<b>英数字を使いましょう</b><br>
全角を使った場合，命の保証はございません．<br>
例えば<br>
`MFT2020の7月の作業の様子`を記事に書きたいのなら，<br>
`makePost_MFT2020works7m`とかいかがでしょう？<br>
記事の修正なら<br>
`fixPost〜〜〜`って感じですかね．
## 2-B. ブランチの作成&移動
以下のコマンドで作成と移動を一気に行います．<br>
`git checkout -b ブランチ名`<br>
<br>

# 3. 作業
## &hearts; 記事の新規作成方法（ファイルパスに規則あり！）
web_workspaceディレクトリにいる状態で，以下のコマンドを打つことで記事を作ることができますが，わかりにくいですね．<br>
`hugo new ファイルパス`<br>
例をいくつか紹介します．
### 例：現在2112年！MFT2113の参加お知らせ記事を書きたい！
ファイルパスは必ず`post`から始まります．<br>
次に作成年度のフォルダを指定するので，`post/2112`<br>
次にイベント名を指定するので，`post/2112/MFT2113`<br>
最後に記事名+`.md`をつけるから，`post/2112/MFT2113/MFT2113_joinNotice.md`<br>

### 例：現在2221年！アップス縁日の参加報告記事を書きたい！
ファイルパスは必ず`post`から始まります．<br>
次に作成年度のフォルダを指定するので，`post/2221`<br>
次にイベント名を指定するので，`post/2221/upsEnnichi`<br>
最後に記事名+`.md`をつけるから，`post/2221/upsEnnichi/upsEnnichi_finished.md`<br>

## &hearts; 記事の編集方法
普通に書いてもらって大丈夫です．<br>
「記事の確認方法」を参考に，記事を書いたら絶対に確認してください．
### 書き方の参考
`content/post/example/hoge.md`を見てください．<br>
ビルト後のレイアウトがどうなるかは，<br>
「記事の確認方法」を参考にサーバーを起動したら，<br>
`http://localhost:1313/site/tmp/formatdemo/`で確認してください．<br>

## &hearts; 記事の確認方法
`hugo server -D -w`でサーバーを起動できます．<br>
その後に`http://localhost:1313/site/`にアクセスしてみましょう．<br>
<br>

# 4. ローカルの変更/追加をリモートに反映
## 4-A. 作成/変更したファイルを全てadd
`git add 作成/変更したファイル名`<br>
全て追加したい場合は，web_workspaceへ移動して以下のコマンドを実行．<br>
`git add *`<br>
## 4-B. addした記録をローカルに保存します．
`git commit -m "好きなコメント"`
## 4-C. ローカルのcommitをリモートに反映
`git push`<br>
<br>

# 5. masterへ戻る
以下のコマンドで戻りましょう．
`git checkout master`<br>
<br>

# 6. プルリクを出す
プルリク＝PullRequest<br>
## 6-A. サイトにアクセス
`https://github.com/Tofunology/web_workspace/pulls`へアクセス．
## 6-B. プルリクを作る
`New Pull Request`をクリック 
## 6-C. masterへプルリク
上部でmaster←作業ブランチ名となるようにして， `Create Pull Request`をクリック<br>
<br>

# 7. ぎてふへ報告
ぎてふへ「プルリクした」と連絡してください．<br>
確認して，mergeするか修正を依頼するか判断します<br>
<br>

*****

<br>

# もしtokenが必要と言われたら
次のリンクを参考に，入手して，ローカルに保存してください．<br>
https://docs.github.com/ja/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token

# もしpushできなかったら
`git pull`してからもう一度

<br>

*****

<br>

# &#9670; 環境セットアップの下拵え
## windowsの場合
　WSLの環境とVScodeの環境を整えましょう．<br>
　- 参考リンク：https://qiita.com/matarillo/items/61a9ead4bfe2868a0b86<br>
　VScodeの環境を整えよう（関係ない部分はスキップ）<br>
　- 参考リンク：https://tenshoku-miti.com/takeshi/windows10-vscode-ternimal-ubuntu/<br>
## macの場合
　homebrewを使えるようにしましょう．brewコマンドが使えれば問題ないです．基本的にはXcodeをインストールした後ならbrewを標準で使えると思います．<br>

# &#9670; HUGOのインストール
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

# &#9670; gitのインストール
## windows/linux系の場合
```sh
 sudo apt-get install git
```
## macの場合
```zch
 brew install git
```

# &#9670; githubに登録しよう
https://github.co.jp/ よりアカウントを作成してください．<br>
登録後，メールアドレスとユーザ名をぎてふに教えてください．
メールアドレスにinvitationが届くので，必ず承認してください．（承認後でないとログインできません）

# &#9670; gitのアカウント設定
自分のパソコンのターミナルでもgitのアカウントが使えるように設定しましょう．
```
git config --global user.name "ユーザー名"
git config --global user.email メールアドレス
```

# &#9670; 作業用リポジトリの作成
1. 作業をするフォルダでVScodeを開きましょう
1. `git clone https://github.com/Tofunology/web_workspace.git`する

# &#9670; これで完了です！
作業時はクローンしたフォルダをVscodeで開いて作業しましょう．また，作業前にぎてふに作業をしていいか確認を取りましょう．

<br>

*****
