#!/usr/bin/env bash

set -e
SOURCE_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

function usage {
    echo -e "Usage: sam [command]"
    echo -e ""
    echo -e "Commands:"
    echo -e "\thelp\t\t-\tHelp to display this message"
    echo -e "\tinstall\t\t-\tInstall dependencies"
    echo -e "\ttest\t\t-\tLint and test"
    echo -e "\tbuild_dist\t-\tBuild distribution"
    echo -e "\tdockerise\t-\tBuild gola-ui-web docker image"
    echo -e "\trun\t\t-\tRun the gola-ui-web docker image as daemon"
    echo -e "\tstop\t\t-\tStop the running gola-ui-web docker image"
    echo -e "\tpush\t\t-\tPush the docker image to the docker registry"
    echo -e ""
    echo -e "No command will execute install, test, build_dist, dockerise and run"
}

function main {
    case "$1" in

    "")
    source $SOURCE_DIR/sam-scripts/install_dependencies.sh
    source $SOURCE_DIR/sam-scripts/test.sh
    source $SOURCE_DIR/sam-scripts/build_dist.sh
    source $SOURCE_DIR/sam-scripts/dockerise.sh
    source $SOURCE_DIR/sam-scripts/run.sh
    ;;
    install) source $SOURCE_DIR/sam-scripts/install_dependencies.sh ;;
    build_dist) source $SOURCE_DIR/sam-scripts/build_dist.sh ;;
    dockerise) source $SOURCE_DIR/sam-scripts/dockerise.sh ;;
    test) source $SOURCE_DIR/sam-scripts/test.sh ;;
    run) source $SOURCE_DIR/sam-scripts/run.sh ;;
    stop) source $SOURCE_DIR/sam-scripts/stop.sh ;;
    push) source $SOURCE_DIR/sam-scripts/push.sh ;;

    help) usage ;;
    *)
        echo "There are mysteries to the universe we were never meant to solve, but who we are and why we are here, are not among them, those answers we carry inside ..."
        echo ""
        echo ""
        usage
        exit 1
        ;;
    esac
}

main "$@"
