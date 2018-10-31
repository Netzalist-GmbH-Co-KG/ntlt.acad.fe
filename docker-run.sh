docker stop ntlt-acad-fe
docker rm ntlt-acad-fe
docker run --name=ntlt-acad-fe -d -p=80:80 ntlt/ntlt.acad.fe
