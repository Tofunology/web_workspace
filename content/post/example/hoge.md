---
draft:      true #`hugo server -Dw`でドラフト記事も追加されます．完成したらfalseに
title:      "題名を書きましょう"
subtitle:   "Please Write This Title."
date:       1999-09-02 #もし未来のdateを登録すると，記事を見ることができません．
author:     "Gitefu" #みんながわかればOK
URL:        "/tmp/formatDemo/" # URL名を書きましょう(省略OK)
image:      "/images/post/2019/C97/finish/C97_1_gray.jpeg" #題名部分の背景画像
description:  "〜に開催される〜で〜を頒布しました！" #OGP関連，OGPやtwitterカードで検索すればわかる
thumbnail:  "/images/post/2019/C97/finish/C97_booth.jpg" #OGP関連，OGPやtwitterカードで検索すればわかる

tags:
    - コミックマーケット
    - 製作記
---

# post/example/hoge.mdを参考に
中を見ながらこの記事を読んでください．<br>
サイトは`hugo server -D -w`で立ち上げて確認してください．

*****
# 文字サイズは\#で変更できるよ！
## 文字サイズは\#で変更できるよ！
### 文字サイズは\#で変更できるよ！
#### 文字サイズは\#で変更できるよ！

*****

# 普通の文字
こんにちは！hogehogehoge
普通の文字はこんな感じ！
改行だけだと繋がっちまうぜ！

# 改行はbrタグで
改行するときはbrタグを入れましょう！<br>
文章1<br>文章2

# 強調構文
*強調1<br>*
**強調2<br>**
***強調3<br>***

# 文字色はHTML埋め込みで変更！
<font color="#F75940">赤色</font> <br>
<font color="#3DC7BE">青色</font> <br>
<font color="#00a03e">緑色</font> 

# 組み合わせも可能
**<font color="#F75940">boldな赤だぜ〜〜〜</font>** 

# コード埋め込み
## 文中の埋め込み
やるなら`こんな`感じ
## シンタックスハイライト
言語も指定できるお
```c
#include <stdio.h>
int main(void){
    return 0;
}
```

*****

# URLの書き方
## 単純にリンクを貼る方法
[tofunology](https://tofunology.github.io/site)
## iframelyでカードを貼る方法
まず，次のサイトでカードを作りましょう→[iframely](https://iframely.com/embed)<br>
次に埋め込みのHTMLを以下に貼りましょう．こうなります↓↓↓↓↓↓
<div class="iframely-embed"><div class="iframely-responsive" style="padding-bottom: 42.7344%; padding-top: 120px;"><a href="https://tofunology.github.io/site/2020/MFT2020/notice/works/" data-iframely-url="//cdn.iframe.ly/WyICFK6"></a></div></div><script async src="//cdn.iframe.ly/embed.js" charset="utf-8"></script>

# 画像の貼り方
static/images/postにフォルダを作って，入れてくださいな．<br>
貼る方法は2種類あるので好きに使ってくださいな．
## 単純な挿入
以下のように指定すると入ります．
{{< figure src="/images/post/2020/WS_1st/WS_OOP.jpeg" >}}
## load-photoswipeを使う方法
captionで文字を，linkで画像のURLを指定しましょう．<br>
サムネイルが気に入らない時は，元画像が`題名.png`なら`題名-thumb.png`的なものを用意して，`thumb="-thumb"`と書きましょう．<br>
開いた時，少し比率おかしくなる問題は調査中です，すまん！
{{< load-photoswipe >}}
{{< gallery hover-effect="grow" caption-position="center" caption-effect="fade" >}}
{{< figure link="/images/post/2020/WS_1st/WS_OOP.jpeg" thumb="-thumb" caption="センサーやアームを用いて クラス設計と共同開発を ーOOPとArduino共同開発" >}}
{{< figure link="/images/post/2020/WS_1st/WS_inventor.jpg" thumb="-thumb" caption="メンバーが作成したデータを Inventorで自由自在に閲覧・確認しよう ーInventorやぞ" >}}
{{< figure link="/images/post/2020/WS_1st/WS_kiCad.png" caption="実際に作成したPCBデータ (非同期2進カウンタ) ーイチから始める回路製作" >}}
{{< /gallery >}}

# Twitterも埋め込み可能！
リンクが`https://twitter.com/tofunology/status/1124185958625103874`なら以下のように！
{{< tweet 1124185958625103874 >}}
