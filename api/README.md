# Marvel Search Engine

docker build -t comics .

docker-compose build

docker-compose up -d mongo

docker run -p 3000:3000 comics

docker-compose down
