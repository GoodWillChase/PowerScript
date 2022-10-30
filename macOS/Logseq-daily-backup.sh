#!/usr/bin/env sh

root_folder="/Users/zhang/Library/Mobile\ Documents/iCloud\~com\~logseq\~logseq/Documents/"
target_folder="/Users/zhang/Dropbox/Apps/LogseqBackup/"

tar -czf /Users/zhang/Dropbox/Apps/LogseqBackup/logseq-bak-$(date "+%Y-%m-%d").tar.gz /Users/zhang/Library/Mobile\ Documents/iCloud\~com\~logseq\~logseq/Documents/journals /Users/zhang/Library/Mobile\ Documents/iCloud\~com\~logseq\~logseq/Documents/logseq /Users/zhang/Library/Mobile\ Documents/iCloud\~com\~logseq\~logseq/Documents/pages
