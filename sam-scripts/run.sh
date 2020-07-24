echo "Running dockerised ui-web on port 80"

docker run --rm -d -p 80:80 --name ui-web gola-ui-web
