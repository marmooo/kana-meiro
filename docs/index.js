const remSize=parseInt(getComputedStyle(document.documentElement).fontSize);const tmpCanvas=document.createElement('canvas');let size=10;let meiro=new Array(12);let score=0;let counter=0;let processed;const k3='ブログ,サイト,リンク,トップ,エリア,ボタン,ホテル,リスト,ゲスト,グルメ,ヘルプ,ネット,プラン,テレビ,ペット,カメラ,ガイド,アップ,ウェブ,バイト,バイク,サイズ,セット,ファン,ランク,ソフト,ビデオ,ゴルフ,メイン,コラム,タウン,レシピ,アニメ,チラシ,レベル,コピペ,ドラマ,ヒット,フォト,マップ,タイプ,キレイ,クリア,ストア,トイレ,モデル,コチラ,ゲット,スキル,ギフト,ライブ,カット,プレイ,ピアノ,ベスト,マンガ,ベッド,ウィキ,ランチ,プラス,アジア,コスメ,グッズ,サロン,エステ,マウス,スパム,ホント,ヘルス,キッズ,グラフ,テスト,キャラ,ヒント,ガラス,マッチ,カフェ,ポスト,セブン,ワイン,テニス,クラブ,イエス,カッコ,レンジ,サイン,アレゲ,ラジオ,アプリ,カラダ,パック,シフト,クイズ,ハヤテ,リスク,ドイツ,スコア,コスト,タバコ,ススメ,カキコ,リアル,バック,テント,ライフ,クラス,バッグ,マイル,メトロ,アナタ,ソナタ,クルマ,ステキ,バブル,ハワイ,ヘッダ,ドック,ロック,ピアス,ネゴト,バンク,トマト,ネスト,トライ,タイヤ,オトク,ピンク,オペラ,シゴト,ホット,リズム,インド,ブック,ラベル,マイク,イラク,プロフ,サクラ,ベンチ,コンビ,ホムペ,エッチ,シルク,ヒミツ,ネック,タオル,バンド,メイク,センス,ココロ,メガネ,フェス,ハウス,メンテ,スイス,ピンチ,シェア,パスタ,フェア,ミセス,ロシア,コラボ,ドレス,ゴメン,ライン,タッグ,カナダ,オトコ,キング,カタチ,ニヤリ,バトン,ハガキ,ロミオ,プラザ,マスク,アイヌ,シニア,パンツ,エンタ,マニア,タッチ,コダマ,コンペ,メイド,ワイド,ダウン,セレブ,コイン,グアム,シャレ,デスク,ウンチ,コトバ,ユダヤ,オトナ,オヤジ,コミュ,ロフト,セリフ,ネズミ,プレス,ダイヤ,セフレ,アキバ,ソウル,マット,ノック,アラブ,シティ,モンク,ヒック,シネマ,リンパ,ズボン,ジャズ,ホクロ,アロマ,ダンス,シェフ,ホタル,リング,ナイフ,チップ,アヒル,ヘッジ,キムチ,モダン,ラップ,ヤマト,メタボ,サラダ,ビット,リボン,ボット,シャツ,メッセ,ロマン,コップ,ワキガ,ズラリ,ハンパ,ホスト,シンポ,ナイス,サイド,ウエア,ボディ,マグロ,ソファ,ミサキ,サプリ,パネル,ピント,キッス,セルフ,サウナ,センチ,ウロコ,スゴイ,カバン,コタツ,パンフ,イラン,アイス,リフト,ロング,ミナミ,ハッチ,ジャム,ニオイ,ピュア,ケンカ,ニャン,オタク,ガイア,オッズ,ライト,モニタ,ジャケ,パズル,フライ,タンゴ,タンス,グッド,カッパ,ベット,バナナ,ピット,デッキ,トラバ,タイム,トルコ,クロス,コンロ,アタシ,エデン,チョコ,ランド,ロット,レンズ,ポット,グラス,ピック,モラル,シグマ,ラスト,バレエ,パンク,チャリ,エキス,テラス,リトル,メロン,オミセ'.split(',');const k4='コメント,クリック,ログイン,クチコミ,チェック,ポイント,カテゴリ,ブラウザ,アクセス,ジャンル,イベント,スレッド,スポット,タイトル,ビジネス,レンタル,ショップ,スタッフ,パソコン,システム,オススメ,メルマガ,アドレス,モバイル,スキップ,コンビニ,ファイル,デザイン,トピック,バランス,テキスト,オフィス,イラスト,トラブル,アイテム,アルバム,デジタル,ジャンプ,アメリカ,トラベル,スタイル,アマゾン,ビックリ,コミック,キッチン,メリット,カタログ,ピッタリ,メディア,ドライブ,クリップ,ツッコミ,トラック,アイコン,サンプル,フォルダ,チケット,キャリア,ショック,シンプル,フレッツ,ブランド,カタカナ,クイック,カンタン,ドラッグ,チョット,ドメイン,レッスン,チャンス,ノウハウ,ブックス,エンジン,イキイキ,ニコニコ,カラメル,ネクスト,カラオケ,イレブン,フランス,エントリ,ストレス,ボックス,エアコン,キャンプ,ビタミン,アパレル,ブロック,ドリンク,パノラマ,ホルモン,アイドル,ワクワク,オシゴト,プリント,スイッチ,オシャレ,スッキリ,アレンジ,コトノハ,イタリア,ポケット,マイナス,マガジン,マスコミ,シンボル,メッシュ,スカウト,ドキドキ,ブラジル,デジカメ,イマイチ,アイデア,タレント,ボロボロ,ウォッチ,ウィルス,プラチナ,ハッキリ,キリスト,カウント,カップル,ランダム,フラット,イライラ,ニッポン,スタジオ,フレンド,トンネル,バラバラ,ジャパン,ベトナム,シンクロ,キャディ,ヨロシク,アダルト,プリンタ,セレクト,ウロウロ,イギリス,シングル,ガソリン,トレンド,ブレンド,アンテナ,ボコボコ,キャスト,キラキラ,ペディア,スペイン,エッセイ,ストップ,テナント,ブラック,ライバル,バタバタ,アルプス,パチンコ,ダイヤル,ドロップ,ガッツリ,エディタ,イマドキ,モノクロ,チョイス,インフラ,プロセス,パチスロ,フロント,ゴロゴロ,ミックス,ミネラル,パニック,プライス,イケメン,スパイス,ウイルス,フレンチ,インフォ,レッテル,サンクス,リセット,ミサイル,スペック,キャッチ,ディップ,ドラゴン,プライド,ブランク,ストック,フォント,ソムリエ,メキシコ,リットル,リウマチ,フィット,シナリオ,コマンド,ファンド,アフリカ,ドシドシ,グラビア,フィルム,チャット,ハイフン,トラウマ,アニマル,カクテル,ハチミツ,ゴキブリ,リストラ,シグナル,シロアリ,ロボット,オオカミ,ポップス,オレンジ,スライド,オッサン,ポッコリ,ギリシャ,マラソン,エクステ,ソフィア,スタンプ,ステップ,オランダ,ケアマネ,ハイテク,フレンズ,ラクラク,サントラ,プリンス,サクサク,ワクチン,アトリエ,ハンドル,ベランダ,リビング,モノサシ,モヤモヤ,ホイホイ,ガッチリ,ヘルニア,コショウ,スリッパ,リバブル,キャップ,スイスイ,チャイム,カリスマ,キャベツ,オンエア,アラビア,ギリギリ,エジプト,カスタム,トリビア,サミット,ベタベタ,タレコミ,キョトン,ガッカリ,ファイト,ビビンバ,オムレツ,ネクタイ,ディスク,チベット,サウンド,バッチリ,グルグル,ニヤニヤ,ギャング,ジョブズ,ブラウズ,プリズム,エンピツ,プンプン,アジアン,パロディ,ピリオド,ロケット,リメイク,スライス,ダラダラ,ペルシャ,シリアル'.split(',');const k5='マンション,ランキング,レストラン,アルバイト,コンテンツ,プレゼント,キャンセル,オンライン,ウォレット,ウィンドウ,アドバイス,ダイエット,ライセンス,クリニック,マイリスト,チャレンジ,インテリア,アウトドア,アカウント,プログラム,サムネイル,オプション,ヘルスケア,ログアウト,ヘアサロン,プレミアム,サインイン,リクエスト,タイミング,エンジニア,オリジナル,コンテスト,リサイクル,クラシック,キャッシュ,ペンション,トピックス,ウインドウ,コンセプト,チャンネル,バラエティ,リラックス,ハイキング,パキスタン,バスケット,レイアウト,ジャケット,マニュアル,クリスマス,フィギュア,アクセント,フライパン,スクリプト,クレジット,ブライダル,ダイビング,リサイタル,イタリアン,サジェスト,プロバイダ,テクニック,テンション,コンパクト,トライアル,スタジアム,グランプリ,メディカル,インパクト,エスニック,キャンパス,スペシャル,セグメント,カルシウム,ボクシング,ギャンブル,コンタクト,アナリスト,タイムラグ,ランニング,ノルウェイ,サイエンス,アナウンス,ベルサイユ,タイアップ,フットケア,バイキング,ワシントン,ハプニング,アイディア,トッピング,ダイレクト,プログラマ,コミックス,セッション,スクウェア,ガスコンロ,メカニズム,リスペクト,パイオニア,サプライズ,デフォルト,ラッピング,フラッシュ,パラダイム,プリペイド,ダイニング,インライン,ヘルメット,エンジョイ,クオリティ,スケルトン,ナチュラル,ビッグバン,キャロット,インプット,リポジトリ,フルボッコ,ファックス,テクニカル,プルダウン,ポジション,レバレッジ,ビジュアル,エレガント,オムライス,スクラップ,リコメンド,ダンジョン,セクション,レコメンド,デメリット,レスポンス,スティック,ファミレス,アクション'.split(',');const k6='ショッピング,ウェブサイト,ガイドライン,セキュリティ,コミュニティ,ファッション,リアルタイム,ボランティア,ピックアップ,バックアップ,プレイリスト,ソフトウェア,メンテナンス,コレクション,サプリメント,プロジェクト,ライトアップ,タグクラウド,カスタマイズ,ワンポイント,チェックイン,インデックス,スタイリスト,ラインナップ,ウエディング,シンポジウム,オリンピック,パンフレット,フィッシング,ネットストア,クリッピング,フレグランス,アシスタント,マニフェスト,オンデマンド,ディレクトリ,ビジネスマン,ガイドブック,ディスプレイ,ダイジェスト,セレクション,テイクアウト,マネジメント,リフレッシュ,フィクション,インスパイア,リストアップ,ウェディング,ハンドブック,ヴァイオリン,アルゴリズム,ヘアスタイル,エクスプレス,チャンピオン,ダイヤモンド,エクササイズ,ハイブリッド,トップクラス,プラスチック,クチュクチュ,サンドイッチ,セッティング,インドネシア,レファレンス,アライアンス,インスパイヤ,カリキュラム,クライアント,コントラスト,ファンクラブ,トレッキング,オフィシャル,アウトレット'.split(',');const idiomsList=[k3,k4,k5,k6];let idioms=[].concat.apply([],idiomsList);const words='アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンヴガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポァィゥェォッャュー'.split('');let level=4;function loadConfig(){if(localStorage.getItem('darkMode')==1){document.documentElement.dataset.theme='dark';}}
loadConfig();function getRandomInt(min,max){min=Math.ceil(min);max=Math.floor(max);return Math.floor(Math.random()*(max-min))+min;}
function shuffle(array){for(let i=array.length-1;i>=0;i--){let rand=Math.floor(Math.random()*(i+1));[array[i],array[rand]]=[array[rand],array[i]]}
return array;}
function calcReply(){var reply=new Array(size*size);var trs=document.getElementById('meiro').children;for(var x=0;x<size;x++){var tds=trs[x].children;for(var y=0;y<size;y++){var selected=tds[y].classList.contains('table-primary');var hinted=tds[y].classList.contains('table-secondary');var pos=meiro[x][y];if(pos>0&&(selected||hinted)){reply[pos-1]=tds[y].innerText;}}}
return reply;}
function findMeiroIndex(n){for(var x=0;x<size;x++){for(var y=0;y<size;y++){if(meiro[x][y]==n){return x*size+y;}}}
return-1;}
function prependIdiomLink(idiom,correct){var a=document.createElement('a');a.innerText=idiom;a.href='https://www.google.com/search?q='+idiom+'とは';a.target='_blank';a.rel='noopener noreferer';if(correct){a.className='btn btn-light m-1';}else{a.className='btn btn-secondary m-1';}
solvedPanel.prepend(a);}
function showSolved(reply,hinted){var solvedPanel=document.getElementById('solvedPanel');var trs=document.getElementById('meiro').children;var j=0;var k=0;for(var i=0;i<counter;i++){var idiom=idioms[j];if(!processed[i]){if(reply[i]==idiom[k]){if(k==idiom.length-1){prependIdiomLink(idiom,true);score+=idiom.length;document.getElementById('score').innerText=score;}
processed[i]=true;}else{prependIdiomLink(idiom,false);var pos=i-k;for(var l=pos;l<pos+idiom.length;l++){processed[l]=true;var idx=findMeiroIndex(l+1);var td=trs[Math.floor(idx/size)].children[idx%size];td.className='';td.classList.add('table-secondary');}
if(hinted){break;}}}
if(k==idiom.length-1){j+=1;k=0;}else{k+=1;}}}
function showHint(reply){var reply=calcReply();showSolved(reply,true);}
function showAnswer(){var reply=calcReply();showSolved(reply,false);var trs=document.getElementById('meiro').children;for(var x=0;x<size;x++){var tds=trs[x].children;for(var y=0;y<size;y++){if(meiro[x][y]>0){tds[y].className='';tds[y].classList.add('table-danger');}}}
var startButton=document.getElementById('startButton');startButton.classList.remove('d-none');startButton.innerText='スタート';var answerButton=document.getElementById('answerButton');answerButton.classList.add('d-none');}
function getNeighborText(trs,x,y,direction){var text=trs[x].children[y].innerText;if(direction==1){if(meiro[x-1][y]!=0){text+=trs[x-1].children[y].innerText;}}else if(direction==2){if(meiro[x+1][y]!=0){text+=trs[x+1].children[y].innerText;}}else if(direction==3){if(meiro[x][y-1]!=0){text+=trs[x].children[y-1].innerText;}}else{if(meiro[x][y+1]!=0){text+=trs[x].children[y+1].innerText;}}
return text;}
function setNeighborText(trs,x,y,direction,text,isAnswer){if(!isAnswer){trs[x].children[y].innerText=text[0];}
if(direction==1){trs[x-1].children[y].innerText=text[1];}else if(direction==2){trs[x+1].children[y].innerText=text[1];}else if(direction==3){trs[x].children[y-1].innerText=text[1];}else{trs[x].children[y+1].innerText=text[1];}}
function generateRandomText(text,isAnswer){if(isAnswer){var first=text[0];for(var i=0;i<5;i++){text=first+words[getRandomInt(0,words.length)];if(!includeIdiom(text)){return text;}}}else{for(var i=0;i<5;i++){for(var j=0;j<2;j++){text[j]=words[getRandomInt(0,words.length)];}
if(!includeIdiom(text)){return text;}}}
return text;}
function includeIdiom(text){if(idioms.includes(text.slice(0,2))){return true;}else{return false;}}
function strictNeighbor(trs,x,y,direction,isAnswer){var text=getNeighborText(trs,x,y,direction);if(text.length==2){text=generateRandomText(text,isAnswer);setNeighborText(trs,x,y,direction,text,isAnswer);}}
function strictSolution(){var trs=document.getElementById('meiro').children;for(var x=0;x<size;x++){for(var y=0;y<size;y++){if(meiro[x][y]==0){if(0<=x-1){strictNeighbor(trs,x,y,1,false);}
if(x+1<size){strictNeighbor(trs,x,y,2,false);}
if(0<=y-1){strictNeighbor(trs,x,y,3,false);}
if(y+1<size){strictNeighbor(trs,x,y,4,false);}}else{var routes=getNeighborRoutes(x,y);for(var j=0;j<routes.length;j++){strictNeighbor(trs,x,y,routes[j][2],true);}}}}}
function startGame(){while(solvedPanel.firstChild){solvedPanel.removeChild(solvedPanel.firstChild);}
generateGame();strictSolution();var startButton=document.getElementById('startButton');startButton.classList.add('d-none');startButton.innerText='やり直し';var answerButton=document.getElementById('answerButton');answerButton.classList.remove('d-none');}
function isPassableRoute(x,y,routes){if(routes.length==4){return true;}else if(routes.length==3){if(x==0||x==size-1||y==0||y==size-1){return true;}}
return false;}
function isPassableNeighbor(x,y,routes){if(routes.length>=3){return true;}else if(routes.length==2){if(x==0||x==size-1||y==0||y==size-1){return true;}}
return false;}
function getRoute(x,y,direction,n){var directions=shuffle([1,2,3,4]);var tmpRoutes=getNeighborRoutes(x,y);if(!isPassableNeighbor(x,y,tmpRoutes)){return false;}
for(var d=0;d<directions.length;d++){if(directions[d]==1&&0<=x-n&&direction!=2){var passable=true;for(var i=1;i<=n;i++){tmpRoutes=getNeighborRoutes(x-i,y);if(!isPassableRoute(x-i,y,tmpRoutes)){passable=false;break;}}
if(passable){return[x-1,y,1];}}
if(directions[d]==2&&x+n<size&&direction!=1){var passable=true;for(var i=1;i<=n;i++){tmpRoutes=getNeighborRoutes(x+i,y);if(!isPassableRoute(x+i,y,tmpRoutes)){passable=false;break;}}
if(passable){return[x+1,y,2];}}
if(directions[d]==3&&0<=y-n&&direction!=4){var passable=true;for(var i=1;i<=n;i++){tmpRoutes=getNeighborRoutes(x,y-i);if(!isPassableRoute(x,y-i,tmpRoutes)){passable=false;break;}}
if(passable){return[x,y-1,3];}}
if(directions[d]==4&&y+n<size&&direction!=3){var passable=true;for(var i=1;i<=n;i++){tmpRoutes=getNeighborRoutes(x,y+i);if(!isPassableRoute(x,y+i,tmpRoutes)){passable=false;break;}}
if(passable){return[x,y+1,4];}}}
return false;}
function getNeighborRoutes(x,y){var routes=[];if(0<=x-1&&meiro[x-1][y]==0){routes.push([x-1,y,1]);}
if(x+1<size&&meiro[x+1][y]==0){routes.push([x+1,y,2]);}
if(0<=y-1&&meiro[x][y-1]==0){routes.push([x,y-1,3]);}
if(y+1<size&&meiro[x][y+1]==0){routes.push([x,y+1,4]);}
return routes;}
function paint(x,y,direction,n){if(direction==1){for(var i=0;i<n;i++){counter+=1;meiro[x-i][y]=counter;}
return[x-n+1,y];}else if(direction==2){for(var i=0;i<n;i++){counter+=1;meiro[x+i][y]=counter;}
return[x+n-1,y];}else if(direction==3){for(var i=0;i<n;i++){counter+=1;meiro[x][y-i]=counter;}
return[x,y-n+1];}else{for(var i=0;i<n;i++){counter+=1;meiro[x][y+i]=counter;}
return[x,y+n-1];}}
function p(){var str='';for(var i=0;i<size;i++){for(var j=0;j<size;j++){str+=meiro[i][j];}
str+='\n';}
console.log(str);}
function generateGame(){idioms=shuffle(idioms);var generating=true;while(generating){var x1=0;var y1=getRandomInt(1,size-1);var painting=true;counter=0;for(var x=0;x<size;x++){meiro[x]=new Array(size);for(var y=0;y<size;y++){meiro[x][y]=0;}}
var route=getRoute(x1,y1,-1,idioms[0].length);var xy=paint(x1,y1,route[2],idioms[0].length);x1=xy[0];y1=xy[1];var i=1;while(painting){var firsts=shuffle(getNeighborRoutes(x1,y1));if(firsts.length==0){painting=false;}else{var noRoute=true;for(var j=0;j<firsts.length;j++){route=getRoute(firsts[j][0],firsts[j][1],firsts[j][2],idioms[i].length-1);if(route){noRoute=false;paint(firsts[j][0],firsts[j][1],firsts[j][2],1);xy=paint(route[0],route[1],route[2],idioms[i].length-1);x1=xy[0];y1=xy[1];if(x1==0||x1==size-1||y1==0||y1==size-1){painting=false;if(counter>20){generating=false;processed=new Array(counter);}}
i+=1;break;}}
if(noRoute){painting=false;}}}}
var meiroNode=document.getElementById('meiro');while(meiroNode.firstChild){meiroNode.removeChild(meiroNode.firstChild);}
for(var x=0;x<size;x++){var tr=document.createElement('tr');meiroNode.appendChild(tr);for(var y=0;y<size;y++){var td=document.createElement('td');td.innerText=words[getRandomInt(0,words.length)];tr.appendChild(td);td.onclick=function(){this.classList.toggle('table-primary');}}}
var trs=meiroNode.children;var j=0;var k=0;for(var i=1;i<=counter;i++){var idx=findMeiroIndex(i);var idiom=idioms[j][k];var td=trs[Math.floor(idx/size)].children[idx%size];td.innerText=idiom;if(i==1){td.classList.add('table-secondary');}
if(k==idioms[j].length-1){j+=1;k=0;}else{k+=1;}}}
function resizeFontSize(node){function getTextWidth(text,font){var context=tmpCanvas.getContext("2d");context.font=font;var metrics=context.measureText(text);return metrics.width;}
function getTextRect(text,fontSize,font,lineHeight){var lines=text.split('\n');var maxWidth=0;var fontConfig=fontSize+'px '+font;for(var i=0;i<lines.length;i++){var width=getTextWidth(lines[i],fontConfig);if(maxWidth<width){maxWidth=width;}}
return[maxWidth,fontSize*lines.length*lineHeight];}
function getNodeRect(){var width=document.getElementById('container').clientWidth;var headerHeight=document.getElementById('header').clientHeight;var startButtonHeight=document.getElementById('startButton').clientHeight;var height=document.documentElement.clientHeight-headerHeight-startButtonHeight;return[width,height];}
var style=getComputedStyle(node);var font=style.fontFamily;var fontSize=16;var lineHeight=1.1;var nodeRect=getNodeRect();var textRect=getTextRect('禿',fontSize,font,lineHeight);var paddingRect=[remSize*2+21,remSize*1.5+6];var rowFontSize=fontSize*(nodeRect[0]-paddingRect[0])/12/textRect[0]*0.90;var colFontSize=fontSize*(nodeRect[1]-paddingRect[1])/12/textRect[1]*0.90;if(colFontSize<rowFontSize){node.style.fontSize=colFontSize+'px';}else{node.style.fontSize=rowFontSize+'px';}}
function toggleDarkMode(){if(localStorage.getItem('darkMode')==1){localStorage.setItem('darkMode',0);delete document.documentElement.dataset.theme;}else{localStorage.setItem('darkMode',1);document.documentElement.dataset.theme='dark';}}
var timerText=document.getElementById('meiro');resizeFontSize(timerText);window.addEventListener('resize',function(){resizeFontSize(timerText);});generateGame();strictSolution();while(solvedPanel.firstChild){solvedPanel.removeChild(solvedPanel.firstChild);}
showAnswer();