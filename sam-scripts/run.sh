echo "Running dockerised gola-ui-web on port 80"

docker run --rm -d -p 80:80 --name gola-ui-web gola-ui-web
