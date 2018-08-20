# setup
@see https://qiita.com/maru_cc/items/ea483477d7ed7df6a9cc
brewで pkgconfig をインストール
brew install pkgconfig
pkgから XQuartz をインストール
https://xquartz.macosforge.org/landing/
XQuartz-2.7.5.dmg
brewで cairo をインストール
brew install cairo
$PKG_CONFIG_PATH を設定
export PKG_CONFIG_PATH=$PKG_CONFIG_PATH:/opt/X11/lib/pkgconfig
brew install libjpeg
