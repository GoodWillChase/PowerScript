; basic command

^b::  ; CTRL+B 热键
{
    Send "{Ctrl down}c{Ctrl up}"  ; 复制选定的文本. 也可以使用 ^c, 但这种方法更加可靠.
    SendInput "<big>{Ctrl down}v{Ctrl up}</big>" ; 将选定的文本包装在 BBCode 标签中, 以便在论坛中以粗体显示.
}  ; 热键内容结束, 当按下热键时, 下面的代码将不会被执行.

