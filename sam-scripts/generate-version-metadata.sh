#! /usr/bin/env bash
SOURCE_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

cat > $SOURCE_DIR/../metadata <<EOF
export GO_REVISION_GOLA_UI_WEB=$GO_REVISION_GOLA_UI_WEB
export GIT_REVISION=$GO_REVISION_GOLA_UI_WEB
export GIT_REPO_NAME=gola-ui-web
EOF
